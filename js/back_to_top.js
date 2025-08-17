document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const scrollThreshold = 300; // 滚动超过300px后显示按钮

    // 设置侧边栏宽度变量（用于桌面布局定位）
    function setSidebarWidth() {
        // 注意要和侧边布局的那个临界点的width match
        if (window.matchMedia('(min-width: 992px)').matches) {
            const sidebar = document.querySelector('.col.m3');
            if (sidebar) {
                const sidebarWidth = sidebar.offsetWidth;
                document.documentElement.style.setProperty('--sidebar-width', `${sidebarWidth}px`);
            }
        }
    }

    // 初始化设置
    setSidebarWidth();

    // 获取正确的滚动容器
    let scrollContainer = window; // 默认使用窗口作为滚动容器

    function updateScrollContainer() {
        // 在桌面视图（侧边栏布局）中
        // 注意要和侧边布局的那个临界点的width match
        if (window.matchMedia('(min-width: 992px)').matches) {
            // 尝试使用 .post-listing 作为滚动容器
            const postListing = document.querySelector('.post-listing');
            if (postListing) {
                scrollContainer = postListing;
                return;
            }
        }

        // 其他情况使用窗口作为滚动容器
        scrollContainer = window;
    }

    // 初始化滚动容器
    updateScrollContainer();

    // 处理滚动事件
    function handleScroll() {
        let scrollPosition;

        if (scrollContainer === window) {
            // 窗口滚动
            scrollPosition = window.scrollY || document.documentElement.scrollTop;
        } else {
            // 内容区域滚动
            scrollPosition = scrollContainer.scrollTop;
        }

        if (scrollPosition > scrollThreshold) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    }

    // 初始化检查
    handleScroll();

    // 监听滚动事件
    function setupScrollListener() {
        // 移除所有可能的旧监听器
        window.removeEventListener('scroll', handleScroll);

        // 尝试移除可能的容器监听器
        const postListing = document.querySelector('.post-listing');
        if (postListing) {
            postListing.removeEventListener('scroll', handleScroll);
        }

        // 添加新监听器到当前滚动容器
        scrollContainer.addEventListener('scroll', handleScroll);
    }

    setupScrollListener();

    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        // 更新侧边栏宽度
        setSidebarWidth();

        // 保存旧容器
        const oldContainer = scrollContainer;

        // 更新滚动容器
        updateScrollContainer();

        // 如果滚动容器发生变化
        if (oldContainer !== scrollContainer) {
            setupScrollListener();
        }

        // 重新检查滚动位置
        handleScroll();
    });

    // 点击按钮返回顶部
    backToTopButton.addEventListener('click', function() {
        if (scrollContainer === window) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            scrollContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});