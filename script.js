// Form uyarısı
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mesajınız gönderildi! Teşekkürler.');
});

// Scroll animasyonu için cardlar
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {threshold: 0.3});

cards.forEach(card => observer.observe(card));
