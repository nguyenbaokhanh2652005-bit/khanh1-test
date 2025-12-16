// Mục tiêu: click quốc gia -> đổi highlight (is-active)
const items = document.querySelectorAll(".countries__item");

items.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault(); // không nhảy trang khi demo layout
        items.forEach(x => x.classList.remove("is-active"));
        a.classList.add("is-active");
    });
});