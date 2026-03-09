export function mostrarMensaje(msg, tipo = "info") {
  alert(`[${tipo.toUpperCase()}] ${msg}`);
}