import { useEffect, useRef } from "react";

const ENFOCABLES = 'button:not([disabled]), [href], input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])';

// Comportamiento de un modal accesible. El modal debe montarse con createPortal en document.body.
// - Deja inerte el resto de la app (#root) mientras está abierto.
// - Lleva el foco al modal, lo mantiene dentro con Tab y lo devuelve al cerrar.
// - Escape cierra.
const useModal = (onCerrar) => {
  const ref = useRef(null);
  const onCerrarRef = useRef(onCerrar);
  onCerrarRef.current = onCerrar;

  useEffect(() => {
    const anterior = document.activeElement;
    const app = document.getElementById("root");
    if (app) app.inert = true;
    ref.current?.querySelector(ENFOCABLES)?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") return onCerrarRef.current();
      if (e.key !== "Tab" || !ref.current) return undefined;
      const items = [...ref.current.querySelectorAll(ENFOCABLES)];
      if (items.length === 0) return undefined;
      const primero = items[0];
      const ultimo = items[items.length - 1];
      if (e.shiftKey && document.activeElement === primero) { e.preventDefault(); ultimo.focus(); }
      else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primero.focus(); }
      return undefined;
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      if (app) app.inert = false;
      anterior?.focus?.();
    };
  }, []);

  return ref;
};

export default useModal;
