// KSE University — /faculties full page
// Route: #/faculties

const FACULTIES_PAGE_DATA = [
  {
    name: "Engineering School",
    desc: "Engineering, data science, applied mathematics",
    levels: ["BA", "MA", "PhD"],
    slug: "engineering",
  },
  {
    name: "Computer Technologies",
    desc: "Software engineering, computer science and applied computing",
    levels: ["BA", "MA", "Short"],
    slug: "computer-technologies",
  },
  {
    name: "Mathematics",
    desc: "Pure and applied mathematics",
    levels: ["BA", "MA", "PhD"],
    slug: "mathematics",
  },
  {
    name: "Social Sciences",
    desc: "Sociology, public policy, behavioral sciences",
    levels: ["BA", "MA"],
    slug: "social-sciences",
  },
  {
    name: "Economics",
    desc: "Economic theory, business economics, policy",
    levels: ["BA", "MA", "PhD"],
    slug: "economics",
  },
];

function FacultyCard({ faculty, onNav }) {
  const [hovered, setHovered] = React.useState(false);

  const bulletLinks = [
    { label: "Programs",         sub: faculty.levels.join(" · "),  route: "programs" },
    { label: "Faculty Team",     sub: null,                         route: "people" },
    { label: "Research Centers", sub: null,                         route: "research" },
  ];

  return (
    <div
      style={{
        border: "1px solid var(--kse-border)",
        borderRadius: 16,
        padding: "28px 28px 24px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        transition: "box-shadow .18s, transform .18s",
        boxShadow: hovered ? "var(--kse-shadow-md)" : "none",
        transform: hovered ? "translateY(-2px)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Level badges */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {faculty.levels.map(l => (
          <span key={l} className="udeg" style={{ fontSize: 11 }}>{l}</span>
        ))}
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
        letterSpacing: "-0.02em", margin: "0 0 10px", color: "var(--kse-title-light)",
        lineHeight: 1.2,
      }}>{faculty.name}</h3>

      {/* Description */}
      <p style={{
        fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6,
        margin: "0 0 24px",
      }}>{faculty.desc}</p>

      {/* Bullet links */}
      <div style={{
        display: "flex", flexDirection: "column", gap: 0,
        borderTop: "1px solid var(--kse-border-soft)",
        marginBottom: 22, flex: 1,
      }}>
        {bulletLinks.map(b => (
          <a key={b.label} href="#"
            onClick={(e) => { e.preventDefault(); routeGo(b.route); }}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: 12, padding: "13px 0",
              borderBottom: "1px solid var(--kse-border-soft)",
              textDecoration: "none", transition: ".15s",
            }}
            onMouseEnter={e => e.currentTarget.style.paddingLeft = "4px"}
            onMouseLeave={e => e.currentTarget.style.paddingLeft = "0px"}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{
                fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                color: "var(--kse-title-light)",
              }}>{b.label}</span>
              {b.sub && (
                <span style={{
                  fontFamily: "var(--kse-font-ui)", fontSize: 12,
                  color: "var(--kse-secondary)", fontWeight: 500,
                }}>{b.sub}</span>
              )}
            </div>
            <Icon name="arrow_forward" size={15} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
          </a>
        ))}
      </div>

      {/* CTA */}
      <button
        onClick={() => routeGo("faculties/" + faculty.slug)}
        style={{
          fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
          padding: "11px 20px", borderRadius: 8, cursor: "pointer",
          background: "var(--kse-title-light)", color: "#fff", border: "none",
          display: "inline-flex", alignItems: "center", gap: 7, transition: ".15s",
          alignSelf: "flex-start",
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
        onMouseLeave={e => e.currentTarget.style.opacity = "1"}
      >
        Open Faculty Hub <Icon name="arrow_forward" size={16} />
      </button>
    </div>
  );
}

function UniFacultiesPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active="Faculties" onNav={onNav} onCta={onCta} />

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 60 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Faculties</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Academic Structure</span>
          <h1 style={{
            fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "18ch",
          }}>
            Faculties
          </h1>
          <p style={{
            fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "54ch", lineHeight: 1.5,
          }}>
            The core academic layer of the University. Each unit brings together programs, people, research, and events.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("programs")}>Browse programs</Button>
            <Button variant="secondary" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Admissions</Button>
          </div>
        </div>
      </section>

      {/* ── FACULTY CARDS ────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 20,
          }}>
            {FACULTIES_PAGE_DATA.map(f => (
              <FacultyCard key={f.slug} faculty={f} onNav={onNav} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-accent-band)", padding: "64px 0" }}>
        <div className="kse-shell" style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 32, flexWrap: "wrap",
        }}>
          <h2 style={{
            fontFamily: "var(--kse-font-sans)", fontWeight: 500,
            letterSpacing: "-0.03em", fontSize: 36, color: "#fff", margin: 0,
          }}>
            Not sure where to start?
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => routeGo("programs")}
              style={{
                fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "13px 26px", borderRadius: 8, cursor: "pointer",
                background: "#fff", color: "var(--kse-accent-band)", border: "none",
                display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              Browse programs <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-accent)" }} />
            </button>
            <button onClick={() => onNav("Contact Us")}
              style={{
                fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "13px 26px", borderRadius: 8, cursor: "pointer",
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.32)",
                display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"}>
              Get a consultation <Icon name="arrow_forward" size={18} />
            </button>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

Object.assign(window, { UniFacultiesPage });
