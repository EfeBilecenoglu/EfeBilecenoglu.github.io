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
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Aktif olan tüm tab'ları ve içerikleri temizle
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Aktif olan tab'ı ve içeriği ekle
            tab.classList.add('active');
            const contentId = tab.id.split('-')[0] + '-content';  // tab id'sinden içerik id'sini çıkar
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Sayfa yüklendiğinde varsayılan olarak "Languages" tab'ını göster
    document.getElementById('languages-tab').classList.add('active');
    document.getElementById('languages-content').classList.add('active');
});
