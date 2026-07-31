import { useParams, useNavigate, Link } from "react-router-dom";
import { findOrder, findProduct } from "../data.js";
import Tag from "../components/Tag.jsx";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = findOrder(id);

  usePageHeader("operação / pedidos / detalhe", order ? `Pedido #${order.id}` : "Pedido não encontrado");

  if (!order) {
    return (
      <div>
        <p>Pedido não encontrado.</p>
        <Link to="/app/pedidos" style={{ color: "var(--accent)", fontWeight: 600 }}>← Voltar para pedidos</Link>
      </div>
    );
  }

  function handleShip() {
    alert("Pedido marcado como enviado (simulação).");
  }

  return (
    <div>
      <a
        className="link"
        href="#"
        onClick={(e) => { e.preventDefault(); navigate("/app/pedidos"); }}
        style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }}
      >
        ← Voltar para pedidos
      </a>

      <div className="grid-3" style={{ marginTop: 16 }}>
        <div className="card">
          <div className="section-head">
            <h3>Pedido #{order.id}</h3>
            <Tag status={order.status} label={order.label} />
          </div>
          <table>
            <thead><tr><th>Produto</th><th>Qtd.</th><th>Preço</th><th>Subtotal</th></tr></thead>
            <tbody>
              {order.lines.map((l, i) => {
                const p = findProduct(l.sku);
                return (
                  <tr key={i}>
                    <td className="prod-cell">
                      <div className="prod-thumb" style={{ background: p.color }}>{p.emoji}</div>
                      <div><div className="pname">{p.name}</div><div className="psku">{l.variant}</div></div>
                    </td>
                    <td>{l.qty}</td>
                    <td>{p.price}</td>
                    <td>{p.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="form-card" style={{ alignSelf: "start" }}>
          <h4>Cliente</h4>
          <div className="kv-row"><span>Nome</span><span>{order.client}</span></div>
          <div className="kv-row"><span>E-mail</span><span>{order.email}</span></div>
          <div className="kv-row"><span>Endereço</span><span>{order.city}</span></div>
          <div className="kv-row"><span>Frete</span><span>{order.freight}</span></div>
          <div className="kv-row"><span>Total</span><span>{order.total}</span></div>
          <button className="btn btn-primary" style={{ width: "100%", marginTop: 14 }} onClick={handleShip}>Marcar como enviado</button>
        </div>
      </div>
    </div>
  );
}
