function save2() {
  window.open(canvas.toDataURL("image.jpg"));
  var gh = canvas.toDataURL("jpg");

  var a = document.createElement("a");
  a.href = gh;
  a.download = "image.png";

  a.click();
}

console.log("start");
