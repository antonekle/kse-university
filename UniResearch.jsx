// KSE University — Research & people (wayfinding rows + profiles strip)
const RESEARCH = [
  { t: "Research areas", s: "Thematic groups" },
  { t: "Centers & labs", s: "Structural units" },
  { t: "Conferences", s: "Open to guests" },
  { t: "Publications / IDs", s: "ORCID · Scopus · WoS" },
];
const PEOPLE = [
  { n: "O. Petrenko",  r: "Dean, Engineering School",  bio: "Leads the Engineering School; research in applied systems and AI.",     faculty: "Engineering School",  facRoute: "faculties/engineering-school" },
  { n: "M. Kovalenko", r: "Professor of Economics",     bio: "Macroeconomics and policy; advisor on national reform programs.",       faculty: "Economics & Business", facRoute: "faculties/economics" },
  { n: "V. Honcharuk", r: "Cybersecurity Lead",         bio: "Systems defense, AI security and applied cryptography.",                faculty: "Cybersecurity",        facRoute: "faculties/cybersecurity" },
  { n: "T. Bondar",    r: "Lab Director",               bio: "Director of the Delta Engineering Lab; dual-use research projects.",    faculty: "Delta Engineering",    facRoute: "faculties/delta-engineering" },
];
function UniResearch({ onNav }) {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num">03</span>
            <h2 className="usec__title">Research</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); onNav("Research"); }}>
            Research hub <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div className="uways">
          {RESEARCH.map(r => (
            <div key={r.t} className="uway" onClick={() => onNav("Research")}>
              <div>
                <div className="uway__t">{r.t}</div>
                <div className="uway__s">{r.s}</div>
              </div>
              <Icon name="arrow_outward" size={18} style={{ color: "var(--kse-secondary)" }} />
            </div>
          ))}
        </div>
        {false && <><div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 48, marginBottom: 18 }}>
          <h3 style={{ fontSize: 20, fontWeight: 500, letterSpacing: "-0.02em", margin: 0 }}>Faculty &amp; researchers</h3>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); onNav("People"); }}>
            All profiles <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {PEOPLE.map(p => (
            <div key={p.n} style={{ border: "1px solid var(--kse-border)", borderRadius: 12, overflow: "hidden", background: "#fff", cursor: "pointer" }}
              onClick={() => routeGo(p.facRoute)}>
              <div className="imgph" style={{ height: 200 }}>
                <span className="imgph__lbl">PORTRAIT</span>
              </div>
              <div style={{ padding: "18px 20px 20px" }}>
                <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.01em" }}>{p.n}</div>
                <div style={{ fontSize: 14, color: "var(--kse-accent)", marginTop: 3 }}>{p.r}</div>
                <p style={{ fontSize: 13, color: "var(--kse-desc-light)", marginTop: 10, lineHeight: 1.5 }}>{p.bio}</p>
                <div style={{ display: "flex", gap: 16, marginTop: 14, fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600 }}>
                  <a href="#" onClick={(e) => { e.stopPropagation(); e.preventDefault(); onNav("Publications"); }}
                    style={{ color: "var(--kse-accent)", display: "inline-flex", alignItems: "center", gap: 3 }}>
                    Publications <Icon name="arrow_outward" size={14} />
                  </a>
                  <a href="#" onClick={(e) => { e.stopPropagation(); e.preventDefault(); routeGo(p.facRoute); }}
                    style={{ color: "var(--kse-accent)", display: "inline-flex", alignItems: "center", gap: 3 }}>
                    {p.faculty} <Icon name="arrow_outward" size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div></>}
      </div>
    </section>
  );
}
Object.assign(window, { UniResearch });
