// KSE website — interactive prototype assembly
const UNITS = ["KSE University", "KSE GBS", "KSE Institute", "KSE Foundation", "KSE ProfTech"];

function ConsultModal({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [goal, setGoal] = React.useState("");
  return (
    <div className={"overlay" + (open ? " show" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Get a consultation</div>
            <div className="lead" style={{ fontSize: 14, marginTop: 6 }}>Tell us about your goals — we'll help you find the right fit.</div>
          </div>
          <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            <Icon name="close" size={22} style={{ color: "var(--kse-secondary)" }} />
          </button>
        </div>
        <div style={{ marginTop: 22 }}>
          <label className="flabel">Your name</label>
          <input className="field" value={name} onChange={e => setName(e.target.value)} placeholder="Olha Zakharova" />
        </div>
        <div style={{ marginTop: 16 }}>
          <label className="flabel">What are you looking for?</label>
          <input className="field" value={goal} onChange={e => setGoal(e.target.value)} placeholder="An MBA, a research role, a short course…" />
        </div>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={() => onSubmit(name)}>Request consultation</Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [toast, setToast] = React.useState("");
  const [activeUnit, setActiveUnit] = React.useState(null);
  const [modal, setModal] = React.useState(false);
  const tRef = React.useRef();
  const fire = (msg) => {
    setToast(msg); clearTimeout(tRef.current);
    tRef.current = setTimeout(() => setToast(""), 2200);
  };
  return (
    <div>
      <Navbar onSearch={q => fire(q ? `Searching “${q}”…` : "Type to search")} onNav={l => fire(`${l} →`)} />
      <Hero units={UNITS} activeUnit={activeUnit} setActiveUnit={(u) => { setActiveUnit(u); if (u) fire(`Filtered to ${u}`); }}
        onCta={l => l === "Admissions" ? fire("Opening Admissions →") : fire(`${l} →`)} />
      <NewsEvents onItem={t => fire(`Opening “${t}”`)} onMore={s => fire(`All ${s} →`)} />
      <Wayfinding onItem={t => fire(`${t} →`)} />
      <AdmissionsEducation onItem={t => fire(`${t} →`)} onConsult={() => setModal(true)} />
      <LifeAtKSE onItem={t => fire(`${t} →`)} />
      <Footer onItem={t => fire(`${t} →`)} />
      <ConsultModal open={modal} onClose={() => setModal(false)}
        onSubmit={(n) => { setModal(false); fire(n ? `Thanks ${n.split(" ")[0]} — we'll be in touch!` : "Request received — we'll be in touch!"); }} />
      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
