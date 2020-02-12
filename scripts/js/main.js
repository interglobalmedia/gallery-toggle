const images = [
  {
    src: "images/david-clode-RAfIk-ZKbPk-unsplash.jpg"
  },
  {
    src: "images/itengyart-Pm2wSt4WwgI-unsplash.jpg"
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
