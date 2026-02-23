const dialog = document.querySelector("#modalDialog");
const openButton = document.querySelector("#openButton");
const closeButton = document.querySelector("#closeButton");

document.addEventListener("DOMContentLoaded", () => {
    openButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
    });
});

dialog.addEventListener("click", (e) =>{
    if (event.target === dialog) {
    dialog.close();
    }
});