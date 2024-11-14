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
    window.location.href = 'CV_Ahmet_Efe_Bilecenoglu_GameCareer.pdf'; // CV dosyasının yolu
});
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab'); // Tab'ları seçiyoruz
    const tabPanes = document.querySelectorAll('.tab-pane'); // İçerik panellerini seçiyoruz
    
    // Tab'lara tıklama işlevselliği ekliyoruz
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Tüm tab'lar ve içeriklerden 'active' sınıfını kaldırıyoruz
            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Tıklanan tab'ı ve ilgili içerik panelini aktif yapıyoruz
            tab.classList.add('active');
            const contentId = tab.getAttribute('data-tab'); // Tab'ın 'data-tab' değerini alıyoruz
            const activeContent = document.getElementById(contentId); // İçeriği buluyoruz
            activeContent.classList.add('active'); // Aktif içerik olarak ayarlıyoruz
        });
    });

    // Sayfa yüklendiğinde varsayılan olarak "Languages" sekmesini ve içeriğini aktif yapıyoruz
    const defaultTab = document.querySelector('.tab[data-tab="languages-content"]'); // Varsayılan tab'ı seçiyoruz
    const defaultContent = document.getElementById('languages-content'); // Varsayılan içerik
    if (defaultTab && defaultContent) {
        defaultTab.classList.add('active');
        defaultContent.classList.add('active');
    }
});

