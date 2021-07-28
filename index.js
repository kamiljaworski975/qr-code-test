const btn = document.querySelector("#download-img");

// const downloadOnMobile = () => {
//   const filesArray = [];
//   filesArray[0] = new Image();
//   filesArray[0].src = "./image.jpg";
//   if (navigator.canShare && navigator.canShare({ files: filesArray })) {
//     navigator
//       .share({
//         files: filesArray,
//         title: "Pictures",
//         text: "Our Pictures.",
//       })
//       .then(() => window.alert("Share was successful."))
//       .catch((error) => window.alert("Sharing failed", error));
//   } else {
//     window.alert(`Your system doesn't support sharing files.`);
//   }
// };

const test2 = async () => {
  await fetch("https://dummyimage.com/skyscraper/f0f/f")
    .then(function (response) {
      console.log("first step");
      return response.blob();
    })
    .then(function (blob) {
      var file = new File([blob], "picture.jpg", { type: "image/jpeg" });
      var filesArray = [file];
      console.log("second share");
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator
          .share({
            text: "some_text",
            files: filesArray,
            title: "some_title",
            url: "some_url",
          })
          .then(() => console.log("Share was successful."))
          .catch((error) => console.log("Sharing failed", error));
      } else {
        console.log("your browser not support");
      }
    });
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  test2();
});
