// KSE University — Research & people (wayfinding rows + profiles strip)
const RESEARCH = [
  { t: "Research areas", s: "Thematic groups" },
  { t: "Centers & labs", s: "Structural units" },
  { t: "Conferences", s: "Open to guests" },
  { t: "Publications / IDs", s: "ORCID · Scopus · WoS" },
];
const PEOPLE = [
  { n: "O. Petrenko",  r: "Dean, Engineering School",  bio: "Leads the Engineering School; research in applied systems and AI.",     faculty: "Engineering School",  facRoute: "faculties/engineering" },
  { n: "M. Kovalenko", r: "Professor of Economics",     bio: "Macroeconomics and policy; advisor on national reform programs.",       faculty: "Economics", facRoute: "faculties/economics" },
  { n: "V. Honcharuk", r: "Cybersecurity Lead",         bio: "Systems defense, AI security and applied cryptography.",                faculty: "Computer Technologies",        facRoute: "faculties/computer-technologies" },
  { n: "T. Bondar",    r: "Lab Director",               bio: "Director of the Delta Engineering Lab; dual-use research projects.",    faculty: "Engineering School",    facRoute: "faculties/engineering" },
];
function UniResearch({ onNav }) {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head" style={{ marginBottom: 24 }}>
          <div>
            <span className="usec__num">03</span>
            <h2 className="usec__title">Research</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
          {/* Left — list + button */}
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
              {RESEARCH.map((r, i) => (
                <div key={r.t} style={{
                  padding: "16px 0",
                  paddingRight: i % 2 === 0 ? 24 : 0,
                  borderTop: i < 2 ? "1px solid var(--kse-border-soft)" : "none",
                  borderBottom: "1px solid var(--kse-border-soft)",
                }}>
                  <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 17,
                    letterSpacing: "-0.01em", color: "var(--kse-title-light)" }}>{r.t}</div>
                  <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
                    color: "var(--kse-secondary)", marginTop: 2 }}>{r.s}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Button variant="secondary" iconAfter="arrow_forward" onClick={() => onNav("Research")}>Research hub</Button>
            </div>
          </div>
          {/* Right — image placeholder */}
          <div className="imgph" style={{ height: 320, borderRadius: 12 }}>
            <span className="imgph__lbl">Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniResearch });
