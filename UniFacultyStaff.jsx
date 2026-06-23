// KSE University — Faculty & Instructional Staff wayfinding block (homepage)
const STAFF_WAYS = [
  { t: "Faculty directory",      s: "All instructors & professors",  route: "people" },
  // { t: "Research profiles",      s: "ORCID · Scopus · Scholar",      route: "publications" },
  // { t: "Faculties",            s: "Five academic units",            route: "faculties" },
  { t: "Open positions",         s: "Academic & research vacancies", route: "careers" },
];

function UniFacultyStaff({ onNav }) {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num"></span>
            <h2 className="usec__title">Faculty &amp; Instructional Staff</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
          {/* Left column — wayfinding rows */}
          <div>
            <div style={{ marginTop: 4 }}>
              {STAFF_WAYS.map(r => (
                <div key={r.t} className="uway" onClick={() => routeGo(r.route)} style={{ paddingLeft: 0 }}>
                  <div>
                    <div className="uway__t">{r.t}</div>
                    <div className="uway__s">{r.s}</div>
                  </div>
                  <Icon name="arrow_outward" size={18} style={{ color: "var(--kse-secondary)" }} />
                </div>
              ))}
            </div>
          </div>
          {/* Right column — image placeholder */}
          <div className="imgph" style={{ height: 320, borderRadius: 12 }}>
            <span className="imgph__lbl">Faculty</span>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniFacultyStaff });
