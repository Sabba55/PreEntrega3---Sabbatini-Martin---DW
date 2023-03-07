const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

// al hacer click en abrir, la navbar se muestra
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

// al hacer click en cerrar, la navbar se cierra
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})