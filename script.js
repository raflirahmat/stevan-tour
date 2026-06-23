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

const destinations = [
    { title: "PINK BEACH", desc: "Pink beach is located near by komodo island. This place has a very nice pink beach, crystal water, and also beautiful underwater marine life." },
    { title: "KOMODO ISLAND", desc: "Komodo island is the biggest island in the komodo national park. Here we will see the komodo dragons and other animals like timor deer, buffalo, etc." },
    { title: "TAKA MAKASAR", desc: "A very small island that only consists of white sand. Crystal clear water, perfect for snorkeling with baby sharks and turtles." },
    { title: "MANTA POINT", desc: "Located near by Taka Makasar, this place is highly recommended for snorkelers who love to swim with manta rays." },
    { title: "SEBAYUR ISLAND", desc: "Known for its vibrant coral reefs and diverse marine life, making it an excellent destination for snorkeling and diving." }
];

const container = document.getElementById('card-container');

destinations.forEach(item => {
    container.innerHTML += `
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
            <div class="w-24 h-24 bg-gray-300 rounded-xl flex-shrink-0">
                <!-- Gambar bisa ditaruh di sini -->
            </div>
            <div>
                <h3 class="text-blue-900 font-bold text-lg">${item.title}</h3>
                <p class="text-gray-500 text-sm mt-1 line-clamp-3">${item.desc}</p>
            </div>
        </div>
    `;
});