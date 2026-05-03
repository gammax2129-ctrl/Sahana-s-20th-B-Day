// 1. Music Logic: Plays on the very first click anywhere on the page
document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.volume = 0.5; // Sets volume to 50% so it's not too loud
        audio.play().catch(error => {
            console.log("Browser still blocking audio:", error);
        });
    }
}, { once: true }); // {once: true} makes sure this listener disappears after the first click

// 2. Page Switching Logic
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        
        // Ensures the page starts from the top
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }
}

// 3. Advanced Emoji Burst Logic
function createBurst() {
    const emojis = ['❤️', '✨', '🌸', '🎂', '🎀', '💖'];
    const count = 100; 

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        particle.style.position = 'fixed';
        particle.style.bottom = '-20px'; 
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.fontSize = Math.random() * 25 + 15 + 'px';
        particle.style.zIndex = '3000';
        particle.style.pointerEvents = 'none';
        
        const duration = Math.random() * 2 + 2; 
        particle.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${duration}s`;
        
        document.body.appendChild(particle);

        const xMove = (Math.random() - 0.5) * 400; 
        const yMove = - (Math.random() * 120 + 80); 

        requestAnimationFrame(() => {
            particle.style.transform = `translate(${xMove}px, ${yMove}vh) rotate(${Math.random() * 720}deg)`;
            particle.style.opacity = '0';
        });

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }
}