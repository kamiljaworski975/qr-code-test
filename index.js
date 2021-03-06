const btn = document.querySelector("#download-img");
const imageDow = document.querySelector(".image__download");

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

// const test2 = async () => {
//   var file = new File([blob], "picture.jpg", { type: "image/jpeg" });
//   var filesArray = [file];
//   console.log("second share");
//   if (navigator.canShare) {
//     navigator
//       .share({
//         text: "some_text",
//         files: filesArray,
//         title: "some_title",
//         url: "some_url",
//       })
//       .then(() => console.log("Share was successful."))
//       .catch((error) => console.log("Sharing failed", error));
//   } else {
//     console.log("your browser not support");
//   }
// };

// const image = new Image();
// image.src = "image.jpg";

// console.log(image);
// const blob2 = image.blob();

// const share = async (title, text, blob) => {
//   const data = {
//     files: [
//       new File([blob], "image.png", {
//         type: blob.type,
//       }),
//     ],
//     title: title,
//     text: text,
//   };
//   try {
//     if (!navigator.canShare(data)) {
//       throw new Error("Can't share data.", data);
//     }
//     await navigator.share(data);
//   } catch (err) {
//     console.error(err.name, err.message);
//   }
// };

// const test4 = async () => {
//   fetch("https://dummyimage.com/skyscraper/f0f/f")
//     .then(function (response) {
//       return response.blob();
//     })
//     .then(function (blob) {
//       var file = new File([blob], "picture.jpg", { type: "image/jpeg" });
//       var filesArray = [file];
//       console.log(blob, filesArray);
//       if (navigator.canShare && navigator.canShare({ files: filesArray })) {
//         navigator
//           .share({
//             text: "some_text",
//             files: filesArray,
//             title: "some_title",
//             url: "some_url",
//           })
//           .then(() => console.log("Share was successful."))
//           .catch((error) => console.log("Sharing failed", error));
//       } else {
//         console.log("your browser is not supported");
//         window.alert("errorrrrr");
//       }
//     });
// };

const test5 = async () => {
  const response = await fetch("image.jpg");
  const blob = await response.blob();
  const filesArray = [
    new File([blob], "meme.jpg", {
      type: "image/jpeg",
      lastModified: new Date().getTime(),
    }),
  ];
  const shareData = {
    files: filesArray,
  };
  navigator.share(shareData);
};

btn.addEventListener("click", async (e) => {
  test5();
});
