// Deklarasikan variabel di luar fungsi agar bisa diakses secara global
let menuBtn, closeBtn, mobileMenu, overlay;

document.addEventListener("DOMContentLoaded", function () {
    // --- Mobile Menu Interactivity ---
    menuBtn = document.getElementById('menu-btn');
    closeBtn = document.getElementById('close-btn');
    mobileMenu = document.getElementById('mobile-menu');
    overlay = document.getElementById('overlay');

    // Tambahkan event listener setelah elemen ditemukan
    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
});

function openMenu() {
    if (mobileMenu) mobileMenu.classList.remove('-translate-x-full');
}

function closeMenu() {
    if (mobileMenu) mobileMenu.classList.add('-translate-x-full');
}