// 同时监听copy事件和键盘事件
function handleCopyEvent(e) {
    const selection = window.getSelection();
    if (!selection.toString().trim()) return;

    const meta = document.getElementById('post-meta');
    if (!meta) return;

    const author = meta.dataset.author;
    const url = meta.dataset.url;

    // 构建附加信息
    const attribution = `\n\n--\n作者：${author}\n原文链接：${url}\n`;

    // 修改剪贴板内容
    e.clipboardData.setData('text/plain', selection.toString() + attribution);
    e.preventDefault();

    // 显示通知
    showCopyNotification();
}

// 显示复制通知
function showCopyNotification() {
    const notification = document.getElementById('copy-notification');
    if (notification) {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    }
}

// 监听标准复制事件
document.addEventListener('copy', handleCopyEvent);

// 监听键盘快捷键 (Ctrl+C/Cmd+C)
document.addEventListener('keydown', function(e) {
    // 检查是否是 Ctrl+C (Windows) 或 Cmd+C (Mac)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
        // 添加微小延迟确保复制操作已完成
        setTimeout(() => {
            // 创建模拟的复制事件
            const fakeEvent = new ClipboardEvent('copy', {
                clipboardData: new DataTransfer(),
                bubbles: true,
                cancelable: true
            });

            // 触发自定义处理
            handleCopyEvent(fakeEvent);

            // 如果自定义处理没有阻止默认行为，则执行原生复制
            if (!fakeEvent.defaultPrevented) {
                document.execCommand('copy');
            }
        }, 10);
    }
});