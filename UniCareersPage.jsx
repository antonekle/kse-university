// KSE University — Open Positions placeholder page
// Route: #/careers

(function () {

const POSITIONS = [
  {
    dept: "Engineering School",
    roles: [
      { title: "Assistant Professor in Computer Science",   type: "Full-time", deadline: "31 Jul 2026" },
      { title: "Postdoctoral Researcher — AI & Systems",   type: "Full-time", deadline: "15 Aug 2026" },
    ],
  },
  {
    dept: "Economics",
    roles: [
      { title: "Associate Professor in Macroeconomics",    type: "Full-time", deadline: "30 Aug 2026" },
      { title: "Research Fellow — Policy & Governance",    type: "Part-time", deadline: "10 Sep 2026" },
    ],
  },
  {
    dept: "Mathematics",
    roles: [
      { title: "Lecturer in Applied Mathematics",          type: "Full-time", deadline: "01 Sep 2026" },
    ],
  },
  {
    dept: "Administration & Research Support",
    roles: [
      { title: "Research Project Coordinator",             type: "Full-time", deadline: "20 Jul 2026" },
      { title: "Academic Affairs Officer",                 type: "Full-time", deadline: "25 Jul 2026" },
    ],
  },
];

function UniCareersPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Open Positions</span>
          </nav>
          <span className="tag tag--soft" style={{ display: "inline-block", marginTop: 24 }}>Careers</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.05, margin: "18px 0 16px", maxWidth: "20ch" }}>
            Open Positions
          </h1>
          <p style={{ fontSize: 18, color: "var(--kse-desc-light)", margin: "0 0 32px", maxWidth: "48ch", lineHeight: 1.55 }}>
            Academic and research vacancies across the University's schools and departments.
          </p>
          <Button variant="secondary" onClick={() => routeGo("contacts")}>
            Submit a general application
          </Button>
        </div>
      </section>

      {/* ── POSITIONS ───────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {POSITIONS.map(dept => (
              <div key={dept.dept}>
                <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
                  letterSpacing: "-0.02em", color: "var(--kse-title-light)",
                  margin: "0 0 16px", paddingBottom: 12,
                  borderBottom: "1px solid var(--kse-border-soft)" }}>
                  {dept.dept}
                </h2>
                {dept.roles.map((role, i) => (
                  <div key={role.title} style={{
                    display: "grid", gridTemplateColumns: "1fr auto auto",
                    alignItems: "center", gap: 24, padding: "16px 0",
                    borderBottom: i < dept.roles.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  }}>
                    <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 17, fontWeight: 500,
                      letterSpacing: "-0.01em", color: "var(--kse-title-light)" }}>
                      {role.title}
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }}>
                      <span className="tag tag--soft" style={{ fontSize: 12 }}>{role.type}</span>
                      <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
                        color: "var(--kse-secondary)", whiteSpace: "nowrap" }}>
                        Deadline: {role.deadline}
                      </span>
                    </div>
                    <button onClick={() => routeGo("contacts")} style={{
                      display: "inline-flex", alignItems: "center", gap: 5, flexShrink: 0,
                      fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                      color: "var(--kse-title-light)", background: "transparent",
                      border: "1px solid var(--kse-border)", borderRadius: 8,
                      padding: "7px 16px", cursor: "pointer", transition: ".15s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--kse-title-light)"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--kse-border)"}>
                      Apply <Icon name="arrow_forward" size={14} />
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}

window.UniCareersPage = UniCareersPage;

})();
