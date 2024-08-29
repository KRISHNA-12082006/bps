let dropBox = document.querySelector("#drop-box");
let inputFile = document.querySelector("#input-file");
let viewImg = document.querySelector(".view-img");

inputFile.addEventListener("change", uploadImg)

function uploadImg() {
    let imgSrc = URL.createObjectURL(inputFile.files[0]);
    viewImg.style.backgroundImage = `url(${imgSrc})`;
    viewImg.style.border = 0;
    viewImg.textContent = "";

}

dropBox.addEventListener("dragover", function (event) {
    event.preventDefault();
})
dropBox.addEventListener("drop", function (event) {
    event.preventDefault();
    console.log(event)
    inputFile.files = event.dataTransfer.files;
    uploadImg();
})



