// KSE University — Life at KSE (community links + campus image band)
const COMMUNITY = [
  // { t: "Clubs & initiatives", s: "Student organizations" },
  // { t: "Student support", s: "Psychological, academic, financial" },
  // { t: "Alumni", s: "Alumni community · student stories" },
];
const CAMPUS_IMGS = ["Campus", "Auditorium", "Student space", "Events"];
function UniLife({ onNav }) {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num">04</span>
            <h2 className="usec__title">Campus life</h2>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
          <div>
            <p className="lead" style={{ fontSize: 18, marginTop: 0, marginBottom: 8 }}>
              Student clubs, support, alumni network and campus events — all part of the KSE University experience.
            </p>
            <div style={{ marginTop: 18 }}>
              {COMMUNITY.map(c => (
                <div key={c.t} className="uway" onClick={() => onNav("Community")} style={{ paddingLeft: 0 }}>
                  <div>
                    <div className="uway__t">{c.t}</div>
                    <div className="uway__s">{c.s}</div>
                  </div>
                  <Icon name="arrow_outward" size={18} style={{ color: "var(--kse-secondary)" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
              <Button variant="primary" iconAfter="arrow_forward" onClick={() => onNav("Community")}>Community</Button>
              <Button variant="secondary" onClick={() => onNav("Visit Campus")}>Visit campus</Button>
              <Button variant="secondary" onClick={() => onNav("Open Days")}>Open days</Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "180px 180px", gap: 14 }}>
            {CAMPUS_IMGS.map(c => (
              <div key={c} className="imgph"><span className="imgph__lbl">{c}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniLife });
