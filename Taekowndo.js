// Activar/desactivar modo oscuro
document.getElementById('darkModeToggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode', this.checked);
});

// Secciones colapsables
document.querySelectorAll('.toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const header = btn.parentElement;
      const title = header.querySelector('.poomsae-title');
      const content = header.nextElementSibling;
  
      // Toggle visualización
      const isHidden = content.style.display === 'none' || content.style.display === '';
      content.style.display = isHidden ? 'block' : 'none';
      title.style.display = isHidden ? 'none' : 'inline';
    });
  });

// Botón para volver arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onscroll = function () {
    const btn = document.getElementById('scrollBtn');
    if (btn) {
        btn.style.display = (document.documentElement.scrollTop > 100) ? 'block' : 'none';
    }
};

// Menú hamburguesa para móviles
document.getElementById('hamburgerBtn').addEventListener('click', function () {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('active');
  });