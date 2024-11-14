// Gündüz / Gece Modu

const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

let isDarkMode = false;

modeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        // Gece modu: Hilal ay ikonu
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun'); // Güneş ikonu kaldırılıyor
        modeIcon.classList.add('fa-moon');   // Hilal ay ikonu ekleniyor
    } else {
        // Gündüz modu: Güneş ikonu
        body.classList.remove('dark-mode');
        modeIcon.classList.remove('fa-moon'); // Ay ikonu kaldırılıyor
        modeIcon.classList.add('fa-sun');     // Güneş ikonu ekleniyor
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

//Slide Show

let slideIndex = 0; // Başlangıçtaki slayt indexi

// Slaytları gösterme işlevi
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Tüm slaytları gizle
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  // Şu anki slaydı göster
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
}

// Bir sonraki veya önceki slayda geçiş yapma
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Otomatik slayt geçişi
setInterval(showSlides, 10000); // 10 saniyede bir slayt değişir
