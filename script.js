// Gündüz / Gece Modu

const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

let isDarkMode = false;

modeToggle.addEventListener('click', () => 
    { isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
        modeToggle.innerHTML = '<i class="fas fa-moon"></i> Gece Modu';
    } else {
        body.classList.remove('dark-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
        modeToggle.innerHTML = '<i class="fas fa-sun"></i> Gündüz Modu';
    }
});
const cvButton = document.getElementById('cv-btn');
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

