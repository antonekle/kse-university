// KSE University — Admissions & programs (the approved block), KSE-styled
const PROGRAMS = [
  { lvl: "Bachelor",     meta: "4 years · foundation",        route: "programs/bachelor" },
  { lvl: "Master",       meta: "14-22 months · specialization",  route: "programs/master" },
  { lvl: "PhD",          meta: "Doctoral research programs",   route: "programs/phd" },
  { lvl: "Short Courses",meta: "For professionals",            route: "programs/short-courses" },
];
function UniAdmissions({ onNav, onConsult }) {
  return (
    <section className="usec" style={{ borderTop: "none" }}>
      <div className="kse-shell">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end", marginBottom: 40 }}>
          <div>
            <span className="usec__num">01</span>
            <h2 className="usec__title">Admissions</h2>
            <p className="lead" style={{ marginTop: 14, maxWidth: 420 }}>
              Requirements, deadlines, documents, and grants for every program.
            </p>
            <div className="qlinks" style={{ marginTop: 22 }}>
              <span className="qlink" onClick={() => onNav("Admissions")}>Admissions hub</span>
              <span className="qlink" onClick={() => onNav("Grants & Aid")}>Grants &amp; aid</span>
              <span className="qlink" onClick={() => onNav("Programs")}>All programs</span>
            </div>
          </div>
          <div style={{
              border: "1px solid var(--kse-border)", borderRadius: 14,
              padding: "28px 32px", background: "var(--kse-bg-light-2)",
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
            }}>
            <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 88, lineHeight: 1, letterSpacing: "-0.04em" }}>21+</div>
            <p className="lead" style={{ fontSize: 15, marginTop: 10, maxWidth: 280 }}>
              programs — BA, MA, PhD and short courses across five faculties.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 20 }}>
          {PROGRAMS.map(p => (
            <div key={p.lvl} onClick={() => routeGo(p.route)}
              style={{ border: "1px solid var(--kse-border)", borderRadius: 12, padding: 22, cursor: "pointer",
                display: "flex", flexDirection: "column", minHeight: 150, transition: "box-shadow .18s ease" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.lvl}</div>
              <div className="lead" style={{ fontSize: 14, marginTop: 8, flex: 1 }}>{p.meta}</div>
              <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Explore <Icon name="arrow_forward" size={16} />
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center",
          margin: "20px 0", border: "1px solid var(--kse-border)", borderRadius: 16,
          padding: "32px 36px", background: "#fff" }}>
          <div>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Mobility</div>
            <h3 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 28,
              letterSpacing: "-0.025em", margin: "0 0 4px", color: "var(--kse-title-light)" }}>
              Academic Mobility
            </h3>
            <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 64, letterSpacing: "-0.05em", color: "var(--kse-title-light)", lineHeight: 1, margin: "8px 0 14px" }}>
              100+
            </div>
            <p className="lead" style={{ fontSize: 15, margin: "0 0 24px", maxWidth: "38ch" }}>
              KSE students study at top universities in Europe and the US every year — exchanges, dual degrees, summer schools.
            </p>
            <Button variant="secondary" iconAfter="arrow_forward" onClick={() => routeGo("mobility")}>
              Explore Mobility
            </Button>
          </div>
          <div className="imgph" style={{ height: 260, borderRadius: 10 }}>
            <span className="imgph__lbl">Students abroad</span>
          </div>
        </div>
        {false && <div style={{ marginTop: 20, background: "var(--kse-accent-band)", borderRadius: 16, padding: "30px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Not sure where to start?</div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, marginTop: 6 }}>Tell us about your goals — we'll help you find the right program.</div>
          </div>
          <Button variant="light" icon="chat_bubble" onClick={onConsult}>Get a consultation</Button>
        </div>}
      </div>
    </section>
  );
}
Object.assign(window, { UniAdmissions });
