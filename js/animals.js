const images = [
    "url('../img/bg-2.jpg')",
    "url('../img/bg-3.jpg')",
    "url('../img/bg-4.jpg')",
    "url('../img/bg-5.JPG')",
    "url('../img/bg-1.jpg')",
  ];
  
  const body = document.querySelector(".cover");
  
  let index = 0;
  
  function changeBackground() {
    body.style.backgroundImage = images[index];
  
    index++;
  
    if (index >= images.length) {
      index = 0;
    }
  }
  
  setInterval(changeBackground, 3500);
  
  const fixedNav = document.querySelector(".fixed");
  const normal = document.querySelector(".normal");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      fixedNav.style.display = "flex";
    } else {
      fixedNav.style.display = "none";
    }
  });

//   <!-- Halaman asal -->
// <a href="halaman-tujuan.html" id="link-tujuan">Klik untuk navigasi ke halaman tujuan</a>


  // Fungsi untuk menavigasi ke halaman tujuan dan mengeksekusi klik pada link di halaman tersebut
  function navigateAndClick() {
    window.location.href = "./view.html";
    window.onload = function() {
      document.getElementById("great-white-shark").click();
    }
  }

  // Memanggil fungsi navigateAndClick() saat link di halaman asal diklik
  document.getElementById("great-white-shark").addEventListener("click", navigateAndClick);

