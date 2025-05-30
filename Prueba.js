<script>
  function verificar() {
    // Pregunta 1: checkbox correctas
    const correctas1 = ["Hola", "Buenas tardes"];
    const seleccionadas1 = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(cb => cb.value);
    const todasCorrectas1 = correctas1.every(r => seleccionadas1.includes(r));
    const sinErrores1 = seleccionadas1.every(r => correctas1.includes(r));
    const p1_correcta = todasCorrectas1 && sinErrores1;

    // Pregunta 2: radio
    const respuesta2 = document.querySelector('input[name="q2"]:checked');
    const p2_correcta = respuesta2 && respuesta2.value === "B";

    // Pregunta 3: radio
    const respuesta3 = document.querySelector('input[name="q3"]:checked');
    const p3_correcta = respuesta3 && respuesta3.value === "B";

    // Pregunta 4: radio
    const respuesta4 = document.querySelector('input[name="q4"]:checked');
    const p4_correcta = respuesta4 && respuesta4.value === "B";

    // Conteo total
    let aciertos = 0;
    if (p1_correcta) aciertos++;
    if (p2_correcta) aciertos++;
    if (p3_correcta) aciertos++;
    if (p4_correcta) aciertos++;

    const total = 4;
    const resultado = document.getElementById("resultado");

    if (aciertos === total) {
      resultado.textContent = `✅ ¡Perfecto! Acertaste todas las preguntas (${aciertos}/${total}).`;
      resultado.style.color = "#27ae60";
    } else {
      // Mensajes específicos para preguntas erradas
      let mensajesError = [];

      if (!p1_correcta) mensajesError.push("Pregunta 1: saludos incorrectos");
      if (!p2_correcta) mensajesError.push("Pregunta 2: seña de 'Buenos días' incorrecta");
      if (!p3_correcta) mensajesError.push("Pregunta 3: gesto 'Cuídate' incorrecto");
      if (!p4_correcta) mensajesError.push("Pregunta 4: movimiento circular incorrecto");

      resultado.innerHTML = `❌ Revisa tus respuestas. Acertaste ${aciertos} de ${total}.<br>` +
                            mensajesError.join("<br>");
      resultado.style.color = "#c0392b";
    }
  }
</script>
