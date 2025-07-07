document.addEventListener("DOMContentLoaded", () => {
    const nacimiento = new Date(1986, 5, 12);
    const hoy = new Date();

    const msPorAño = 1000 * 60 * 60 * 24 * 365.25;
    const edad = Math.floor((hoy - nacimiento) / msPorAño);

    const edadSpan = document.getElementById("edad");
    if (edadSpan) {
        edadSpan.textContent = edad;
    }
});
