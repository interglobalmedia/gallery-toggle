const images = [
  {
    src: "assets/images/david-clode-RAfIk-ZKbPk-unsplash.jpg"
  },
  {
    src: "assets/images/itengyart-Pm2wSt4WwgI-unsplash.jpg"
  },
  {
    src: "assets/images/lesly-juarez-4JDPLjR1Ew4-unsplash.jpg"
  },
  {
    src: "assets/images/neil-cooper-uwI8R_FyLrI-unsplash.jpg"
  },
  {
    src: "assets/images/sophia-muller-loP8xxkZIk8-unsplash.jpg"
  }
];

function getImages() {
  for (const image in images) {
    const imageWrapper = document.getElementById("images");
    const imageTag = document.createElement("img");
    imageTag.setAttribute("src", `${images[image].src}`);
    imageTag.height = "150";
    imageTag.width = "200";
    imageWrapper.appendChild(imageTag);
    console.log(imageTag);
  }
}

function refreshPage() {
  window.location.reload();
}

function removeImages() {
  const imageDiv = document.getElementById("images");
  imageDiv.remove();
  refreshPage();
}

const button1 = document.getElementById("btnAdd");

const button2 = document.getElementById("btnRemove");

button1.addEventListener("click", getImages);

button2.addEventListener("click", removeImages);
