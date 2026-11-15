// Guarda datos en el navegador para que no se pierdan al recargar.
// Si el navegador bloquea el almacenamiento (modo privado), la app sigue funcionando sin guardar.
export const leer = (clave, porDefecto) => {
  try {
    const valor = window.localStorage.getItem(clave)
    return valor ? JSON.parse(valor) : porDefecto
  } catch {
    return porDefecto
  }
}

export const guardar = (clave, valor) => {
  try {
    window.localStorage.setItem(clave, JSON.stringify(valor))
  } catch {
    // Sin almacenamiento disponible: los cambios duran hasta recargar.
  }
}
