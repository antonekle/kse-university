// KSE University — hero (full-bleed placeholder image, overlay content at bottom-left, white quick-nav bar)
function UniHero({ onNav, onCta }) {
  const quick = [
    { label: "Engineering School",   to: "faculties/engineering-school" },
    { label: "Computer Technologies", to: "faculties/computer-technologies" },
    { label: "Mathematics",           to: "faculties/mathematics" },
    { label: "Social Sciences",       to: "faculties/sociology" },
    { label: "Economics",             to: "faculties/economics" },
  ];

  const sectionStyle = {
    background: "#fff",
    borderBottom: "none",
  };

  const cardStyle = {
    position: "relative",
    background: "var(--kse-bg-light-2)",
    backgroundImage: [
      "repeating-linear-gradient(45deg, transparent, transparent 18px,",
      "rgba(0,0,0,.028) 18px, rgba(0,0,0,.028) 19px)",
    ].join(" "),
    borderRadius: 16,
    border: "1px solid var(--kse-border-soft)",
    overflow: "hidden",
    minHeight: 520,
    display: "flex",
    flexDirection: "column",
    padding: "32px 36px 36px",
  };

  return (
    <section id="top" style={sectionStyle}>
      <div className="kse-shell" style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div style={cardStyle}>

        {/* ── Top row: FEATURED tag + date ────────────────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="tag tag--active"
            style={{ cursor: "default", borderRadius: 6, fontSize: 11, letterSpacing: ".06em", padding: "5px 12px" }}>
            FEATURED
          </span>
          <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
            color: "var(--kse-secondary)" }}>12.11.2026</span>
        </div>

        {/* ── Image placeholder label — centred in the open area ──────── */}
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 160, pointerEvents: "none" }}>
          <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 600,
            letterSpacing: ".12em", color: "var(--kse-secondary)", textTransform: "uppercase" }}>
            Image placeholder
          </span>
        </div>

        {/* ── Bottom-left content block ────────────────────────────────── */}
        <div style={{ maxWidth: 620 }}>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
            letterSpacing: "-0.03em", fontSize: 56, lineHeight: 1.05, margin: 0,
            textWrap: "balance" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("News"); }}
              style={{ color: "inherit", textDecoration: "underline",
                textDecorationThickness: "1.5px", textUnderlineOffset: "5px" }}>
              Engineering Week at KSE University
            </a>
          </h1>
          <p className="lead" style={{ fontSize: 17, marginTop: 16, maxWidth: 480 }}>
            Five days of open lectures, lab demos and meetings with Engineering School students.{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); onNav("News"); }}
              style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                color: "var(--kse-secondary)", textDecoration: "none" }}>
              more →
            </a>
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
            <Button variant="accent" onClick={() => onCta("Apply")}>Apply</Button>
            <Button variant="secondary" onClick={() => onNav("Research")}>Research</Button>
            <Button variant="secondary" onClick={() => onNav("Community")}>Campus life</Button>
          </div>
        </div>

        </div>
      </div>

      {/* ── White quick-nav bar ──────────────────────────────────────── */}
      <div className="kse-shell">
        <div style={{ display: "flex", gap: 36, paddingTop: 15, paddingBottom: 15, alignItems: "center",
          borderBottom: "1px solid var(--kse-border-soft)" }}>
          {quick.map(q => (
            <a key={q.label} href="#"
              onClick={(e) => { e.preventDefault(); routeGo(q.to); }}
              style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                color: "var(--kse-title-light)", display: "inline-flex",
                alignItems: "center", gap: 6, transition: "gap .15s" }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "6px"}>
              <Icon name="arrow_outward" size={14}
                style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
              {q.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { UniHero });
