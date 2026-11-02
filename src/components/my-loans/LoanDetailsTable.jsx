import { estadoPrestamo } from "../../data/misPrestamos";
import { ChevronIcon } from "./LoanIcons";
import "./LoanDetailsTable.scss";

const etiquetas = { activo: "Activo", renovado: "Renovado", atrasado: "Atrasado" };

const LoanDetailsTable = ({ prestamos, onVerDetalle }) => (
  <section className="loan-details">
    <h2>Detalle de Ejemplares</h2>
    <p>Vista detallada de códigos de barras y ubicaciones para devolución.</p>
    <div className="loan-details__scroll">
      <table>
        <thead>
          <tr><th>Título del Recurso</th><th>Estado</th><th>Vencimiento</th><th>Ubicación Original</th><th className="loan-details__right">Acciones</th></tr>
        </thead>
        <tbody>
          {prestamos.map((p) => {
            const estado = estadoPrestamo(p);
            return (
              <tr key={p.id}>
                <td><b>{p.titulo}</b><small>{p.autor}</small></td>
                <td><span className={`loan-badge loan-badge--${estado}`}>{etiquetas[estado]}</span></td>
                <td className={estado === "atrasado" ? "loan-details__late" : ""}>{p.fechaDevolucion}</td>
                <td>{p.ubicacion}</td>
                <td className="loan-details__right">
                  <button onClick={() => onVerDetalle(p)}>Ver Detalle <ChevronIcon size={14} /></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </section>
);

export default LoanDetailsTable;
