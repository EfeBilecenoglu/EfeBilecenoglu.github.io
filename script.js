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
    const tabs = document.querySelectorAll('.tab'); // Tabları alıyoruz
    const tabPanes = document.querySelectorAll('.tab-pane'); // İçerikleri alıyoruz
    
    // Tab'lara tıklanabilirlik ekliyoruz
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Tüm tab'ların ve içeriklerin 'active' sınıfını kaldırıyoruz
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Aktif olan tab'ı ve içerik kısmını ekliyoruz
            tab.classList.add('active');
            
            // Tab'ın data-tab özelliğini kullanarak içerik ID'sini alıyoruz
            const contentId = tab.getAttribute('data-tab'); // data-tab ile içerik ID'sini al
            const activeContent = document.getElementById(contentId); // İçerik kısmını al
            activeContent.classList.add('active'); // Aktif içerik olarak ayarla
        });
    });

    // Sayfa yüklendiğinde varsayılan olarak "Languages" tab'ını göster
    const defaultTab = document.querySelector('.tab[data-tab="languages-content"]'); // Varsayılan "Languages" sekmesi
    const defaultContent = document.getElementById('languages-content'); // İçerik kısmı
    if (defaultTab && defaultContent) {
        defaultTab.classList.add('active'); // "Languages" tab'ını aktif yap
        defaultContent.classList.add('active'); // "Languages" içeriğini aktif yap
    }
});
