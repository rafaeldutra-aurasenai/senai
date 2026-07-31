import { moves } from "../data.js";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

export default function Movements() {
  usePageHeader("operação / movimentações", "Movimentações de estoque");
  const full = [...moves, ...moves];

  function handleConfirm(e) {
    e.preventDefault();
    alert("Movimentação registrada (simulação).");
  }

  return (
    <div className="grid-3">
      <div className="card">
        <div className="section-head"><h3>Histórico de movimentações</h3></div>
        <div>
          {full.map((m, i) => (
            <div className="move-row" key={i}>
              <div className={`move-ic ${m.type}`}>{m.type === "in" ? "↓" : "↑"}</div>
              <div className="move-body">
                <div className="move-title">{m.title}</div>
                <div className="move-sub">{m.sub}</div>
              </div>
              <div className="move-qty" style={{ color: m.type === "in" ? "var(--success)" : "var(--danger)" }}>{m.qty}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="form-card" style={{ alignSelf: "start" }}>
        <h4>Registrar movimentação</h4>
        <div className="field"><label>Produto</label><input placeholder="Buscar produto ou SKU" /></div>
        <div className="field-row">
          <div className="field">
            <label>Tipo</label>
            <select><option>Entrada</option><option>Saída</option></select>
          </div>
          <div className="field"><label>Quantidade</label><input placeholder="0" /></div>
        </div>
        <div className="field">
          <label>Motivo</label>
          <select>
            <option>Compra de fornecedor</option>
            <option>Venda</option>
            <option>Ajuste de inventário</option>
            <option>Devolução</option>
          </select>
        </div>
        <button className="btn btn-primary" style={{ width: "100%" }} onClick={handleConfirm}>Confirmar movimentação</button>
      </div>
    </div>
  );
}
