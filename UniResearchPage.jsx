// KSE University — /research full page
const RESEARCH_TAGS = [
  "Economics", "AI & ML", "Public Policy", "Cybersecurity",
  "Applied Mathematics", "Sociology", "Engineering", "Data Science",
];

const CENTERS = [
  { name: "AI Lab",                      faculty: "Engineering School",        desc: "Applied artificial intelligence, machine learning systems and defense AI." },
  { name: "Macroeconomic Research Center",faculty: "Economics",      desc: "Policy-relevant macroeconomic modeling and national economic analysis." },
  { name: "Public Policy Lab",           faculty: "Social Sciences",                 desc: "Governance research, behavioral economics and post-war reconstruction." },
  { name: "Delta Engineering Lab",       faculty: "Engineering School",         desc: "Dual-use engineering research; UAV systems and applied defense technologies." },
];

const PROJECTS = [
  { title: "National Recovery Modeling", lab: "Macroeconomic Research Center", partners: "World Bank · IMF", timeline: "2025–2027" },
  { title: "Autonomous Systems Security", lab: "AI Lab",                       partners: "DARPA collaborative", timeline: "2024–2026" },
  { title: "Urban Resilience Index",      lab: "Public Policy Lab",            partners: "EU Horizon",         timeline: "2025–2026" },
  { title: "Next-gen UAV Guidance",       lab: "Delta Engineering Lab",        partners: "Ministry of Defense", timeline: "2025–2028" },
];

const CONFERENCES = [
  { name: "KSE Annual Economics Forum",     date: "15–16 April 2026", tag: "Economics" },
  { name: "AI & Security Symposium",        date: "3 June 2026",      tag: "AI · Security" },
  { name: "Post-War Reconstruction Summit", date: "18 September 2026", tag: "Policy" },
];

const RESEARCHERS = [
  { n: "O. Petrenko",  r: "Dean, Engineering School", route: "faculties/engineering" },
  { n: "M. Kovalenko", r: "Professor of Economics",   route: "faculties/economics" },
  { n: "V. Honcharuk", r: "Cybersecurity Lead",       route: "faculties/computer-technologies" },
  { n: "T. Bondar",    r: "Lab Director",             route: "faculties/engineering" },
];

function UniResearchPage({ onNav, onCta }) {
  const [activeTag, setActiveTag] = React.useState(null);

  return (
    <div>
      <UniNav active="Research" onNav={onNav} onCta={onCta} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Research</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Research</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.04, margin: "16px 0 0", maxWidth: "16ch" }}>
            Research Hub
          </h1>
          <p style={{ fontSize: 19, color: "var(--kse-desc-light)", marginTop: 18, maxWidth: "50ch", lineHeight: 1.55 }}>
            Research areas, centers and labs of KSE University.
          </p>
        </div>
      </section>

      {/* ── RESEARCH AREAS ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Areas</div>
              <h2 className="usec__title">Research areas</h2>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {RESEARCH_TAGS.map(t => (
              <button key={t} onClick={() => setActiveTag(activeTag === t ? null : t)}
                style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                  padding: "10px 20px", borderRadius: 999, cursor: "pointer", transition: ".15s",
                  border: activeTag === t ? "1.5px solid #0D0D0D" : "1.5px solid var(--kse-border)",
                  background: activeTag === t ? "#0D0D0D" : "transparent",
                  color: activeTag === t ? "#fff" : "var(--kse-title-light)" }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENTERS & LABS ───────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Units</div>
              <h2 className="usec__title">Centers &amp; labs</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {CENTERS.map(c => (
              <div key={c.name} style={{ background: "#fff", border: "1px solid var(--kse-border-soft)",
                borderRadius: 14, padding: "26px 28px" }}>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)",
                  marginBottom: 10 }}>{c.faculty}</div>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 21, fontWeight: 500,
                  letterSpacing: "-0.015em", marginBottom: 12 }}>{c.name}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED PROJECTS ────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Projects</div>
              <h2 className="usec__title">Selected projects</h2>
            </div>
          </div>
          <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden" }}>
            {PROJECTS.map((p, i) => (
              <div key={p.title} style={{ display: "grid",
                gridTemplateColumns: "1fr 200px 180px 120px",
                alignItems: "center", gap: 24, padding: "20px 28px",
                borderBottom: i < PROJECTS.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                background: i % 2 === 1 ? "var(--kse-bg-light-2)" : "#fff" }}>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 16, fontWeight: 500,
                  letterSpacing: "-0.01em" }}>{p.title}</div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12,
                  color: "var(--kse-secondary)" }}>{p.lab}</div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12,
                  color: "var(--kse-secondary)" }}>{p.partners}</div>
                <div style={{ fontFamily: "monospace", fontSize: 13,
                  color: "var(--kse-secondary)", textAlign: "right" }}>{p.timeline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFERENCES ──────────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Events</div>
              <h2 className="usec__title">Conferences</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("events"); }}>
              All events <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0,
            border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden" }}>
            {CONFERENCES.map((c, i) => (
              <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 20,
                padding: "20px 28px",
                borderBottom: i < CONFERENCES.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                background: "#fff", cursor: "pointer", transition: ".12s" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
                onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                onClick={() => routeGo("events")}>
                <span className="udeg" style={{ flexShrink: 0 }}>{c.tag}</span>
                <span style={{ flex: 1, fontFamily: "var(--kse-font-sans)", fontSize: 17,
                  fontWeight: 500, letterSpacing: "-0.01em" }}>{c.name}</span>
                <span style={{ fontFamily: "monospace", fontSize: 13,
                  color: "var(--kse-secondary)", whiteSpace: "nowrap" }}>{c.date}</span>
                <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCHERS ──────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>People</div>
              <h2 className="usec__title">Researchers</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("people"); }}>
              All profiles <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {RESEARCHERS.map(p => (
              <div key={p.n} onClick={() => routeGo(p.route)}
                style={{ border: "1px solid var(--kse-border)", borderRadius: 12,
                  overflow: "hidden", background: "#fff", cursor: "pointer" }}>
                <div className="imgph" style={{ height: 200 }}>
                  <span className="imgph__lbl">PORTRAIT</span>
                </div>
                <div style={{ padding: "16px 18px 18px" }}>
                  <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{p.n}</div>
                  <div style={{ fontSize: 13, color: "var(--kse-secondary)", marginTop: 4 }}>{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUBLICATIONS ─────────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Output</div>
              <h2 className="usec__title">Publications</h2>
            </div>
          </div>
          <div style={{ border: "1px dashed var(--kse-border)", borderRadius: 14,
            padding: "48px 36px", display: "flex", alignItems: "center", gap: 24,
            background: "#fff" }}>
            <Icon name="link" size={32} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 18, fontWeight: 500,
                letterSpacing: "-0.015em" }}>ORCID · Scopus · Google Scholar integration</div>
              <p style={{ fontSize: 14, color: "var(--kse-desc-light)", margin: "8px 0 0", lineHeight: 1.6 }}>
                Publication records for KSE researchers will be pulled from ORCID, Scopus and Google Scholar profiles. This section will list papers, reports and working papers with filters by author, faculty and year.
              </p>
            </div>
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".06em", padding: "5px 12px", borderRadius: 999,
              background: "oklch(95% .04 70)", color: "oklch(42% .14 70)",
              whiteSpace: "nowrap", flexShrink: 0 }}>V1 Should</span>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniResearchPage });
