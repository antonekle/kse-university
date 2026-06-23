// KSE footer — dark, multi-column
const FOOT = {
  Units: ["University", "GBS", "ProfTech", "Foundation", "Institute"],
  Discover: ["Admissions", "Education", "News & Events", "Visit", "Community", "Research & Experts"],
  People: ["Board", "Management", "Faculty", "Experts"],
  Connect: ["Contact Us", "Media / Press", "Social Media Hub", "Careers"],
  Foundation: ["Donate", "Projects", "Impact reports", "Grants & Aid"],
};
function FootCol({ title, items, onItem }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {items.map(i => (
          <a key={i} href="#" onClick={(e) => { e.preventDefault(); onItem(i); }}
            style={{ fontSize: 14, color: "var(--kse-desc-dark)", transition: ".15s" }}
            onMouseEnter={e => e.currentTarget.style.color = "#fff"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--kse-desc-dark)"}>{i}</a>
        ))}
      </div>
    </div>
  );
}
function Footer({ onItem }) {
  const socials = ["smart_display", "send", "groups", "thumb_up"];
  return (
    <footer style={{ background: "var(--kse-bg-dark-1)", color: "#fff" }}>
      <div className="kse-shell" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 32 }}>
          {Object.entries(FOOT).map(([k, v]) => <FootCol key={k} title={k} items={v} onItem={onItem} />)}
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
          marginTop: 56, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.12)" }}>
          <Logo dark />
          <div style={{ display: "flex", gap: 10 }}>
            {socials.map((s, i) => (
              <a key={i} href="#" onClick={(e) => e.preventDefault()}
                style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)",
                  display: "flex", alignItems: "center", justifyContent: "center", transition: ".15s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <Icon name={s} size={18} style={{ color: "#fff" }} />
              </a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 28,
          fontFamily: "var(--kse-font-ui)", fontSize: 12, color: "var(--kse-desc-dark)", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="#" onClick={(e) => e.preventDefault()}>Customer Service</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Terms &amp; Conditions</a>
            <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          </div>
          <div>© KSE — Kyiv School of Economics. Clickable prototype.</div>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Footer });
