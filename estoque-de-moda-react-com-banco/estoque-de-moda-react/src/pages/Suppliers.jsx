import { useNavigate } from "react-router-dom";
import { suppliers } from "../data.js";
import Tag from "../components/Tag.jsx";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

export default function Suppliers() {
  usePageHeader("operação / fornecedores", "Fornecedores");
  const navigate = useNavigate();

  return (
    <div>
      <div className="toolbar">
        <div className="searchbox" style={{ width: 320 }}>🔍<input placeholder="Buscar fornecedor…" /></div>
        <button className="btn btn-primary btn-sm" onClick={() => navigate("/app/fornecedores/novo")}>+ Novo fornecedor</button>
      </div>
      <div className="card">
        <table>
          <thead>
            <tr><th>Fornecedor</th><th>Categoria</th><th>Contato</th><th>Produtos</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr
                key={s.name}
                style={{ cursor: "pointer" }}
                onClick={() => alert(`Fornecedor: ${s.name}\nContato: ${s.contact}\nProdutos fornecidos: ${s.products}`)}
              >
                <td style={{ fontWeight: 600 }}>{s.name}</td>
                <td>{s.cat}</td>
                <td>{s.contact}</td>
                <td>{s.products}</td>
                <td><Tag status={s.status} /></td>
                <td><span style={{ color: "var(--accent)", fontWeight: 600 }}>Ver →</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
