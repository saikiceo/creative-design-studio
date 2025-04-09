document.addEventListener('DOMContentLoaded', () => {

    // --- ヘッダーのスクロール効果 ---
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- モバイルメニューの開閉 ---
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-menu nav a');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
    }

    if (menuClose && mobileMenu) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    }

    // モバイルメニューのリンククリックでメニューを閉じる
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    // --- スムーススクロール (CSSでhtml { scroll-behavior: smooth; } があれば不要な場合も) ---
    // Optional: Add smooth scrolling for all anchor links pointing to hash IDs
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's not just a hash link (e.g., used for tabs or accordions)
            if (this.getAttribute('href') !== '#' && document.querySelector(this.getAttribute('href'))) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- アクティブなナビゲーションリンクのハイライト (オプション) ---
    // Requires more complex logic using Intersection Observer API for accuracy

    // --- スクロール रिवीलアニメーション (オプション - Intersection Observer推奨) ---
    // Basic example (less performant than Intersection Observer)
    /*
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) { // 100px before it enters viewport
                el.classList.add('revealed');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Initial check
    */

});