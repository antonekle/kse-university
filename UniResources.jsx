// KSE University — Resources (airy link list) + Contact Us + footer

const RESOURCE_LINKS = [
  { name: "Moodle",     desc: "Learning management system",           href: "https://teaching.kse.org.ua/login/index.php", external: true  },
  { name: "KSE Hub",    desc: "The main site of KSE ecosystem",        href: "https://kse.ua",                              external: true  },
  { name: "Documents",  desc: "Forms, policies, templates",           href: "#/documents",                                         external: false },
];

function UniResources({ onNav, onConsult }) {
  return (
    <>
      {/* ── RESOURCES ─────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <h2 className="usec__title">Resources</h2>
            </div>
          </div>
          <div style={{ marginTop: 8 }}>
            {RESOURCE_LINKS.map((r, i) => (
              <a
                key={r.name}
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  gap: 24, padding: "22px 0", textDecoration: "none",
                  borderBottom: "1px solid var(--kse-border-soft)",
                  borderTop: i === 0 ? "1px solid var(--kse-border-soft)" : "none",
                  transition: "opacity .15s",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.6"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                <span style={{
                  fontFamily: "var(--kse-font-sans)", fontWeight: 500,
                  fontSize: 22, letterSpacing: "-0.02em", color: "var(--kse-title-light)",
                  minWidth: 160,
                }}>{r.name}</span>
                <span style={{
                  fontFamily: "var(--kse-font-ui)", fontSize: 14,
                  color: "var(--kse-secondary)", flex: 1,
                }}>{r.desc}</span>
                <Icon
                  name={r.external ? "open_in_new" : "arrow_forward"}
                  size={18}
                  style={{ color: "var(--kse-secondary)", flexShrink: 0 }}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT US ────────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <h2 className="usec__title">Contact us</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.1fr", gap: 16, alignItems: "stretch" }}>
            {/* Admissions */}
            <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14,
              padding: "28px 28px 24px", background: "#fff" }}>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".12em", textTransform: "uppercase",
                color: "var(--kse-secondary)", marginBottom: 14 }}>Admissions</div>
              <a href="tel:+380732486976" style={{
                display: "block", fontFamily: "var(--kse-font-sans)", fontWeight: 500,
                fontSize: 20, letterSpacing: "-0.01em", color: "var(--kse-title-light)",
                textDecoration: "none", marginBottom: 6,
              }}>+38 073 248 69 76</a>
              <a href="mailto:applyto@kse.org.ua" style={{
                display: "block", fontFamily: "var(--kse-font-ui)", fontSize: 14,
                color: "var(--kse-secondary)", textDecoration: "none",
              }}>applyto@kse.org.ua</a>
            </div>
            {/* General */}
            <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14,
              padding: "28px 28px 24px", background: "#fff" }}>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".12em", textTransform: "uppercase",
                color: "var(--kse-secondary)", marginBottom: 14 }}>General questions</div>
              <a href="tel:+380503963004" style={{
                display: "block", fontFamily: "var(--kse-font-sans)", fontWeight: 500,
                fontSize: 20, letterSpacing: "-0.01em", color: "var(--kse-title-light)",
                textDecoration: "none", marginBottom: 6,
              }}>+38 050 396 30 04</a>
              <span style={{ display: "block", fontFamily: "var(--kse-font-ui)", fontSize: 14,
                color: "var(--kse-secondary)" }}>Mon–Fri, 9:00–18:00</span>
            </div>
            {/* CTA */}
            <div style={{
              background: "var(--kse-accent-band)", borderRadius: 14,
              padding: "28px 32px 24px",
              display: "flex", flexDirection: "column", justifyContent: "space-between",
            }}>
              <div>
                <div style={{ color: "#fff", fontFamily: "var(--kse-font-sans)", fontWeight: 500,
                  fontSize: 20, letterSpacing: "-0.015em", marginBottom: 8 }}>
                  Not sure where to start?
                </div>
                <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.55 }}>
                  Tell us about your goals — we'll help you find the right program.
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <Button variant="light" icon="chat_bubble" onClick={onConsult}>
                  Get a consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


function UniFooter({ onNav }) {
  const cols = {
    Study: ["Programs", "Admissions", "Grants & Aid", "Faculties", "Research"],
    University: ["About", "Community", "Campus", "Contact Us"],
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
