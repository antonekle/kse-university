// KSE University — reworked page assembly
function UniApplyModal({ open, onClose, onSubmit }) {
  const [name,    setName]    = React.useState("");
  const [email,   setEmail]   = React.useState("");
  const [phone,   setPhone]   = React.useState("");
  const [program, setProgram] = React.useState("");
  const [note,    setNote]    = React.useState("");

  const handleSubmit = () => {
    if (!name.trim() || !email.trim()) return;
    onSubmit(name);
    setName(""); setEmail(""); setPhone(""); setProgram(""); setNote("");
  };

  return (
    <div className={"overlay" + (open ? " show" : "")} onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Apply to KSE</div>
            <div className="lead" style={{ fontSize: 14, marginTop: 6 }}>Leave your contacts and we'll get back to you shortly.</div>
          </div>
          <button onClick={onClose} style={{ border: "none", background: "transparent", cursor: "pointer" }}>
            <Icon name="close" size={22} style={{ color: "var(--kse-secondary)" }} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px 16px", marginTop: 24 }}>
          <div style={{ gridColumn: "1/-1" }}>
            <label className="flabel">Full name *</label>
            <input className="field" value={name} onChange={e => setName(e.target.value)} placeholder="Olha Zakharova" />
          </div>
          <div>
            <label className="flabel">Email *</label>
            <input className="field" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="olha@example.com" />
          </div>
          <div>
            <label className="flabel">Phone</label>
            <input className="field" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+38 0XX XXX XX XX" />
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label className="flabel">Program of interest</label>
            <select className="field" value={program} onChange={e => setProgram(e.target.value)}
              style={{ appearance: "none", cursor: "pointer" }}>
              <option value="">Select a program level…</option>
              <option value="bachelor">Bachelor's Programs</option>
              <option value="master">Master's Programs</option>
              <option value="phd">PhD Programs</option>
              <option value="short">Short Courses</option>
              <option value="mobility">Academic Mobility</option>
              <option value="other">Other / Not sure yet</option>
            </select>
          </div>
          <div style={{ gridColumn: "1/-1" }}>
            <label className="flabel">Additional information</label>
            <textarea className="field" value={note} onChange={e => setNote(e.target.value)}
              placeholder="Tell us about your background or any specific questions…"
              rows={3} style={{ resize: "vertical" }} />
          </div>
        </div>

        <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end", gap: 10 }}>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleSubmit}
            style={{ opacity: (!name.trim() || !email.trim()) ? 0.5 : 1 }}>
            Send application
          </Button>
        </div>
      </div>
    </div>
  );
}

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
      <UniResources onNav={onNav} onConsult={onConsult} />
      <UniFooter onNav={onNav} />
    </div>
  );
}

function UniApp() {
  const [path, setPath] = React.useState(currentPath());
  const [toast, setToast] = React.useState("");
  const [modal, setModal]   = React.useState(false);
  const [apply, setApply]   = React.useState(false);
  const tRef = React.useRef();
  const fire = (msg) => { setToast(msg); clearTimeout(tRef.current); tRef.current = setTimeout(() => setToast(""), 2200); };

  React.useEffect(() => {
    const onHash = () => { setPath(currentPath()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    const onApply = () => setApply(true);
    window.addEventListener("kse:apply", onApply);
    const onConsult = () => setModal(true);
    window.addEventListener("kse:consult", onConsult);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("kse:apply", onApply);
      window.removeEventListener("kse:consult", onConsult);
    };
  }, []);

  // Central nav: route when the label maps to a known page, otherwise toast.
  const onNav = (label) => {
    if (label in LABEL_TO_ROUTE) routeGo(LABEL_TO_ROUTE[label]);
    else fire(`${label} →`);
  };
  const onCta = (label) => {
    if (label === "Apply") window.dispatchEvent(new CustomEvent("kse:apply"));
    else onNav(label);
  };

  const route = ROUTES[path];
  // Dynamic faculty profile pages: people/{slug}
  let dynamicContent = null;
  if (!route && path.indexOf("people/") === 0 && typeof findPerson === "function") {
    const person = findPerson(path.slice("people/".length));
    if (person) dynamicContent = React.createElement(UniPersonPage, { person, onNav, onCta });
  }
  // Dynamic program detail pages: programs/p/{slug}
  if (!route && !dynamicContent && path.indexOf("programs/p/") === 0 && typeof getProgram === "function") {
    const program = getProgram(path.slice("programs/p/".length));
    if (program) dynamicContent = React.createElement(UniProgramDetailPage, { program, onNav, onCta });
  }
  return (
    <div>
      {dynamicContent
        ? dynamicContent
        : route
        ? route.renderFull
          ? route.renderFull(onNav, onCta)
          : <UniPlaceholder path={path} route={route} onNav={onNav} onCta={onCta} />
        : <UniHome onNav={onNav} onCta={onCta} onConsult={() => setModal(true)} />}
      <UniConsultModal open={modal} onClose={() => setModal(false)}
        onSubmit={(n) => { setModal(false); fire(n ? `Thanks ${n.split(" ")[0]} — we'll be in touch!` : "Request received — we'll be in touch!"); }} />
      <UniApplyModal open={apply} onClose={() => setApply(false)}
        onSubmit={(n) => { setApply(false); fire(n ? `Thanks ${n.split(" ")[0]}! We'll contact you shortly.` : "Application received — we'll be in touch!"); }} />
      <div className={"toast" + (toast ? " show" : "")}>{toast}</div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<UniApp />);
