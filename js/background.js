const backgroundImages = [
  "gradient-grid-backgroundimg.jpg",
  "grid-backgroundimg.jpg",
];

const randomImages =
  backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${randomImages}`;
bgImage.classList.add("background-img");
document.body.appendChild(bgImage);
