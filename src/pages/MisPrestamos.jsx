import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppSidebar from "../components/layout/AppSidebar";
import AppTopBar from "../components/layout/AppTopBar";
import LoanCard from "../components/my-loans/LoanCard";
import LoanDetailsTable from "../components/my-loans/LoanDetailsTable";
import RenewLoanModal from "../components/my-loans/RenewLoanModal";
import RequestsList from "../components/my-loans/RequestsList";
import HistoryModal from "../components/my-loans/HistoryModal";
import { descargarComprobante } from "../data/comprobante";
import { AlertIcon, BookIcon, CheckIcon, FileIcon, HistoryIcon, InfoIcon, RefreshIcon } from "../components/my-loans/LoanIcons";
import {
  HOY, MAX_PRESTAMOS, MAX_RENOVACIONES, DIAS_POR_RENOVACION, MULTA_DIARIA,
  prestamosIniciales, solicitudesIniciales, historialPrestamos, estadoPrestamo, necesitaDevolucion, diasEntre,
} from "../data/misPrestamos";
import "./MisPrestamos.scss";

const MisPrestamos = () => {
  const navigate = useNavigate();
  const [prestamos, setPrestamos] = useState(prestamosIniciales);
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);
  const [pestana, setPestana] = useState("activos");
  const [prestamoARenovar, setPrestamoARenovar] = useState(null);
  const [toast, setToast] = useState(null);
  const [verHistorial, setVerHistorial] = useState(false);

  useEffect(() => {
    if (!toast) return undefined;
    const t = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(t);
  }, [toast]);

  const handleNavigate = useCallback((destino) => {
    if (destino === "inicio") return navigate("/");
    if (destino === "mis-prestamos") return navigate("/mis-prestamos");
    window.console.info(`Navigation requested: ${destino}`);
  }, [navigate]);

  const atrasados = prestamos.filter((p) => estadoPrestamo(p) === "atrasado");
  const porDevolver = useMemo(
    () => prestamos.filter(necesitaDevolucion).sort((a, b) => diasEntre(b.fechaDevolucion, a.fechaDevolucion)),
    [prestamos],
  );
  const pendientes = solicitudes.filter((s) => s.estado === "pendiente").length;

  const confirmarRenovacion = (prestamo, nuevaFecha) => {
    setPrestamos((lista) => lista.map((p) => (
      p.id === prestamo.id ? { ...p, fechaDevolucion: nuevaFecha, renovaciones: p.renovaciones + 1 } : p
    )));
    setSolicitudes((lista) => [{
      id: `sol-${Date.now()}`,
      tipo: "Renovación",
      titulo: prestamo.titulo,
      fecha: HOY,
      estado: "aprobada",
      detalle: `Nueva fecha de devolución: ${nuevaFecha}`,
    }, ...lista]);
    setPrestamoARenovar(null);
    setToast(`Préstamo renovado hasta el ${nuevaFecha}`);
  };

  const cancelarSolicitud = (solicitud) => {
    setSolicitudes((lista) => lista.filter((s) => s.id !== solicitud.id));
    setToast("Solicitud cancelada");
  };

  const verDetalle = (prestamo) => {
    if (prestamo.rutaDetalle) return navigate(prestamo.rutaDetalle);
    setToast(`La ficha de "${prestamo.titulo}" aún no está disponible`);
  };

  const pestanas = [
    { id: "activos", label: `Préstamos Activos (${prestamos.length})` },
    { id: "devolver", label: `Por Devolver (${porDevolver.length})` },
    { id: "solicitudes", label: `Solicitudes${pendientes ? ` (${pendientes})` : ""}` },
  ];

  return (
    <div className="mis-prestamos">
      <AppSidebar activeItem="mis-prestamos" onNavigate={handleNavigate} />
      <div className="mis-prestamos-main">
        <AppTopBar breadcrumbs={["Inicio", "Mis Préstamos"]} userName="Estudiante" avatarSrc="/Container.svg" notificationCount={atrasados.length} />

        <main className="mis-prestamos-content">
          <header className="mp-header">
            <div>
              <h1><span className="mp-header__icon"><BookIcon size={20} /></span>Mis Préstamos</h1>
              <p>Administra tus libros actualmente prestados, revisa las fechas de vencimiento y solicita extensiones de plazo según la disponibilidad.</p>
            </div>
            <div className="mp-header__actions">
              <button className="mp-btn" onClick={() => setVerHistorial(true)}><HistoryIcon size={14} /> Ver Historial</button>
              <button className="mp-btn" onClick={() => { if (!descargarComprobante(prestamos)) setToast("Permite las ventanas emergentes para descargar el comprobante"); }}><FileIcon size={14} /> Descargar Comprobantes</button>
            </div>
          </header>

          {atrasados.length > 0 && (
            <div className="mp-alert" role="alert">
              <AlertIcon size={16} />
              <div>
                <b>Acción Requerida: Préstamos Atrasados</b>
                <p>
                  Tienes {atrasados.length} {atrasados.length === 1 ? "material" : "materiales"} con fecha de devolución vencida.
                  Por favor, acércate a la biblioteca o realiza la devolución en los buzones automatizados para evitar cargos adicionales.
                </p>
              </div>
            </div>
          )}

          <div className="mp-toolbar">
            <div className="mp-tabs" role="tablist">
              {pestanas.map((t) => (
                <button key={t.id} role="tab" aria-selected={pestana === t.id} className={pestana === t.id ? "mp-tabs__tab mp-tabs__tab--active" : "mp-tabs__tab"} onClick={() => setPestana(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
            <span className="mp-toolbar__limit"><InfoIcon size={14} /> Máximo de préstamos simultáneos: {MAX_PRESTAMOS}</span>
          </div>

          {pestana === "activos" && (
            <div className="mp-grid">
              {prestamos.map((p) => <LoanCard key={p.id} prestamo={p} onRenovar={setPrestamoARenovar} />)}
            </div>
          )}

          {pestana === "devolver" && (
            porDevolver.length ? (
              <div className="mp-grid">
                {porDevolver.map((p) => <LoanCard key={p.id} prestamo={p} variante="devolver" />)}
              </div>
            ) : (
              <p className="mp-empty">No tienes devoluciones pendientes. ¡Todo al día!</p>
            )
          )}

          {pestana === "solicitudes" && <RequestsList solicitudes={solicitudes} onCancelar={cancelarSolicitud} />}

          <LoanDetailsTable prestamos={prestamos} onVerDetalle={verDetalle} />

          <section className="mp-info">
            <div>
              <h3><RefreshIcon size={14} /> Política de Renovación</h3>
              <p>Puedes renovar tus libros hasta {MAX_RENOVACIONES} veces consecutivas si no hay solicitudes de reserva por otros usuarios. Cada renovación extiende el plazo por {DIAS_POR_RENOVACION} días.</p>
            </div>
            <div>
              <h3><InfoIcon size={14} /> Multas y Sanciones</h3>
              <p>El retraso en la devolución genera una multa diaria de ${MULTA_DIARIA} CLP por ejemplar. Acumular 3 retrasos suspende el servicio de préstamo por 15 días.</p>
            </div>
            <div>
              <h3><InfoIcon size={14} /> Contacto Biblioteca</h3>
              <p>Para dudas sobre préstamos especiales o problemas con el sistema, escribe a biblioteca@usm.cl o acércate al mesón de atención.</p>
            </div>
          </section>
        </main>
      </div>

      {prestamoARenovar && (
        <RenewLoanModal prestamo={prestamoARenovar} onConfirmar={confirmarRenovacion} onCerrar={() => setPrestamoARenovar(null)} />
      )}

      {verHistorial && <HistoryModal historial={historialPrestamos} onCerrar={() => setVerHistorial(false)} />}

      {toast && <div className="mp-toast" role="status"><CheckIcon size={16} /> {toast}</div>}
    </div>
  );
};

export default MisPrestamos;
