// KSE University — Mobility teaser strip (homepage, above news)
function UniMobilityStrip() {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <h2 className="usec__title">Academic Mobility</h2>
          </div>
          <a href="#/mobility" className="usec__link">
            All mobility programs <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 56, alignItems: "start" }}>
          {/* Left column */}
          <div>
            <div style={{
              fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 72, letterSpacing: "-0.05em",
              color: "var(--kse-title-light)", lineHeight: 1, marginBottom: 16,
            }}>100+</div>
            <p className="lead" style={{ fontSize: 18, margin: "0 0 28px", maxWidth: "40ch" }}>
              KSE students study at top universities in Europe and the US every year — semester exchanges, dual degrees, summer schools.
            </p>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("mobility")}>
              Explore Mobility
            </Button>
          </div>
          {/* Right column — image placeholder */}
          <div className="imgph" style={{ height: 320, borderRadius: 12 }}>
            <span className="imgph__lbl">Students abroad</span>
          </div>
        </div>
      </div>
    </section>
  );
}
window.UniMobilityStrip = UniMobilityStrip;
