const fixedNav = document.querySelector(".fixed");
const normal = document.querySelector(".normal");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});

const fikri = document.querySelector("#fikri");
const naomi = document.querySelector("#naomi");
const angelica = document.querySelector("#angelica");
const nama = document.querySelector("#nama");
const nim = document.querySelector("#nim");
const alamat = document.querySelector("#alamat");
const nomer = document.querySelector("#nomer");
const email = document.querySelector("#email");
const banner = document.querySelector("#tag");

fikri.addEventListener("click", () => {
  tag.innerHTML = "&#128203; Fikri &#128521;";
  nama.textContent = ": M. Fikri";
  nim.textContent = ": 221110816";
  alamat.textContent = ": Jl.H.M.Said Gg.Demokrat";
  nomer.innerHTML =
    ': <a href="tel:+6285172010442" style="color: #ffffff">+62 851 7201 0442</a>';
  email.innerHTML =
    ': <a href="mailto:muhammadfikri4402@gmail.com" style="color: #ffffff">muhammadfikri4402@gmail.com</a>';
});

naomi.addEventListener("click", () => {
  banner.innerHTML = "&#128203; Naomi &#128526;";
  nama.textContent = ": Naomi Prisella";
  nim.textContent = ": 221111798";
  alamat.textContent = ": Jl.Bilal Harmonis Blok 1 No.63";
  nomer.innerHTML =
    ': <a href="tel:+6281260166555" style="color: #ffffff">+62 812 6016 6555</a>';
  email.innerHTML =
    ': <a href="mailto:naomiprisella@gmail.com" style="color: #ffffff">naomiprisella@gmail.com</a>';
});

angelica.addEventListener("click", () => {
  banner.innerHTML = "&#128203; Angelica &#128515;";
  nama.textContent = ": Angelica Thomas";
  nim.textContent = ": 221111885";
  alamat.textContent = ": Jl.Jend. Sudirman No.335";
  nomer.innerHTML =
    ': <a href="tel:+6288807868689" style="color: #ffffff">+62 888 0786 8689</a>';
  email.innerHTML =
    ': <a href="mailto:angelica101w@gmail.com" style="color: #ffffff">angelica101w@gmail.com</a>';
});