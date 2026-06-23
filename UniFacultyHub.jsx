// KSE University — Faculty Hub pages (shared layout, 5 instances)
// Routes: #/faculties/engineering, /computer-technologies, /mathematics, /social-sciences, /economics

const FACULTY_HUB_DATA = {
  engineering: {
    title: "Engineering School",
    subtitle: "Engineering, data science, and applied mathematics.",
    tag: "Faculty",
    programs: [
      { name: "Software Engineering",        level: "BA", slug: "software-engineering" },
      { name: "Artificial Intelligence",     level: "BA", slug: "artificial-intelligence" },
      { name: "Applied Mathematics",         level: "BA", slug: "applied-mathematics" },
      { name: "Unmanned Aerial Vehicles",    level: "MA", slug: "unmanned-aerial-vehicles" },
      { name: "Micro and Nanoelectronics",   level: "MA", slug: "micro-and-nanoelectronics" },
    ],
  },
  "computer-technologies": {
    title: "Computer Technologies",
    subtitle: "Software, cybersecurity, and intelligent systems.",
    tag: "Faculty",
    programs: [
      { name: "Software Engineering",    level: "BA", slug: "software-engineering" },
      { name: "Cybersecurity",           level: "BA", slug: "cybersecurity" },
      { name: "Artificial Intelligence", level: "BA", slug: "artificial-intelligence" },
    ],
  },
  mathematics: {
    title: "Mathematics",
    subtitle: "Pure and applied mathematics, physical and mathematical sciences.",
    tag: "Faculty",
    programs: [
      { name: "Applied Mathematics",                       level: "BA", slug: "applied-mathematics" },
      { name: "Physical Mathematics",                      level: "BA", slug: "physical-mathematics" },
      { name: "Mathematics",                               level: "MA", slug: "mathematics" },
      { name: "Bioinformatics and Biomedical Data Analysis", level: "MA", slug: "bioinformatics" },
    ],
  },
  "social-sciences": {
    title: "Social Sciences",
    subtitle: "Psychology, sociology, public policy, and urban studies.",
    tag: "Faculty",
    programs: [
      { name: "Psychology",                        level: "BA", slug: "psychology" },
      { name: "Law",                               level: "BA", slug: "law" },
      { name: "Public Policy and Governance",      level: "MA", slug: "public-policy-governance" },
      { name: "Urbanism and Postwar Reconstruction", level: "MA", slug: "urbanism-reconstruction" },
      { name: "Social Psychology",                 level: "MA", slug: "social-psychology" },
      { name: "Memory and Conflict Studies",       level: "MA", slug: "memory-conflict-studies" },
    ],
  },
  economics: {
    title: "Economics",
    subtitle: "Economic theory, data, business, and finance.",
    tag: "Faculty",
    programs: [
      { name: "Business Economics",              level: "BA", slug: "business-economics" },
      { name: "Economics and Big Data",          level: "BA", slug: "economics-big-data" },
      { name: "Business and Finance Economics",  level: "MA", slug: "business-finance-economics" },
      { name: "Economic Analysis",               level: "MA", slug: "economic-analysis" },
    ],
  },
};

/* ─── Faculty staff block: cards for this faculty + link to full directory ── */
function FacultyStaffSection({ staff }) {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head" style={{ marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
              People
            </div>
            <h2 className="usec__title">Faculty</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("people"); }}>
            All faculty <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div className="people-grid">
          {staff.map(p => <PersonCard key={p.slug} person={p} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── Placeholder stub section ─────────────────────────────────────── */
function StubSection({ title, icon }) {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head" style={{ marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
              {title}
            </div>
            <h2 className="usec__title">{title}</h2>
          </div>
        </div>
        <div style={{
          border: "1px dashed var(--kse-border)", borderRadius: 14,
          minHeight: 140, display: "flex", alignItems: "center", justifyContent: "center",
          gap: 10, background: "rgba(255,255,255,0.6)",
        }}>
          <Icon name={icon} size={20} style={{ color: "var(--kse-secondary)" }} />
          <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14,
            color: "var(--kse-secondary)", fontWeight: 500 }}>Coming soon</span>
        </div>
      </div>
    </section>
  );
}

