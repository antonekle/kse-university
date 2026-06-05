// "I'm looking for" wayfinding block on soft wash
const WAYS = [
  ["A degree program", "Executive education", "Courses"],
  ["Research or publications", "News and media", "Partnership opportunities"],
  ["Career opportunities", "Open lectures and events", "Experts"],
];
function Wayfinding({ onItem }) {
  return (
    <section style={{ background: "var(--kse-bg-light-2)" }}>
      <div className="kse-shell section" style={{ display: "grid", gridTemplateColumns: "340px 1fr", gap: 56, alignItems: "start" }}>
        <h2 className="h-sec">I'm looking for</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px 40px" }}>
          {WAYS.flat().map((w, i) => (
            <a key={w} href="#" onClick={(e) => { e.preventDefault(); onItem(w); }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8,
                fontFamily: "var(--kse-font-sans)", fontSize: 16, padding: "12px 0",
                borderBottom: "1px solid #E6E6EA", transition: ".15s" }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = "6px"; }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; }}>
              {w}<Icon name="arrow_outward" size={18} style={{ color: "var(--kse-secondary)" }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Wayfinding });
