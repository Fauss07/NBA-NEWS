
export const guardarEnLocal = (clave, datos) => {
  localStorage.setItem(clave, JSON.stringify(datos));
};

export const obtenerDeLocal = (clave) => {
  const datos = localStorage.getItem(clave);
  return datos ? JSON.parse(datos) : null;
};

export const eliminarDeLocal = (clave) => {
  localStorage.removeItem(clave);
};
