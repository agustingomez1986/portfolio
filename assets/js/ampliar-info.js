document.querySelectorAll('.toggle-info').forEach(btn => {
    btn.addEventListener('click', () => {
        const graficoBarra = btn.closest('.graficoBarra');
        graficoBarra.classList.toggle('show');
    });
});