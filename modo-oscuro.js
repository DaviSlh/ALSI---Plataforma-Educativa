function aplicarModoOscuro() {
  const body = document.body;
  const darkModeActivo = localStorage.getItem('modoOscuro') === 'true';
  if (darkModeActivo) {
    body.classList.add('modo-oscuro');
  } else {
    body.classList.remove('modo-oscuro');
  }
}

function alternarModoOscuro() {
  const body = document.body;
  const activo = body.classList.toggle('modo-oscuro');
  localStorage.setItem('modoOscuro', activo);
}

document.addEventListener('DOMContentLoaded', aplicarModoOscuro);