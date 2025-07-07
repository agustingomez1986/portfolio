function conectarLineas() {
  const svg = document.getElementById('conectores');
  svg.innerHTML = ''; // Limpiar líneas anteriores

  const visibles = document.querySelectorAll('.nucleos-container');
  visibles.forEach(container => {
    const h5s = container.querySelectorAll('h5');

    h5s.forEach(h5 => {
      const origen = h5.getBoundingClientRect();
      const id = h5.dataset.id;

      const ramas = container.querySelectorAll(`li[data-target="${id}"]`);

      ramas.forEach(li => {
        const destino = li.getBoundingClientRect();
        const svgTop = svg.getBoundingClientRect().top;

        const x1 = origen.left + origen.width - origen.width*0.7;
        const y1 = origen.top + origen.height / 2 - svgTop;
        const x2 = destino.left - origen.width*0.2;
        const y2 = destino.top + destino.height / 2 - svgTop;

        const linea = document.createElementNS("http://www.w3.org/2000/svg", "line");
        linea.setAttribute("x1", x1);
        linea.setAttribute("y1", y1);
        linea.setAttribute("x2", x2);
        linea.setAttribute("y2", y2);
        linea.setAttribute("stroke", "#ff7f00");
        linea.setAttribute("stroke-width", "3");

        svg.appendChild(linea);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.toggle-info');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const tecnologia = btn.closest('.graficoBarra').querySelector('span')?.textContent.trim();
      const targetId = `info${tecnologia}`;
      const nucleo = document.getElementById(targetId);

      if (!nucleo) return;

      // Oculto todos los bloques primero
      document.querySelectorAll('.nucleos-container').forEach(n => {
        if (n.id !== targetId) n.style.display = 'none';
      });

      // Alternar el que corresponde
      const visible = nucleo.style.display === 'flex';
      nucleo.style.display = visible ? 'none' : 'flex';

      const sectionInfo = document.querySelector('section.info');
      const hayVisible = [...document.querySelectorAll('.nucleos-container')].some(n => n.style.display === 'flex');
      sectionInfo.style.display = hayVisible ? 'block' : 'none';

      setTimeout(() => conectarLineas(), 10);
    });
  });
  
  window.addEventListener('resize', conectarLineas);
  window.addEventListener('scroll', conectarLineas);
});