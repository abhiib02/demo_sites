const dialog = document.querySelector("#modal_getintouch");
const showButtons = document.querySelectorAll(".modalbtn_getintouch");
const closeButton = document.querySelector(".closemodal_getintouch");

// "Show the dialog" button opens the dialog modally
showButtons.forEach(showButton => {
    showButton.addEventListener("click", () => {
        dialog.showModal();
    });
})


// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
    dialog.close();
});