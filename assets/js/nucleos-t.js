document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.toggle-info');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const divTecnologia = btn.closest('.graficoBarra');
      divTecnologia.classList.toggle('fondo-activo');
      const tecnologia = divTecnologia.querySelector('span')?.textContent.trim();
      const targetId = `info${tecnologia}`;
      const nucleo = document.getElementById(targetId);
      
      // Symbolo en botón
      const boton = divTecnologia.querySelector('button');
      if (boton.textContent === '+') {
        boton.textContent = '-';
      } else {
        boton.textContent = '+';
      }

      document.querySelectorAll('.nucleos-container').forEach(container => {
        container.classList.toggle('fondo-container-activo');
      });
      


      if (!nucleo) return;

      // Oculto todos los bloques primero
      document.querySelectorAll('.nucleos-container').forEach(n => {
        if (n.id !== targetId) n.style.display = 'none';
      });

      // Alternar el que corresponde
      const visible = nucleo.style.display === 'flex';
      nucleo.style.display = visible ? 'none' : 'flex';

      const sectionInfo = document.querySelector('.info');
      const hayVisible = [...document.querySelectorAll('.nucleos-container')].some(n => n.style.display === 'flex');
      sectionInfo.style.display = hayVisible ? 'block' : 'none';
    });
  });
});