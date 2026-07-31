import { categories } from "../data.js";
import { usePageHeader } from "../components/PageHeaderContext.jsx";

export default function Categories() {
  usePageHeader("catálogo / categorias", "Categorias");

  return (
    <div>
      <div className="toolbar">
        <div></div>
        <button className="btn btn-primary btn-sm">+ Nova categoria</button>
      </div>
      <div className="cat-grid">
        {categories.map((c) => (
          <div className="cat-tile" key={c.name}>
            <div className="ic" style={{ background: c.bg }}>{c.ic}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14.5 }}>{c.name}</div>
              <div className="count">{c.count}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
