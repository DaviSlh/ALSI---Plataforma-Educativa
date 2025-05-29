// Prueba.js completo - SPA dinámico estilo ALSI

const app = document.querySelector('main');

// Cargar progreso desde localStorage const progreso = {}; const completadas = JSON.parse(localStorage.getItem('leccionesCompletadas')) || []; completadas.forEach(num => progreso[num] = true);

function mostrarLecciones() { app.innerHTML = <h2 class="text-2xl font-semibold text-purple-700 mb-4">Elige una lección</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> ${Array.from({ length: 14 }, (_, i) => { const leccion = i + 1; const completada = progreso[leccion] ? "✅" : ""; return <div class="bg-white shadow rounded-xl p-4 hover:bg-purple-100 transition cursor-pointer leccion-btn" data-leccion="${leccion}"> <h3 class="text-lg font-bold text-purple-900">Lección ${leccion} ${completada}</h3> <p class="text-sm text-purple-700">Haz clic para abrir</p> </div> ; }).join("")} </div> ;

document.querySelectorAll(".leccion-btn").forEach(btn => { btn.addEventListener("click", () => { const num = btn.dataset.leccion; cargarLeccion(num); }); }); }

function cargarLeccion(numero) { fetch(lesson${numero}.html) .then(res => res.text()) .then(html => { app.innerHTML = html; }) .catch(err => { app.innerHTML = <p class="text-red-600">Error al cargar la lección ${numero}.</p>; console.error("Error al cargar la lección:", err); }); }

function mostrarProgreso() { app.innerHTML = <h2 class="text-2xl font-semibold text-purple-700 mb-4">Progreso del usuario</h2> <ul class="list-disc pl-5 text-purple-800 space-y-1"> ${Array.from({ length: 14 }, (_, i) => { const leccion = i + 1; const completada = progreso[leccion] ? '✅ Completada' : '❌ Pendiente'; return<li>Lección ${leccion}: ${completada}</li>; }).join("")} </ul> ; }

function mostrarPerfil() { const perfil = JSON.parse(localStorage.getItem('perfilUsuario')) || {};

app.innerHTML = <h2 class="text-2xl font-semibold text-purple-700 mb-4">Perfil del usuario</h2> <form id="perfil-form" class="space-y-4 max-w-md"> <input type="text" id="nombre" placeholder="Nombre" value="${perfil.nombre || ''}" class="w-full p-2 border rounded-xl" /> <input type="email" id="correo" placeholder="Correo electrónico" value="${perfil.correo || ''}" class="w-full p-2 border rounded-xl" /> <input type="text" id="nivel" placeholder="Nivel de español" value="${perfil.nivel || ''}" class="w-full p-2 border rounded-xl" /> <button type="submit" class="bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600">Guardar perfil</button> </form>;

document.getElementById('perfil-form').addEventListener('submit', (e) => { e.preventDefault(); const nuevoPerfil = { nombre: document.getElementById('nombre').value, correo: document.getElementById('correo').value, nivel: document.getElementById('nivel').value }; localStorage.setItem('perfilUsuario', JSON.stringify(nuevoPerfil)); alert('Perfil guardado correctamente.'); }); }

// Enlace de botones desde HTML window.showSection = function(id) { if (id === 'lecciones') mostrarLecciones(); else if (id === 'progreso') mostrarProgreso(); else if (id === 'perfil') mostrarPerfil(); }

// Mostrar sección inicial mostrarLecciones();

