// KSE University — reworked page assembly
function UniConsultModal({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [goal, setGoal] = React.useState("");
  return (
    <div className={"overlay" + (open ? " show" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Get a consultation</div>
            <div className="lead" style={{ fontSize: 14, marginTop: 6 }}>Tell us about your goals — we'll help you find the right program.</div>
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
          <label className="flabel">What would you like to study?</label>
          <input className="field" value={goal} onChange={e => setGoal(e.target.value)} placeholder="A BA in Engineering, a PhD, a short course…" />
        </div>
        <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={() => onSubmit(name)}>Request consultation</Button>
        </div>
      </div>
    </div>
  );
}

function UniHome({ onNav, onCta, onConsult }) {
  return (
    <div>
      <UniNav onNav={onNav} onCta={onCta} />
      <UniHero onNav={onNav} onCta={onCta} />
      <UniAdmissions onNav={onNav} onConsult={onConsult} />
      <UniNews onNav={onNav} />
      <UniLife onNav={onNav} />
      {false && <UniFaculties onNav={onNav} onConsult={onConsult} />}
      {false && <UniPrograms onNav={onNav} />}
      <UniResearch onNav={onNav} />
      <UniFacultyStaff onNav={onNav} />
      <UniResources onNav={onNav} />
      <UniFooter onNav={onNav} />
    </div>
  );
}

function UniApp() {
  const [path, setPath] = React.useState(currentPath());
  const [toast, setToast] = React.useState("");
  const [modal, setModal] = React.useState(false);
  const tRef = React.useRef();
  const fire = (msg) => { setToast(msg); clearTimeout(tRef.current); tRef.current = setTimeout(() => setToast(""), 2200); };

  React.useEffect(() => {
    const onHash = () => { setPath(currentPath()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Central nav: route when the label maps to a known page, otherwise toast.
  const onNav = (label) => {
    if (label in LABEL_TO_ROUTE) routeGo(LABEL_TO_ROUTE[label]);
    else fire(`${label} →`);
  };
  const onCta = (label) => {
    if (label === "Apply") routeGo("admissions");
    else onNav(label);
  };

  const route = ROUTES[path];
  return (
    <div>
      {route
        ? route.renderFull
          ? route.renderFull(onNav, onCta)
          : <UniPlaceholder path={path} route={route} onNav={onNav} onCta={onCta} />
        : <UniHome onNav={onNav} onCta={onCta} onConsult={() => setModal(true)} />}
      <UniConsultModal open={modal} onClose={() => setModal(false)}
        onSubmit={(n) => { setModal(false); fire(n ? `Thanks ${n.split(" ")[0]} — we'll be in touch!` : "Request received — we'll be in touch!"); }} />
      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UniApp />);
