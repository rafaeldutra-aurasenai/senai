import { useNavigate } from "react-router-dom";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

export default function SupplierForm() {
  usePageHeader("operação / fornecedores / novo", "Novo fornecedor");
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    navigate("/app/fornecedores");
  }

  return (
    <div className="form-shell">
      <div className="form-card">
        <h4>Dados do fornecedor</h4>
        <div className="field"><label>Razão social</label><input placeholder="Textura Confecções Ltda." /></div>
        <div className="field-row">
          <div className="field"><label>CNPJ</label><input placeholder="00.000.000/0001-00" /></div>
          <div className="field">
            <label>Categoria fornecida</label>
            <select>
              <option>Vestidos</option>
              <option>Blusas</option>
              <option>Malharia</option>
              <option>Acessórios</option>
            </select>
          </div>
        </div>
      </div>
      <div className="form-card">
        <h4>Contato</h4>
        <div className="field-row">
          <div className="field"><label>Responsável</label><input placeholder="Nome do contato" /></div>
          <div className="field"><label>Telefone</label><input placeholder="(11) 90000-0000" /></div>
        </div>
        <div className="field"><label>E-mail</label><input placeholder="contato@fornecedor.com.br" /></div>
      </div>
      <div className="form-actions">
        <button className="btn btn-ghost" onClick={() => navigate("/app/fornecedores")}>Cancelar</button>
        <button className="btn btn-primary" onClick={handleSave}>Salvar fornecedor</button>
      </div>
    </div>
  );
}
