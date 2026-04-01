document.querySelectorAll('.spoiler').forEach(function (el) {
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', 'false');
});

function openSpoiler(spoiler) {
    if (!spoiler) return;
    spoiler.classList.add('is-revealed');
    spoiler.setAttribute('aria-expanded', 'true');
}

function closeSpoiler(spoiler) {
    if (!spoiler) return;
    spoiler.classList.remove('is-revealed');
    spoiler.setAttribute('aria-expanded', 'false');
}

function closeAllSpoilers() {
    document.querySelectorAll('.spoiler.is-revealed').forEach(function (el) {
        closeSpoiler(el);
    });
}

document.addEventListener('click', function (e) {
    var spoiler = e.target.closest('.spoiler');

    // 点到 spoiler 外面，全部收起
    if (!spoiler) {
        closeAllSpoilers();
        return;
    }

    // 点到 spoiler 本身时，只切换当前这个
    if (spoiler.classList.contains('is-revealed')) {
        closeSpoiler(spoiler);
    } else {
        openSpoiler(spoiler);
    }
});

document.addEventListener('keydown', function (e) {
    var spoiler = e.target.closest('.spoiler');
    if (!spoiler) return;

    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        if (spoiler.classList.contains('is-revealed')) {
            closeSpoiler(spoiler);
        } else {
            openSpoiler(spoiler);
        }
    }

    if (e.key === 'Escape') {
        closeSpoiler(spoiler);
    }
});