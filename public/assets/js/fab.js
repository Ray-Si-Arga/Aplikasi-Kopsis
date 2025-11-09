
const fabBtn = document.getElementById('fab-btn');
const fabIcon = document.getElementById('fab-icon');
const fabMenu = document.getElementById('fab-menu');
let isOpen = false;

fabBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        // buka menu
        fabMenu.classList.remove('opacity-0', 'translate-y-3', 'scale-95', 'pointer-events-none');
        fabMenu.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
        fabIcon.classList.add('rotate-45');
        fabBtn.classList.add('bg-red-500', 'hover:bg-red-600');
        fabBtn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
    } else {
        // tutup menu
        fabMenu.classList.add('opacity-0', 'translate-y-3', 'scale-95', 'pointer-events-none');
        fabMenu.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
        fabIcon.classList.remove('rotate-45');
        fabBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
        fabBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    }
});

// Klik di luar area FAB → tutup
document.addEventListener('click', (e) => {
    if (!fabBtn.contains(e.target) && !fabMenu.contains(e.target)) {
        fabMenu.classList.add('opacity-0', 'translate-y-3', 'scale-95', 'pointer-events-none');
        fabMenu.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'pointer-events-auto');
        fabIcon.classList.remove('rotate-45');
        fabBtn.classList.remove('bg-red-500', 'hover:bg-red-600');
        fabBtn.classList.add('bg-blue-600', 'hover:bg-blue-700');
        isOpen = false;
    }
});