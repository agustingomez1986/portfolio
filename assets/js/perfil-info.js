document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.toggle-info');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const divTecnologia = btn.closest('.graficoBarra');
      const tecnologia = divTecnologia.querySelector('span')?.textContent.trim();
      const targetId = `info${tecnologia}`;
      const nucleo = document.getElementById(targetId);

      if (!nucleo) return;

      const visible = nucleo.style.display === 'flex';
      const sectionInfo = document.querySelector('.info');

      // Ocultar todos los nucleos y resetear botones y fondo
      document.querySelectorAll('.nucleos-container').forEach(n => n.style.display = 'none');
      document.querySelectorAll('.graficoBarra').forEach(b => {
        b.classList.remove('fondo-activo');
        const boton = b.querySelector('button');
        if (boton) boton.textContent = '+';
      });

      if (!visible) {
        // Mostrar el actual
        nucleo.style.display = 'flex';
        divTecnologia.classList.add('fondo-activo');
        btn.textContent = '-';
        sectionInfo.style.display = 'block';
      } else {
        // Ocultar todo si se vuelve a hacer click
        sectionInfo.style.display = 'none';
      }
    });
  });
});
