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
let slides = document.getElementsByClassName("mySlides");
let slideIndex = 0; // Başlangıçtaki slayt indexi
let slideInterval; // Otomatik slayt geçişi için interval değişkeni


function showSlides() {
    if(slideIndex < 0)
  {
      slideIndex = 2;
  }
    if(slideIndex > 2)
  {
      slideIndex = 0;
  }
  // Tüm slaytları gizle
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }  
  slides[slideIndex].style.display = "block";
  slideIndex += 1;
  
}
// Bir sonraki veya önceki slayda geçiş yapma
function plusSlides(n) {
    resetAutoSlide(); // Zamanlayıcıyı sıfırla
    slideIndex += n;
    startAutoSlide();
    
}
//Bir sonraki veya önceki slayda geçiş yapma
function startAutoSlide() {
    slideInterval = setInterval(showSlides, 10000); // 10 saniye aralıkla otomatik geçiş
    showSlides();
    
    
    
}
function resetAutoSlide() {
    clearInterval(slideInterval); // Mevcut zamanlayıcıyı temizle
    slideIndex -= 1;
}
window.onload= function()
    {
        
        
        startAutoSlide();
    }
