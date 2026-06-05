// KSE hero — type-led on soft wash, unit chips below
function Hero({ onCta, units, activeUnit, setActiveUnit }) {
  return (
    <section id="top" style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
      <div className="kse-shell" style={{ paddingTop: 72, paddingBottom: 56 }}>
        <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.03em",
          fontSize: 64, lineHeight: 1.04, margin: 0, maxWidth: 760, textWrap: "balance" }}>
          KSE is an ecosystem of education, research, leadership and impact.
        </h1>
        <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
          <Button variant="accent" onClick={() => onCta("Apply")}>Apply</Button>
          <Button variant="secondary" onClick={() => onCta("Programs")}>Explore Programs</Button>
          <Button variant="ghost" onClick={() => onCta("Campus")}>Visit Campus</Button>
        </div>
        <div style={{ display: "flex", gap: 10, marginTop: 44, flexWrap: "wrap" }}>
          {units.map(u => (
            <Tag key={u} active={activeUnit === u} onClick={() => setActiveUnit(activeUnit === u ? null : u)}>{u}</Tag>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
