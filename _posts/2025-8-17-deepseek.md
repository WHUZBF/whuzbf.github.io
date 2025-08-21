---
layout: post
title:  简单调教了下DeepSeek
categories: [cs, physics]
tags: [life, cs]
---
今天是和DeepSeek斗智斗勇的一整天，别看我建了这一整个网站，其实对前端一窍不通，但DeepSeek却能帮我写出这么多还看得过去的css和功能还凑活的js。晚上zotero突发恶疾，原来的arxiv订阅不知道咋回事无法及时更新，本来订阅了每天的arxiv邮件，不过排版实在是一言难尽，所以就琢磨着能不能用python写一个自动爬取arxiv的小程序，不过有了deepseek确实发现自己代码水平已经下降到小学生信息课水平。。。
<!--more-->

调教了大概两三个小时的DeepSeek，现在功能基本齐全了，在工作日会自动爬取前24小时投递的文献，在双休日则会自动爬取一整周的文献，而且排版改的我还满意。比较好的功能是可以自动查找作者的inspire主页，这样就能一键看看是不是大佬写的文章。。。

其实这都是非常简单的代码，没有什么复杂的逻辑在里面，deepseek处理起来轻轻松松，一旦涉及到一些困难的，特别是里面有很复杂的逻辑的时候deepseek就不会处理了，比如这个time_period需要根据[arxiv官方发布的时刻表](https://info.arxiv.org/help/availability.html)来推断需要获取什么时间段的文献，就这个人类很容易理解的逻辑deepseek需要我纠正多次才能弄懂（可能也是我问的不好）。

代码如下，如果后面使用有什么bug我再改动：

# 源代码

## main.py

```python
import requests
import feedparser
from datetime import datetime, timedelta, timezone
import re
from arxiv_cats import get_all_arxiv_categories, primary_categories
from crawler import get_inspire_paper_info, get_inspire_author_link
from time_period import get_arxiv_submission_period

# 用户选择分区
def select_arxiv_category():
    """让用户选择arXiv分区，默认返回hep-th"""
    valid_categories = get_all_arxiv_categories()
    
    while True:
        user_input = input("📚 请输入你想查看的arXiv分区 (直接回车默认为 hep-th): ").strip()
        
        # 默认值
        if user_input == "":
            return "hep-th"
        
        # 检查输入是否有效
        if user_input in valid_categories:
            return user_input
        
        print(f"⚠️ 错误: '{user_input}' 不是有效的（二级）arXiv分区。")
        print("请使用以下（一级）分区对应的子分区: " + ", ".join(primary_categories()))
        print("请重新输入或直接回车使用默认值。\n")

def main(category=None, start_date=None, end_date = datetime.now(timezone.utc)):
    if not category:
        # 让用户选择arXiv分区
        category = select_arxiv_category()
        print(f"\n🔬 你选择的分区是: {category}\n")
    
    # 获取当前UTC时间
    now = datetime.now(timezone.utc)

    if not start_date:
        # 获取arXiv提交时间段
        start_date, end_date, time_range_description, is_weekend = get_arxiv_submission_period()
    else:
        is_weekend= False
        time_range_description = f"🤔 自定义范围模式：查找了过去{end_date.__sub__(start_date)}天的论文"

    # 转换为UTC时间
    start_date_utc = start_date.astimezone(timezone.utc)
    end_date_utc = end_date.astimezone(timezone.utc)

    # 格式化为arXiv API需要的格式（YYYYMMDDHHMM）
    start_date = start_date_utc.strftime('%Y%m%d%H%M')
    end_date = end_date_utc.strftime('%Y%m%d%H%M')
    
    # 构造API查询URL
    query = f'submittedDate:[{start_date} TO {end_date}] AND cat:{category}'
    base_url = 'http://export.arxiv.org/api/query?'
    params = {
        'search_query': query,
        'sortBy': 'submittedDate',
        'sortOrder': 'descending',
        'max_results': 500,  # 增加数量以容纳一周的论文
        'start': 0
    }

    print(f"⏳ 查询arXiv API: {query}")
    print(f"  时间范围: {start_date} 到 {end_date}")
    print(f"  模式: {time_range_description}")

    # 发送API请求
    response = requests.get(base_url, params=params)

    # 解析Atom响应
    feed = feedparser.parse(response.content)
    num_papers = len(feed.entries)
    
    # 检查是否找到论文
    if num_papers == 0:
        print("\n" + "="*60)
        print("🌟 今天没有新论文！ 🌟")
        print("="*60)
        print(f"\n🔍 在 {category} 分区中没有找到任何新论文。")
        print(f"📅 时间范围: {start_date[:4]}.{start_date[4:6]}.{start_date[6:8]} 到 {end_date[:4]}.{end_date[4:6]}.{end_date[6:8]}")
        print(f"⏰ 下次更新时间: 明天同一时间再来看看吧！")
        print(f"💡 提示: 可以尝试选择其他分区或扩大时间范围")
        if input(f"🧐 想看看更早的论文吗？(Y/N): ").strip().lower() == "y":
            new_timedelta = int(input(f"📅 想看多久之前的呢: "))
            main(category, start_date=(now - timedelta(days=new_timedelta)))
        return  # 直接退出，不执行后续操作

    print(f"✅ 找到 {num_papers} 篇论文")

    # 存储主分区为选定分区和其他分区的论文
    primary_papers = []
    other_papers = []

    # 进度计数器
    processed = 0

    for entry in feed.entries:
        processed += 1
        # 提取arXiv ID
        arxiv_id = entry.id.split('/')[-1]
        # 移除版本号（如v1, v2等）
        arxiv_id_clean = re.sub(r'v\d+$', '', arxiv_id)
        
        # 清理标题并转换公式标记
        title = entry.title.replace('\n', ' ').strip()
        # 把多个空格转换为单个空格
        title = " ".join(title.split())
        # 将 \(...\) 转换为 $...$
        title = re.sub(r'\\\((.*?)\\\)', r'$\1$', title)
        # 将 \[...\] 转换为 $$...$$
        title = re.sub(r'\\\[(.*?)\\\]', r'$$\1$$', title)
        
        print(f"\n📄 [{processed}/{num_papers}] 处理论文: {title[:60]}...")
        
        # 获取文章的分类信息
        categories = [tag['term'] for tag in entry.tags]
        primary_category = categories[0] if categories else "unknown"
        
        if category in ['hep-th','hep-ph','hep-ex','hep-lat','math-ph','gr-qc']:
            # 首先尝试通过arXiv ID获取INSPIRE上的作者信息
            inspire_authors = get_inspire_paper_info(arxiv_id_clean)
            
            if inspire_authors:
                print(f"   ✅ 使用INSPIRE上的作者列表")
                # 使用INSPIRE上的作者信息
                author_links = []
                for author in inspire_authors:
                    if author['link']:
                        author_links.append(f"[{author['name']}]({author['link']})")
                    else:
                        author_links.append(author['name'])
                
                authors = ', '.join(author_links)
            else:
                # 不在inspire上的文献标记一下，从而作者索引可能不准确
                title = "[**⚠️ Not in INSPIRE ⚠️**] "+title
                print(f"   ⚠️ 未找到INSPIRE记录，使用arXiv作者列表")
                # 使用arXiv作者列表并进行逐个匹配
                author_links = []
                for author in entry.authors:
                    author_name = author.name
                    print(f"  👤 作者: {author_name}")
                    
                    # 获取INSPIRE上的作者信息
                    inspire_name, inspire_link = get_inspire_author_link(author_name)
                    
                    # 使用INSPIRE上的作者名和链接（如果找到）
                    if inspire_link:
                        author_links.append(f"[{inspire_name}]({inspire_link})")
                    else:
                        # 没有找到链接，使用原始名字
                        author_links.append(author_name)
                
                authors = ', '.join(author_links)
        else:
            # 非高能方向不使用INSPIRE
            author_links = []
            for author in entry.authors:
                author_name = author.name
                author_links.append(author_name)
            authors = ', '.join(author_links)
        
        # 清理摘要并转换公式标记
        abstract = entry.summary.replace('\n', ' ').strip()
        # 将 \(...\) 转换为 $...$
        abstract = re.sub(r'\\\((.*?)\\\)', r'$\1$', abstract)
        # 将 \[...\] 转换为 $$...$$
        abstract = re.sub(r'\\\[(.*?)\\\]', r'$$\1$$', abstract)
        
        # 获取提交日期
        published = datetime.strptime(entry.published, '%Y-%m-%dT%H:%M:%SZ')
        
        # 构建论文信息字典
        paper_info = {
            'title': title,
            'authors': authors,
            'abstract': abstract,
            'published': published,
            'arxiv_id_clean': arxiv_id_clean,
            'primary_category': primary_category,
            'all_categories': categories
        }
        
        # 根据主分类将论文分组
        if primary_category == category:
            primary_papers.append(paper_info)
        else:
            other_papers.append(paper_info)

    # 生成Markdown内容
    markdown_content = f"# arXiv {category} Papers ({time_range_description})\n\n"
    markdown_content += f"*Generated at: {now.strftime('%Y-%m-%d %H:%M:%S UTC')}*\n"
    markdown_content += f"*Date Range: {start_date[:4]}.{start_date[4:6]}.{start_date[6:8]} to {end_date[:4]}.{end_date[4:6]}.{end_date[6:8]}*\n\n"
    markdown_content += f"## Found {len(primary_papers)} papers (primary in {category}) and {len(other_papers)} related papers\n\n"
    markdown_content += "---\n"

    # 第一部分：主分区为选定分区的论文
    if primary_papers:
        markdown_content += f"## Primary in {category} ({len(primary_papers)} papers)\n\n"
        
        for paper in primary_papers:
            # 格式化分类信息
            primary_str = f"**`{paper['primary_category']}`**"
            # 获取其他分类（去重并排除主分类）
            other_categories = list(set(paper['all_categories']) - {paper['primary_category']})
            other_categories_str = ', '.join([f"`{cat}`" for cat in other_categories])
            
            category_info = primary_str
            if other_categories_str:
                category_info += f", {other_categories_str}"
            
            markdown_content += f"### [{paper['title']}](https://arxiv.org/abs/{paper['arxiv_id_clean']})\n"
            markdown_content += f"{paper['authors']}\n"  # 两个空格强制换行
            markdown_content += f"{category_info}\n"
            markdown_content += f"*Submitted: {paper['published'].strftime('%Y-%m-%d %H:%M UTC')}*\n\n"
            markdown_content += f"> {paper['abstract']}\n\n"  # 摘要放在引用块中
            markdown_content += "---\n"

    # 第二部分：主分区不是选定分区的相关论文
    if other_papers:
        markdown_content += f"## Related Papers in Other Categories ({len(other_papers)} papers)\n\n"
        markdown_content += f"*Note: These papers are listed in {category} but have a primary category in another field*\n\n"
        
        for paper in other_papers:
            # 格式化分类信息
            primary_str = f"**`{paper['primary_category']}`**"
            # 获取其他分类（去重并排除主分类）
            other_categories = list(set(paper['all_categories']) - {paper['primary_category']})
            other_categories_str = ', '.join([f"`{cat}`" for cat in other_categories])
            
            category_info = primary_str
            if other_categories_str:
                category_info += f", {other_categories_str}"
            
            markdown_content += f"### [{paper['title']}](https://arxiv.org/abs/{paper['arxiv_id_clean']})\n"
            markdown_content += f"{paper['authors']}\n"  # 两个空格强制换行
            markdown_content += f"{category_info}\n"
            markdown_content += f"*Submitted: {paper['published'].strftime('%Y-%m-%d %H:%M UTC')}*\n\n"
            markdown_content += f"> {paper['abstract']}\n\n"  # 摘要放在引用块中
            markdown_content += "---\n"

    # 写入Markdown文件
    filename = f"{category}_papers_{now.strftime('%Y%m%d_%H%M%S')}.md"
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(markdown_content)

    print(f"\n✅ 成功保存 {len(primary_papers)} 篇主分区{category}论文和 {len(other_papers)} 篇相关论文到 {filename}")
    if is_weekend:
        print("️🏖️ 周末了，让我们回顾以下这周学术界发生了什么")
    else:
        print("🏢 工作日，看看昨天大家整了什么活")
        print(f"📅 时间范围: {time_range_description} (美国东部时间)")
    print("ℹ️ 作者信息优先使用INSPIRE上的记录")
    print("ℹ️ 公式标记已转换为Markdown兼容格式")
    print(f"ℹ️ 论文按主分类分组: {category}主分区在前，其他相关论文在后")

if __name__ == "__main__":
    flag = 1
    while flag:
        main()
        continue_flag = input("🧐 还要继续看吗 (Y/N) : ").strip().lower()
        if continue_flag == "n":
            flag = 0
```

## crawler

这个是爬虫主要在的程序
```python
from urllib.parse import quote
import requests
import time
import re
import unidecode
import difflib

def normalize_name(name):
    """标准化作者名字以进行更好的比较"""
    # 移除重音符号
    name = unidecode.unidecode(name)
    # 转换为小写
    name = name.lower()
    # 移除多余空格和标点
    name = re.sub(r'[^\w\s]', '', name)
    # 保留姓氏和名字的首字母（处理中间名差异）
    parts = name.split()
    if len(parts) > 1:
        # 保留姓氏全名和名字首字母
        last_name = parts[-1]
        first_initials = "".join([p[0] for p in parts[:-1]])
        return f"{first_initials}{last_name}"
    return name

def get_inspire_paper_info(arxiv_id):
    """通过arXiv ID获取INSPIRE上的论文信息，包括作者列表"""
    inspire_url = f"https://inspirehep.net/api/literature?q=arxiv:{arxiv_id}"
    try:
        print(f"🔍 通过文章号 {arxiv_id} 查找INSPIRE记录...")
        response = requests.get(inspire_url, headers={"Accept": "application/json"})

        if response.status_code == 200:
            data = response.json()
            total_hits = data.get('hits', {}).get('total', 0)

            if total_hits > 0:
                print(f"   ✅ 找到文章记录 ({total_hits} 条匹配)")
                # 获取第一篇文章记录中的所有作者
                authors = data['hits']['hits'][0]['metadata'].get('authors', [])
                print(f"   文章中有 {len(authors)} 位作者记录")

                # 提取作者信息
                author_info = []
                for author in authors:
                    full_name = author.get('full_name', '')
                    recid = author.get('recid')

                    # 转换名字格式：从"姓, 名"改为"名 姓"
                    if ',' in full_name:
                        last_name, first_name = full_name.split(',', 1)
                        formatted_name = f"{first_name.strip()} {last_name.strip()}"
                    else:
                        formatted_name = full_name

                    if formatted_name and recid:
                        author_info.append({
                            'name': formatted_name,
                            'link': f"https://inspirehep.net/authors/{recid}"
                        })
                    elif formatted_name:
                        author_info.append({
                            'name': formatted_name,
                            'link': None
                        })
                    else:
                        author_info.append({
                            'name': "Unknown",
                            'link': None
                        })
                return author_info
            else:
                print(f"   ⚠️ 没有找到文章 {arxiv_id} 的INSPIRE记录")
        else:
            print(f"   ❌ INSPIRE API 错误: HTTP {response.status_code}")
    except Exception as e:
        print(f"   ❌ 通过文章号查找时出错: {str(e)}")

    # 添加延迟以避免频繁请求INSPIRE API
    time.sleep(0.3)

    return None


def get_inspire_author_link(author_name):
    """通过作者名搜索INSPIRE链接（当整篇文章未匹配时使用）"""
    # 标准化查询名称
    normalized_query = normalize_name(author_name)

    search_name = quote(author_name)
    inspire_url = f"https://inspirehep.net/api/authors?q={search_name}&size=5"  # 获取前5个结果
    try:
        print(f"🔍 通过作者名搜索: {author_name}...")
        response = requests.get(inspire_url, headers={"Accept": "application/json"})

        if response.status_code == 200:
            data = response.json()
            total_hits = data.get('hits', {}).get('total', 0)

            if total_hits > 0:
                print(f"   ✅ 找到 {total_hits} 个匹配的作者")

                # 创建候选列表用于模糊匹配
                candidate_names = []
                for hit in data['hits']['hits']:
                    candidate_name = hit['metadata'].get('name', {}).get('value', '')
                    if not candidate_name:
                        continue

                    # 转换名字格式：从"姓, 名"改为"名 姓"
                    if ',' in candidate_name:
                        last_name, first_name = candidate_name.split(',', 1)
                        formatted_name = f"{first_name.strip()} {last_name.strip()}"
                    else:
                        formatted_name = candidate_name

                    normalized_candidate = normalize_name(formatted_name)
                    candidate_names.append((formatted_name, normalized_candidate, hit))

                # 使用模糊匹配找到最接近的作者
                best_match = None
                best_score = 0
                for candidate_name, normalized_candidate, hit_data in candidate_names:
                    # 计算相似度分数
                    score = difflib.SequenceMatcher(
                        None, normalized_query, normalized_candidate
                    ).ratio()

                    # 更新最佳匹配
                    if score > best_score:
                        best_score = score
                        best_match = (candidate_name, hit_data)

                # 检查是否找到足够相似的匹配
                if best_match and best_score > 0.7:  # 70%相似度阈值
                    match_name, hit_data = best_match
                    recid = hit_data['id']
                    print(f"   ✅ 模糊匹配成功: {author_name} ≈ {match_name} (相似度: {best_score:.2f})")
                    return match_name, f"https://inspirehep.net/authors/{recid}"
                else:
                    print(f"   ⚠️ 没有足够相似的匹配 (最高相似度: {best_score:.2f})")
            else:
                print(f"   ⚠️ 没有找到作者 {author_name} 的INSPIRE记录")
        else:
            print(f"   ❌ INSPIRE API 错误: HTTP {response.status_code}")
    except Exception as e:
        print(f"   ❌ 通过作者名查找时出错: {str(e)}")

    # 找不到
    print(f"   ❌ 无法找到 {author_name} 的INSPIRE链接")

    # 添加延迟以避免频繁请求INSPIRE API
    time.sleep(0.3)

    return author_name, None
```

## time_period

这个是用来计算此时此刻应当获取哪个时间段的论文

```python
import pytz
from datetime import datetime, timedelta, timezone

import pytz
from datetime import datetime, timedelta, time, timezone


def get_arxiv_submission_period():
    """根据arXiv提交时间表确定当前应该查询的时间段"""
    # 美国东部时区
    eastern = pytz.timezone('US/Eastern')

    # 当前时间（UTC）转换为东部时间
    now_utc = datetime.now(timezone.utc)
    now_et = now_utc.astimezone(eastern)

    # 获取当前星期几（0=周一，1=周二，...，6=周日）和当前时间
    weekday = now_et.weekday()
    current_time = now_et.time()

    # 判断是否是周末且20:00前
    is_weekend = False
    if weekday in [5, 6] and current_time < time(20, 0):
        is_weekend = True
        # 计算本周五的日期
        days_to_friday = (4 - weekday) % 7
        this_friday = now_et - timedelta(days=days_to_friday)

        # 设置时间段为上周五14:00至本周五14:00
        start_date = (this_friday - timedelta(days=7)).replace(
            hour=14, minute=0, second=0, microsecond=0
        )
        end_date = this_friday.replace(
            hour=14, minute=0, second=0, microsecond=0
        )
        description = "Friday 14:00 – Friday 14:00 (one week)"
        return start_date, end_date, description, is_weekend

    # 非周末或周末20:00后的正常逻辑
    # 找出最近的有效公布时间点（20:00 ET）
    announcement_time = None
    for days_back in range(7):  # 最多回溯7天
        candidate_date = now_et - timedelta(days=days_back)
        candidate_weekday = candidate_date.weekday()

        # 只考虑有效公布日（周一、二、三、四、日）
        if candidate_weekday not in [0, 1, 2, 3, 6]:
            continue

        # 构建候选公布时间点（当天20:00 ET）
        candidate_time = candidate_date.replace(
            hour=20, minute=0, second=0, microsecond=0
        )

        # 找到最近一个已发生的公布时间点
        if candidate_time <= now_et:
            announcement_time = candidate_time
            break

    # 根据公布时间点确定对应的提交时间段
    if announcement_time is None:
        # 理论上不会发生，为安全起见使用默认值
        start_date = now_et - timedelta(days=7)
        end_date = now_et
        description = "Fallback: Last 7 days"
    else:
        ann_weekday = announcement_time.weekday()

        # 周一公布：周五14:00至周一14:00
        if ann_weekday == 0:  # Monday
            start_date = (announcement_time - timedelta(days=3)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            end_date = announcement_time.replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            description = "Friday 14:00 – Monday 14:00"

        # 周二公布：周一14:00至周二14:00
        elif ann_weekday == 1:  # Tuesday
            start_date = (announcement_time - timedelta(days=1)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            end_date = announcement_time.replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            description = "Monday 14:00 – Tuesday 14:00"

        # 周三公布：周二14:00至周三14:00
        elif ann_weekday == 2:  # Wednesday
            start_date = (announcement_time - timedelta(days=1)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            end_date = announcement_time.replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            description = "Tuesday 14:00 – Wednesday 14:00"

        # 周四公布：周三14:00至周四14:00
        elif ann_weekday == 3:  # Thursday
            start_date = (announcement_time - timedelta(days=1)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            end_date = announcement_time.replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            description = "Wednesday 14:00 – Thursday 14:00"

        # 周日公布：周四14:00至周五14:00
        elif ann_weekday == 6:  # Sunday
            start_date = (announcement_time - timedelta(days=3)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            end_date = (announcement_time - timedelta(days=2)).replace(
                hour=14, minute=0, second=0, microsecond=0
            )
            description = "Thursday 14:00 – Friday 14:00"

    return start_date, end_date, description, is_weekend
```

## arxiv_cats

这个是arxiv分区的字典所在位置
```python
# 获取有效的arXiv分区列表
def get_all_arxiv_categories():
    """获取arXiv全部有效分类（包含一级主分类和二级子分类）"""
    return [
        # 天体物理学 (astro-ph)
        "astro-ph.GA",  # 银河系天体物理学
        "astro-ph.CO",  # 宇宙学和暗物质
        "astro-ph.EP",  # 地球和行星天体物理学
        "astro-ph.HE",  # 高能天体物理
        "astro-ph.IM",  # 仪器和方法
        "astro-ph.SR",  # 太阳和恒星天体物理学

        # 凝聚态物理 (cond-mat)
        "cond-mat.dis-nn",  # 无序系统和神经网络
        "cond-mat.mes-hall",  # 介观系统和量子霍尔效应
        "cond-mat.mtrl-sci",  # 材料科学
        "cond-mat.other",  # 其他凝聚态物理
        "cond-mat.quant-gas",  # 量子气体
        "cond-mat.soft",  # 软凝聚态物质
        "cond-mat.stat-mech",  # 统计力学
        "cond-mat.str-el",  # 强关联电子系统
        "cond-mat.supr-con",  # 超导

        # 计算机科学 (cs)
        "cs.AI",  # 人工智能
        "cs.CL",  # 计算语言学
        "cs.CC",  # 计算复杂性
        "cs.CE",  # 计算工程、金融和科学
        "cs.CG",  # 计算几何
        "cs.GT",  # 计算机科学与博弈论
        "cs.CV",  # 计算机视觉与模式识别
        "cs.CY",  # 计算机与社会
        "cs.CR",  # 密码学与安全
        "cs.DS",  # 数据结构和算法
        "cs.DB",  # 数据库
        "cs.DL",  # 数字图书馆
        "cs.DM",  # 离散数学
        "cs.DC",  # 分布式、并行和集群计算
        "cs.ET",  # 新兴技术
        "cs.FL",  # 形式语言与自动机
        "cs.GL",  # 通用文献
        "cs.GR",  # 图形学
        "cs.AR",  # 硬件架构
        "cs.HC",  # 人机交互
        "cs.IR",  # 信息检索
        "cs.IT",  # 信息论
        "cs.LO",  # 计算逻辑
        "cs.LG",  # 机器学习
        "cs.MS",  # 数学软件
        "cs.MA",  # 多智能体系统
        "cs.MM",  # 多媒体
        "cs.NI",  # 网络与互联网
        "cs.NE",  # 神经与演化计算
        "cs.NA",  # 数值分析
        "cs.OS",  # 操作系统
        "cs.OH",  # 其他计算机科学
        "cs.PF",  # 性能分析
        "cs.PL",  # 编程语言
        "cs.RO",  # 机器人学
        "cs.SI",  # 社交与信息网络
        "cs.SE",  # 软件工程
        "cs.SD",  # 声音与音乐计算
        "cs.SC",  # 符号计算
        "cs.SY",  # 系统与控制

        # 经济学 (econ)
        "econ.EM",  # 计量经济学
        "econ.GN",  # 通用经济学
        "econ.TH",  # 经济理论

        # 电气工程与系统科学 (eess)
        "eess.AS",  # 音频与语音处理
        "eess.IV",  # 图像与视频处理
        "eess.SP",  # 信号处理
        "eess.SY",  # 系统与控制

        # 广义相对论与量子宇宙学 (gr-qc) - 无子分类
        "gr-qc",

        # 高能物理-实验 (hep-ex) - 无子分类
        "hep-ex",

        # 高能物理-格点 (hep-lat) - 无子分类
        "hep-lat",

        # 高能物理-现象学 (hep-ph) - 无子分类
        "hep-ph",

        # 高能物理-理论 (hep-th) - 无子分类
        "hep-th",

        # 数学 (math)
        "math.AG",  # 代数几何
        "math.AT",  # 代数拓扑
        "math.AP",  # 分析偏微分方程
        "math.CT",  # 范畴论
        "math.CA",  # 经典分析和常微分方程
        "math.CO",  # 组合数学
        "math.AC",  # 交换代数
        "math.CV",  # 复变量
        "math.DG",  # 微分几何
        "math.DS",  # 动力系统
        "math.FA",  # 泛函分析
        "math.GM",  # 普通数学
        "math.GN",  # 一般拓扑
        "math.GT",  # 几何拓扑
        "math.GR",  # 群论
        "math.HO",  # 数学史和概述
        "math.IT",  # 信息论
        "math.KT",  # K-理论
        "math.LO",  # 逻辑
        "math.MP",  # 数学物理
        "math.MG",  # 度量几何
        "math.NT",  # 数论
        "math.NA",  # 数值分析
        "math.OA",  # 算子代数
        "math.OC",  # 优化与控制
        "math.PR",  # 概率
        "math.QA",  # 量子代数
        "math.RT",  # 表示论
        "math.RA",  # 环与代数
        "math.SP",  # 谱理论
        "math.ST",  # 统计学理论
        "math.SG",  # 辛几何

        # 数学物理 (math-ph) - 无子分类
        "math-ph",

        # 非线性科学 (nlin)
        "nlin.AO",  # 适应性和自组织系统
        "nlin.CG",  # 细胞自动机和晶格气体
        "nlin.CD",  # 混沌动力学
        "nlin.SI",  # 可积系统
        "nlin.PS",  # 模式形成和孤子

        # 核实验 (nucl-ex) - 无子分类
        "nucl-ex",

        # 核理论 (nucl-th) - 无子分类
        "nucl-th",

        # 物理学 (physics)
        "physics.acc-ph",  # 加速器物理
        "physics.app-ph",  # 应用物理
        "physics.ao-ph",  # 大气和海洋物理
        "physics.atm-clus",  # 原子和团簇物理
        "physics.atom-ph",  # 原子物理
        "physics.bio-ph",  # 生物物理
        "physics.chem-ph",  # 化学物理
        "physics.class-ph",  # 经典物理
        "physics.comp-ph",  # 计算物理
        "physics.data-an",  # 数据分析、统计和概率
        "physics.ed-ph",  # 物理教育
        "physics.flu-dyn",  # 流体动力学
        "physics.gen-ph",  # 普通物理
        "physics.geo-ph",  # 地球物理
        "physics.hist-ph",  # 物理史
        "physics.ins-det",  # 仪器和探测器
        "physics.med-ph",  # 医学物理
        "physics.optics",  # 光学
        "physics.plasm-ph",  # 等离子体物理
        "physics.pop-ph",  # 大众物理
        "physics.soc-ph",  # 物理与社会
        "physics.space-ph",  # 空间物理

        # 定量生物学 (q-bio)
        "q-bio.BM",  # 生物分子学
        "q-bio.CB",  # 细胞行为
        "q-bio.GN",  # 基因组学
        "q-bio.MN",  # 分子网络
        "q-bio.NC",  # 神经元与认知
        "q-bio.OT",  # 其他定量生物学
        "q-bio.PE",  # 种群和进化
        "q-bio.QM",  # 定量方法
        "q-bio.SC",  # 亚细胞过程
        "q-bio.TO",  # 组织与器官

        # 定量金融学 (q-fin)
        "q-fin.CP",  # 计算金融
        "q-fin.EC",  # 经济学（理论）
        "q-fin.GN",  # 通用金融
        "q-fin.MF",  # 数学金融
        "q-fin.PM",  # 投资组合管理
        "q-fin.PR",  # 定价证券
        "q-fin.RM",  # 风险管理
        "q-fin.ST",  # 统计金融
        "q-fin.TR",  # 交易与市场微观结构

        # 量子物理 (quant-ph) - 无子分类
        "quant-ph",

        # 统计学 (stat)
        "stat.AP",  # 应用统计
        "stat.CO",  # 计算统计
        "stat.ML",  # 机器学习统计
        "stat.ME",  # 方法论
        "stat.OT",  # 其他统计
        "stat.TH"  # 统计理论
    ]


def primary_categories():
    """获取arXiv全部有效的一级分类列表（主分类）"""
    return [
        # 物理类
        "astro-ph",  # 天体物理学
        "cond-mat",  # 凝聚态物理
        "gr-qc",  # 广义相对论与量子宇宙学
        "hep-ex",  # 高能物理-实验
        "hep-lat",  # 高能物理-格点
        "hep-ph",  # 高能物理-现象学
        "hep-th",  # 高能物理-理论
        "nucl-ex",  # 核实验
        "nucl-th",  # 核理论
        "physics",  # 物理学（综合）
        "quant-ph",  # 量子物理

        # 数学类
        "math",  # 数学（综合）
        "math-ph",  # 数学物理

        # 计算机科学类
        "cs",  # 计算机科学（综合）

        # 交叉学科类
        "nlin",  # 非线性科学
        "q-bio",  # 定量生物学
        "q-fin",  # 定量金融学

        # 工程类
        "eess",  # 电气工程与系统科学

        # 社会科学类
        "econ",  # 经济学
        "stat"  # 统计学
    ]
```

# To Do List

- [ ] 对于之前已经提交过旧版本现在提交的是更新版本的文献额外标出，并且给出第一版的submit时间以及新版相比于旧版的变化 
- [ ] 告诉用户下次是何时更新文献
- [ ] 进一步规范化md文件命名
- [ ] 有些数学文献会出现类似`05A05`，`05E05`这样的细分号，需要删去

# Bug

目前没发现