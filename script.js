// script.js

// 1. Inisialisasi Elemen
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// 2. Logika Toggle Mobile Menu
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        // Toggle class 'hidden' untuk menampilkan/menyembunyikan menu
        mobileMenu.classList.toggle('hidden');
        
        // Menambahkan class animasi jika menu sekarang terlihat
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('mobile-menu-active');
        } else {
            // Hapus class animasi jika menu disembunyikan lagi
            mobileMenu.classList.remove('mobile-menu-active');
        }
    });
}

// 3. Animasi Scroll (Fade In)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
});

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));