// Life at KSE — community block
const LIFE_LINKS = ["Student clubs & initiatives", "Veteran Office", "Accessibility & inclusion",
  "Student support", "Alumni & community", "Community events"];
function LifeAtKSE({ onItem }) {
  return (
    <section style={{ background: "var(--kse-bg-light-2)" }}>
      <div className="kse-shell section" style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: 56, alignItems: "start" }}>
        <div>
          <h2 className="h-sec">Life at KSE</h2>
          <p className="lead" style={{ margin: "16px 0 28px" }}>
            Student clubs, veteran support, alumni network and community events — all part of the KSE experience.
          </p>
          <Button variant="secondary" iconAfter="arrow_outward" onClick={() => onItem("Explore community")}>Explore community</Button>
        </div>
        <div>
          {LIFE_LINKS.map(l => (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); onItem(l); }}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
                fontFamily: "var(--kse-font-sans)", fontSize: 18, padding: "16px 0",
                borderBottom: "1px solid #E6E6EA", transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.paddingLeft = "6px"}
              onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}>
              {l}<Icon name="arrow_outward" size={20} style={{ color: "var(--kse-secondary)" }} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { LifeAtKSE });
