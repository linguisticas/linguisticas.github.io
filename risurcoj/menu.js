document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.menu-overlay');
    const panel = document.querySelector('.menu-panel');

    function toggleMenu() {
        overlay.classList.toggle('active');
        panel.classList.toggle('active');
    }

    function closeMenu() {
        overlay.classList.remove('active');
        panel.classList.remove('active');
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);

    // Close menu after clicking any link
    panel.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
            // Let the browser follow the link normally
            // (if you’re using data-md for dynamic loading, you can still intercept here)
        });
    });

    // Optional: close with ESC key
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});