/* ─── Shared layout ─────────────────────────────────────────────────── */
function FacultyHubLayout({ facultyKey, onNav, onCta }) {
  const data = FACULTY_HUB_DATA[facultyKey];

  return (
    <div>
      <UniNav active="Faculties" onNav={onNav} onCta={onCta} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 56 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("faculties"); }}>Faculties</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">{data.title}</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>{data.tag}</span>
          <h1 style={{
            fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "18ch",
          }}>{data.title}</h1>
          <p style={{
            fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "50ch", lineHeight: 1.5,
          }}>{data.subtitle}</p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("programs")}>View all programs</Button>
            <Button variant="secondary" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Admissions</Button>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Programs
              </div>
              <h2 className="usec__title">Programs at this faculty</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("programs"); }}>
              All programs <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{
            border: "1px solid var(--kse-border)", borderRadius: 12,
            overflow: "hidden",
          }}>
            {data.programs.map((p, i) => (
              <a key={i} href={"#/programs/p/" + p.slug}
                onClick={e => { e.preventDefault(); routeGo("programs/p/" + p.slug); }}
                style={{
                  display: "flex", alignItems: "center", gap: 16, padding: "18px 24px",
                  borderBottom: i < data.programs.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  textDecoration: "none", color: "inherit", background: "#fff", transition: ".12s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                <span className="udeg" style={{ flexShrink: 0 }}>{p.level}</span>
                <span style={{
                  flex: 1, fontFamily: "var(--kse-font-sans)", fontSize: 17,
                  fontWeight: 500, letterSpacing: "-0.01em", color: "var(--kse-title-light)",
                }}>{p.name}</span>
                <Icon name="arrow_forward" size={16} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FACULTY TEAM ─────────────────────────────────────── */}
      {(() => {
        const staff = (typeof peopleByFaculty === "function") ? peopleByFaculty(data.title) : [];
        return staff.length
          ? <FacultyStaffSection staff={staff} />
          : <StubSection title="Faculty Team" icon="group" />;
      })()}

      {/* ── RESEARCH CENTERS (stub) ─────────────────────────── */}
      <StubSection title="Research Centers" icon="science" />

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section style={{ padding: "64px 0", borderTop: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 32, letterSpacing: "-0.025em", margin: "0 0 8px" }}>Interested in this faculty?</h2>
            <p style={{ fontSize: 16, color: "var(--kse-desc-light)", margin: 0 }}>Browse all programs or start your application.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("programs")}>View all programs</Button>
            <Button variant="secondary" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Apply</Button>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

/* ─── 5 page components ─────────────────────────────────────────────── */
function UniFacultyEngineering({ onNav, onCta })         { return <FacultyHubLayout facultyKey="engineering"          onNav={onNav} onCta={onCta} />; }
function UniFacultyComputerTech({ onNav, onCta })        { return <FacultyHubLayout facultyKey="computer-technologies" onNav={onNav} onCta={onCta} />; }
function UniFacultyMathematics({ onNav, onCta })         { return <FacultyHubLayout facultyKey="mathematics"          onNav={onNav} onCta={onCta} />; }
function UniFacultySocialSciences({ onNav, onCta })      { return <FacultyHubLayout facultyKey="social-sciences"      onNav={onNav} onCta={onCta} />; }
function UniFacultyEconomics({ onNav, onCta })           { return <FacultyHubLayout facultyKey="economics"            onNav={onNav} onCta={onCta} />; }

Object.assign(window, {
  UniFacultyEngineering, UniFacultyComputerTech, UniFacultyMathematics,
  UniFacultySocialSciences, UniFacultyEconomics,
});
