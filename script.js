let modal_button = document.querySelector("#modal-btn");

modal_button.addEventListener("click", function(e) {
    let modal_id = e.target.getAttribute("for")

    let modal_target = document.querySelector(`#${modal_id}`)

    modal_target.classList.toggle("show")

    document.querySelector("body").classList.add("modal-on-active")
});

let modal_close_button = document.querySelector(".modal-close-btn");

modal_close_button.addEventListener("click", function(e){
    e.target.offsetParent.classList.remove("show")
    document.querySelector("body").classList.remove("modal-on-active")
});