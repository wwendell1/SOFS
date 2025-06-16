
function initNavbar() {
  // Burger menu
  document.querySelectorAll('.navbar-burger').forEach(burger => {
    burger.addEventListener('click', () => {
      const target = burger.dataset.target;
      const menu = document.getElementById(target);
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  });

  // Dropdown no mobile
  document.querySelectorAll('.navbar-item.has-dropdown').forEach(dropdown => {
    const link = dropdown.querySelector('.navbar-link');
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 1023) {
        e.preventDefault();
        dropdown.classList.toggle('is-active');
      }
    });
  });
}
