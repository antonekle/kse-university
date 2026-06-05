// KSE University — top nav (distinct IA from the hub)
function UniNav({ onNav, onCta, active }) {
  const links = ["Faculties", "Admissions", "Research", "Grants & Aid", "Community", "Programs", "About"];
  const [lang, setLang] = React.useState("EN");
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(10px)", borderBottom: "1px solid var(--kse-border-soft)" }}>
      <div className="kse-shell" style={{ display: "flex", alignItems: "center", gap: 24, height: 76 }}>
        <a href="#top" onClick={(e) => { e.preventDefault(); onNav("Home"); }}
          style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em", color: "#0D0D0D" }}>KSE University</span>
        </a>
        <nav style={{ display: "flex", gap: 22, marginLeft: 14 }}>
          {links.map(l => {
            const on = active === l;
            return (
              <a key={l} href="#" aria-current={on ? "page" : undefined}
                onClick={(e) => { e.preventDefault(); onNav(l); }}
                style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: on ? 700 : 500,
                  opacity: on ? 1 : .82, color: on ? "#0D0D0D" : undefined,
                  whiteSpace: "nowrap", transition: ".15s" }}
                onMouseEnter={e => { if (!on) e.currentTarget.style.opacity = 1; }}
                onMouseLeave={e => { if (!on) e.currentTarget.style.opacity = .82; }}>{l}</a>
            );
          })}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 14 }}>
          <button onClick={() => setLang(lang === "EN" ? "UA" : "EN")}
            style={{ border: "none", background: "transparent", cursor: "pointer", fontFamily: "var(--kse-font-ui)",
              fontSize: 13, fontWeight: 600, color: "var(--kse-secondary)" }}>
            <span style={{ color: lang === "UA" ? "#0D0D0D" : "var(--kse-secondary)" }}>UA</span>
            {" / "}
            <span style={{ color: lang === "EN" ? "#0D0D0D" : "var(--kse-secondary)" }}>EN</span>
          </button>
          <Button variant="secondary" size="sm" onClick={() => onCta("Visit Campus")}>Visit campus</Button>
          <Button variant="primary" size="sm" onClick={() => onCta("Apply")}>Apply</Button>
        </div>
      </div>
    </header>
  );
}
Object.assign(window, { UniNav });
