const images = [
    "url('../img/bg-2.jpg')",
    "url('../img/bg-3.jpg')",
    "url('../img/bg-4.jpg')",
    "url('../img/bg-5.JPG')",
    "url('../img/bg-1.jpg')",
  ];
  
  const quotes = [
    "Found in cool, coastal waters around the world, great whites are the largest predatory fish on Earth. They grow to an average of 15 feet in length, though specimens exceeding 20 feet and weighing up to 5,000 pounds have been recorded.",
    "Red pandas feed mainly on bamboo using their opposable thumb. While their thumb-like appendages can be used in the same way as that of giant pandas, it is believed that the red panda's opposable thumbs may have evolved as an adaptation for grasping branches in trees rather than for stripping bamboo.",
    "The dugong is one of four species of the order Sirenia, a group of marine mammals are strictly herbivorous meaning they eat only plants. They’re a tropical to sub-tropical species found in 37 different countries, however Australian waters are home to one of the largest population of dugong, approximating 80,000 – 85,000.",
    "Sumatran rhinos are the smallest of the living rhinoceroses and the only Asian rhino with two horns. They are covered with long hair and are more closely related to the extinct woolly rhinos than any of the other rhino species alive today.",
    "Blue whales are the largest animals ever known to have lived on Earth. These magnificent marine mammals rule the oceans at up to 100 feet long and upwards of 200 tons. Their tongues alone can weigh as much as an elephant. Their hearts, as much as an automobile"
  ];

const body = document.querySelector(".cover");
const quote = document.querySelector(".fact");

let index = 0;


function changeBackgroundAndQuote() {
    body.style.backgroundImage = images[index];
  
    quote.textContent = quotes[index];
  
    index++;
  
    if (index >= images.length) {
      index = 0;
    }
  }

setInterval(changeBackgroundAndQuote, 3500);

const fixedNav = document.querySelector(".fixed");
const normal = document.querySelector(".normal");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    fixedNav.style.display = "flex";
  } else {
    fixedNav.style.display = "none";
  }
});
