// Gündüz / Gece Modu
const modeToggleButton = document.getElementById('mode-toggle');
const cvButton = document.getElementById('cv-btn');

// Gece modunu değiştiren fonksiyon
modeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeToggleButton.textContent = 'Gündüz Modu';
    } else {
        modeToggleButton.textContent = 'Gece Modu';
    }
});

// CV indirme butonu
cvButton.addEventListener('click', () => {
    window.location.href = 'cv/Adınız_CV.pdf'; // CV dosyasının yolu
});
