const btn_open = document.querySelector(".btn");
const box_modal = document.querySelector(".box_body_background");
const btn_close = document.querySelector(".close_circle");
const btn_confirm = document.querySelector(".confirm");
const box_text = document.querySelector(".text");
const icon = document.querySelector(".icon");
const icon_text = document.querySelector(".icon_text");
const loading = document.querySelector(".lds_roller");
const loading_text = document.querySelector(".loading_text");

btn_open.addEventListener("click", () => {
  box_modal.classList.toggle("open_box");
});

btn_close.addEventListener("click", () => {
  box_modal.classList.remove("open_box");
});

btn_confirm.addEventListener('click', () => {
        box_text.classList.add("text_clean");
        btn_confirm.classList.add("btn_height");
        icon.classList.add("confirm_btn");
        loading.classList.add("open_box");
        loading_text.innerHTML = "Carregando";

    window.setTimeout(() => {
        loading.classList.remove("open_box");
        loading_text.classList.add("text_clean");
        icon.innerHTML = "👍🏻";
        icon_text.innerHTML = "Tudo Pronto!!";
        icon_text.classList.add("text_icon");

    }, 2500);
  }, {once : true});

