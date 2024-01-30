const div = document.getElementById("app");

//async function for fetch images
async function getImages() {
  let data = await fetch(`${import.meta.env.VITE_ServerURL}/images`);
  const json = await data.json();
  return json;
}

async function makeImages() {
  let images = await getImages();
  images.forEach((image) => {
    let imgTag = document.createElement("img");
    imgTag.src = image.image;
    div.appendChild(imgTag);
  });
}
getImages();
makeImages();
