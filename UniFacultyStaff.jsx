// KSE University — Faculty & Instructional Staff wayfinding block (homepage)
const STAFF_WAYS = [
  { t: "Faculty directory",      s: "All instructors & professors",  route: "people" },
  { t: "Research profiles",      s: "ORCID · Scopus · Scholar",      route: "publications" },
  { t: "Faculties & schools",    s: "Five academic units",            route: "faculties" },
  { t: "Open positions",         s: "Academic & research vacancies", route: "contacts" },
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
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("people"); }}>
            All profiles <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div className="uways">
          {STAFF_WAYS.map(r => (
            <div key={r.t} className="uway" onClick={() => routeGo(r.route)}>
              <div>
                <div className="uway__t">{r.t}</div>
                <div className="uway__s">{r.s}</div>
              </div>
              <Icon name="arrow_outward" size={18} style={{ color: "var(--kse-secondary)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniFacultyStaff });
