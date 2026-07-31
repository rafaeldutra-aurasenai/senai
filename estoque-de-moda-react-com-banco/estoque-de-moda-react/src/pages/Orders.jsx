import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { orders } from "../data.js";
import Tag from "../components/Tag.jsx";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

const filters = ["Todos", "Pendentes", "Enviados", "Entregues", "Cancelados"];

export default function Orders() {
  usePageHeader("operação / pedidos", "Pedidos");
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <div>
      <div className="toolbar">
        <div className="filter-row">
          {filters.map((f) => (
            <button
              key={f}
              className={"filter-pill" + (activeFilter === f ? " active" : "")}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="card">
        <table>
          <thead>
            <tr><th>Pedido</th><th>Cliente</th><th>Itens</th><th>Total</th><th>Data</th><th>Status</th></tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} style={{ cursor: "pointer" }} onClick={() => navigate(`/app/pedidos/${o.id}`)}>
                <td style={{ fontWeight: 700 }}>#{o.id}</td>
                <td>{o.client}</td>
                <td>{o.items}</td>
                <td>{o.total}</td>
                <td>{o.date}</td>
                <td><Tag status={o.status} label={o.label} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
