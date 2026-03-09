export const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

export function esSoloLetras(texto) {
  return soloLetras.test(texto);
}

export function esEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}