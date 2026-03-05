let intervalId = null;
let tempoDecorrido = 0;
let inicio = 0;

function formatarTempo(ms) {
  const horas = String(Math.floor(ms / 3600000)).padStart(2, "0");
  const minutos = String(Math.floor((ms % 3600000) / 60000)).padStart(2, "0");
  const segundos = String(Math.floor((ms % 60000) / 1000)).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

function atualizarCronometro() {
  const cronometro = document.getElementById("cronometro");
  cronometro.textContent = formatarTempo(tempoDecorrido + (Date.now() - inicio));
}

function iniciarCronometro() {
  if (intervalId !== null) return;

  inicio = Date.now();
  intervalId = setInterval(atualizarCronometro, 200);
}

function pausarCronometro() {
  if (intervalId === null) return;

  tempoDecorrido += Date.now() - inicio;
  clearInterval(intervalId);
  intervalId = null;
  document.getElementById("cronometro").textContent = formatarTempo(tempoDecorrido);
}

function zerarCronometro() {
  pausarCronometro();
  tempoDecorrido = 0;
  document.getElementById("cronometro").textContent = "00:00:00";
}
