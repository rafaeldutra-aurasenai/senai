export default function Tag({ status, label }) {
  const map = {
    ok: { cls: "ok", text: "Em estoque" },
    low: { cls: "low", text: "Estoque baixo" },
    out: { cls: "out", text: "Esgotado" },
    neutral: { cls: "neutral", text: "—" },
  };
  const info = map[status] || map.neutral;
  return <span className={`tag ${info.cls}`}>{label || info.text}</span>;
}
