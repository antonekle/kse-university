// KSE University — News & events (news cards + events list)
const UNI_NEWS = [
  { t: "Engineering School launches AI lab",      d: "04.11.2026", tag: "Research" },
  { t: "Joint conference with EU universities",   d: "28.10.2026", tag: "Events" },
  { t: "New grant for master's students",         d: "21.10.2026", tag: "Admissions" },
];
const UNI_EVENTS = [
  { t: "Open Day: Bachelor programs",      d: "30.11", tag: "Open Day" },
  { t: "Seminar: AI systems security",     d: "05.12", tag: "Seminar" },
  { t: "Master programs presentation",     d: "10.12", tag: "Admissions" },
];
function UniNews({ onNav }) {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head">
          <div>
            <span className="usec__num">05</span>
            <h2 className="usec__title">News &amp; events</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); onNav("News"); }}>
            All news <Icon name="arrow_forward" size={18} />
          </a>
        </div>

        {/* ── News cards ─────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, marginBottom: 48 }}>
          {UNI_NEWS.map(n => (
            <div key={n.t} onClick={() => onNav("News")}
              style={{ background: "#fff", border: "1px solid var(--kse-border-soft)",
                borderRadius: 14, overflow: "hidden", cursor: "pointer",
                transition: "box-shadow .18s, transform .18s" }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
              <div className="imgph" style={{ height: 180 }}>
                <span className="imgph__lbl">NEWS IMAGE</span>
              </div>
              <div style={{ padding: "18px 20px 20px" }}>
                <span className="udeg" style={{ marginBottom: 10, display: "inline-block" }}>{n.tag}</span>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 17, fontWeight: 500,
                  letterSpacing: "-0.015em", lineHeight: 1.35, marginBottom: 12 }}>{n.t}</div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
                  fontWeight: 600, color: "var(--kse-secondary)" }}>{n.d}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Events list ────────────────────────────────────── */}
        <div className="eyebrow" style={{ marginBottom: 12 }}>Upcoming events</div>
        <div style={{ border: "1px solid var(--kse-border)", borderRadius: 12, overflow: "hidden" }}>
          {UNI_EVENTS.map((ev, i) => (
            <div key={ev.t} onClick={() => onNav("Events")}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 22px",
                borderBottom: i < UNI_EVENTS.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                background: "#fff", cursor: "pointer", transition: ".12s" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <span className="udeg" style={{ flexShrink: 0 }}>{ev.tag}</span>
              <span style={{ flex: 1, fontFamily: "var(--kse-font-sans)", fontSize: 16,
                fontWeight: 500, letterSpacing: "-0.01em" }}>{ev.t}</span>
              <span style={{ fontFamily: "monospace", fontSize: 13,
                color: "var(--kse-secondary)", whiteSpace: "nowrap" }}>{ev.d}</span>
              <Icon name="arrow_forward" size={16} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
        <div style={{ marginTop: 18 }}>
          <Button variant="secondary" size="sm" iconAfter="arrow_forward" onClick={() => onNav("Events")}>All events</Button>
        </div>

      </div>
    </section>
  );
}
Object.assign(window, { UniNews });

