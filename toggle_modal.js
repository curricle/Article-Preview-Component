function toggleModal() {
  let popup = document.getElementById("share-popup");
  let footerContent = document.getElementById("article-footer");
  let defaultShareButton = document.getElementById("default-share-button");
  
  popup.classList.toggle("hidden");
  footerContent.classList.toggle("reset-padding");
  defaultShareButton.classList.toggle("hidden");
}