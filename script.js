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

    // --- スクロール रिवीलアニメーション (Intersection Observer) ---
    const revealElements = document.querySelectorAll('[data-scroll-reveal]');

    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 要素の10%が見えたら
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // アニメーションが終わったら監視を停止
                entry.target.addEventListener('transitionend', () => {
                    revealObserver.unobserve(entry.target);
                }, { once: true });
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

});