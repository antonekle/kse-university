// KSE University — Faculties as editorial list rows (was a 6-card grid)
const FACULTIES = [
  { name: "Engineering School", degrees: ["BA", "MA", "PhD"], desc: "Engineering, data science, applied mathematics" },
  { name: "Economics & Business", degrees: ["BA", "MA", "PhD"], desc: "Economic theory and policy" },
  { name: "Sociology", degrees: ["BA", "MA"], desc: "Public policy, behavioral sciences" },
  { name: "Mathematics", degrees: ["BA", "MA", "PhD"], desc: "Pure and applied mathematics" },
  { name: "Cybersecurity", degrees: ["BA", "MA", "Short"], desc: "Systems defense, AI security" },
  { name: "Delta Engineering", degrees: ["MA", "Short"], desc: "Defense engineering, dual-use" },
];
function UniFaculties({ onNav, onConsult }) {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num">04</span>
            <h2 className="usec__title">Faculties &amp; schools</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); onNav("Faculties"); }}>
            All faculties <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div>
          {FACULTIES.map(f => (
            <div key={f.name} className="urow" onClick={() => onNav(f.name)}>
              <div className="urow__name">{f.name}</div>
              <div className="urow__degrees">{f.degrees.map(d => <span key={d} className="udeg">{d}</span>)}</div>
              <div className="urow__desc">{f.desc}</div>
              <div className="urow__arrow"><Icon name="arrow_forward" size={20} /></div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 32, background: "var(--kse-accent-band)", borderRadius: 16, padding: "30px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Not sure where to start?</div>
            <div style={{ color: "var(--kse-desc-dark)", fontSize: 15, marginTop: 6 }}>Tell us about your goals — we'll help you find the right program.</div>
          </div>
          <Button variant="light" icon="chat_bubble" onClick={onConsult}>Get a consultation</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniFaculties });
