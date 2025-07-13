document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.skill-button');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      const skillItem = btn.closest('.skill-item');
      const skillName = skillItem.querySelector('h4')?.textContent.trim().replace(/\s/g, '_');
      const skillInfo = document.querySelector(`.skills-info > div[id="${skillName}"]`);
      const todosSkillText = document.querySelectorAll('.skills-info > div');

      if (!skillInfo) return;

      const yaVisible = skillInfo.style.display === 'flex';

      // Ocultar todos los bloques de texto
      document.querySelectorAll('.skills-info .skill-text').forEach(s => s.style.display = 'none');

      // Resetear todos los botones y estilos
      document.querySelectorAll('.skill-item').forEach(item => {
        const b = item.querySelector('button');
        if (b) b.textContent = '+';
        item.classList.remove('skill-activo', 'borde-inferior');
      });

      if (!yaVisible) {
        skillInfo.style.display = 'flex';
        btn.textContent = '-';
        document.querySelector('.skills-info').style.display = 'block';
        skillItem.classList.add('skill-activo', 'borde-inferior');
      } else {
        document.querySelector('.skills-info').style.display = 'none';
      }
    });
  });
});
