// KSE University — Resources (quiet link row) + footer
const RESOURCES = [
  { ic: "school", t: "Moodle", s: "Learning" },
  { ic: "hub", t: "KSE Hub", s: "Portal" },
  { ic: "swap_horiz", t: "Mobility", s: "Exchanges" },
  { ic: "description", t: "Documents", s: "Forms, policies" },
];
function UniResources({ onNav }) {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num">06</span>
            <h2 className="usec__title">Resources &amp; contact</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); onNav("Resources"); }}>
            All resources <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {RESOURCES.map(r => (
            <div key={r.t} onClick={() => onNav("Resources")}
              style={{ display: "flex", alignItems: "center", gap: 14, border: "1px solid var(--kse-border)",
                borderRadius: 12, padding: "18px 20px", cursor: "pointer", transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <Icon name={r.ic} size={24} />
              <div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 16, fontWeight: 600 }}>{r.t}</div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, color: "var(--kse-secondary)" }}>{r.s}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="lead" style={{ fontSize: 13, marginTop: 16 }}>
          <strong style={{ color: "var(--kse-secondary)", fontWeight: 600 }}>External</strong> — Moodle and KSE Hub are external systems, no duplicated content.
        </p>
      </div>
    </section>
  );
}

function UniFooter({ onNav }) {
  const cols = {
    Study: ["Programs", "Admissions", "Grants & Aid", "Faculties", "Research"],
    University: ["About", "Community", "Campus", "Contact"],
  };
  return (
    <footer style={{ background: "var(--kse-bg-dark-1)", color: "#fff" }}>
      <div className="kse-shell" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 40 }}>
          <div>
            <span style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.02em", color: "#ffffff" }}>KSE University</span>
            <p style={{ color: "var(--kse-desc-dark)", fontSize: 14, marginTop: 16, maxWidth: 300, lineHeight: 1.5 }}>
              university.kse.ua — the academic showcase of the University.
            </p>
          </div>
          {Object.entries(cols).map(([k, v]) => (
            <div key={k}>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 700, marginBottom: 14 }}>{k}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {v.map(i => (
                  <a key={i} href="#" onClick={(e) => { e.preventDefault(); onNav(i); }}
                    style={{ fontSize: 14, color: "var(--kse-desc-dark)", transition: ".15s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--kse-desc-dark)"}>{i}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Part of KSE ecosystem strip */}
        <div style={{ marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.12)",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
            letterSpacing: ".08em", textTransform: "uppercase", color: "var(--kse-desc-dark)" }}>
            Part of KSE
          </span>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { label: "KSE GBS",        href: "https://gbs.kse.ua/" },
              { label: "KSE Institute",  href: "https://kse.ua/kse-department/kse-institute/" },
              { label: "KSE Foundation", href: "https://foundation.kse.ua/" },
              { label: "KSE ProfTech",   href: "https://proftech.kse.ua/" },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 5,
                  fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 500,
                  color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.18)",
                  borderRadius: 999, padding: "6px 14px", transition: ".15s",
                  textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.65)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)"; }}>
                {label}
                <Icon name="open_in_new" size={13} />
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", justifyContent: "space-between", fontFamily: "var(--kse-font-ui)", fontSize: 12,
          color: "var(--kse-desc-dark)" }}>
          <span>© 2026 KSE University. All rights reserved.</span>
          <span>Kyiv · Ukraine</span>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { UniResources, UniFooter });
