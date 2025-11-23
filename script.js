// Toggle mobile menu dengan overlay
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Buat overlay jika belum ada
let navOverlay = document.querySelector('.nav-overlay');
if (!navOverlay) {
    navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
}

// Toggle menu
navToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    
    // Ganti ikon menu
    const icon = navToggle.querySelector('i');
    if (icon) {
        icon.className = isActive ? 'fas fa-times' : 'fas fa-bars';
    }
});

// Tutup menu ketika klik overlay
navOverlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    const icon = navToggle.querySelector('i');
    if (icon) {
        icon.className = 'fas fa-bars';
    }
});

// Tutup menu ketika klik link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
        
        // Tambah class active ke link yang diklik
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Set active state berdasarkan section yang visible
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navOverlay.classList.remove('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-bars';
        }
    }
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('Januari 21, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
            
if (timeLeft < 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
    }
            
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        setInterval(updateCountdown, 1000);
        updateCountdown();


// Inisialisasi Swiper untuk Crew Section
const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    loopedSlides: 4, // Sesuaikan dengan jumlah slide yang ditampilkan
    slidesPerView: 4,
    spaceBetween: 25,

    // Jika perlu pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Tambahkan ini untuk memastikan loop bekerja dengan benar
    on: {
        init: function () {
            console.log('swiper initialized');
        },
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 2,
            loopedSlides: 3
        },
        768: {
            slidesPerView: 3,
            loopedSlides: 4
        },
        1024: {
            slidesPerView: 4,
            loopedSlides: 5
        }
    }
});