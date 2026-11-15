import { useEffect, useState } from "react";

// Mensaje temporal para <Toast>. Uso: const [toast, setToast] = useToast(); setToast("Listo");
const useToast = (duracion = 3000) => {
  const [mensaje, setMensaje] = useState(null);
  useEffect(() => {
    if (!mensaje) return undefined;
    const t = setTimeout(() => setMensaje(null), duracion);
    return () => clearTimeout(t);
  }, [mensaje, duracion]);
  return [mensaje, setMensaje];
};

export default useToast;
