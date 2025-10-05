let img = document.querySelector("img");

const btn_prev = document.querySelector("#previous");
const btn_next = document.querySelector("#next");
let position_imagem = 0;

const list_images = [
  "https://images.pexels.com/photos/33435611/pexels-photo-33435611.jpeg",
  "https://images.pexels.com/photos/34104581/pexels-photo-34104581.jpeg",
  "https://images.pexels.com/photos/31110329/pexels-photo-31110329.jpeg",
  "https://images.pexels.com/photos/17976735/pexels-photo-17976735.jpeg",
];

btn_next.addEventListener("click", function () {
  if (position_imagem < list_images.length) {
    img.src = list_images[position_imagem];
    position_imagem++;
  }
});

btn_prev.addEventListener("click", function () {
  if (position_imagem !== 0) {
    position_imagem--;
    img.src = list_images[position_imagem];
  } 
});
