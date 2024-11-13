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
    // Tablar ve içerikleri seçiyoruz
    const tabs = document.querySelectorAll('.tab');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    // Her bir tab'a tıklanabilirlik ekliyoruz
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Aktif olan tüm tab'ları ve içerikleri temizliyoruz
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Aktif olan tab'ı ekliyoruz
            tab.classList.add('active');

            // Tab'ın data-tab özelliğini kullanarak içerik ID'sini alıyoruz
            const contentId = tab.getAttribute('data-tab'); // data-tab'a göre içerik id'sini al
            document.getElementById(contentId).classList.add('active');
        });
    });

    // Sayfa yüklendiğinde varsayılan olarak "Languages" tab'ını göster
    const defaultTab = document.querySelector('.tab[data-tab="languages"]');
    const defaultContent = document.getElementById('languages-content');
    if (defaultTab && defaultContent) {
        defaultTab.classList.add('active');
        defaultContent.classList.add('active');
    }
});
