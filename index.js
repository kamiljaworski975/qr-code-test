const btn = document.querySelector("#download-img");

const downloadOnMobile = () => {
  const filesArray = [];
  filesArray[0] = new Image();
  filesArray[0].src = "./image.jpg";
  if (navigator.canShare && navigator.canShare({ files: filesArray })) {
    navigator
      .share({
        files: filesArray,
        title: "Pictures",
        text: "Our Pictures.",
      })
      .then(() => console.log("Share was successful."))
      .catch((error) => console.log("Sharing failed", error));
  } else {
    console.log(`Your system doesn't support sharing files.`);
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  downloadOnMobile();
});
