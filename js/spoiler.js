document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.spoiler').forEach(function (el) {
        if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0')
        if (!el.hasAttribute('role')) el.setAttribute('role', 'button')
        if (!el.hasAttribute('aria-expanded')) el.setAttribute('aria-expanded', 'false')
        if (!el.hasAttribute('aria-label')) {
            el.setAttribute('aria-label', 'Spoiler, tap or press Enter to reveal')
        }
    })

    document.addEventListener('click', function (e) {
        var spoiler = e.target.closest('.spoiler')
        if (!spoiler) return

        spoiler.classList.toggle('is-revealed')
        spoiler.setAttribute(
            'aria-expanded',
            spoiler.classList.contains('is-revealed') ? 'true' : 'false'
        )
    })

    document.addEventListener('keydown', function (e) {
        var spoiler = e.target.closest('.spoiler')
        if (!spoiler) return

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            spoiler.classList.toggle('is-revealed')
            spoiler.setAttribute(
                'aria-expanded',
                spoiler.classList.contains('is-revealed') ? 'true' : 'false'
            )
        }

        if (e.key === 'Escape') {
            spoiler.classList.remove('is-revealed')
            spoiler.setAttribute('aria-expanded', 'false')
        }
    })
})