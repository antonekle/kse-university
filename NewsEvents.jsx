// News (2x2 cards) + Events (list)
const NEWS = [
  { date: "May 14, 2026", title: "KSE launches new MA in Public Policy" },
  { date: "May 12, 2026", title: "Partnership with European policy network" },
  { date: "May 09, 2026", title: "KSE Institute publishes macro outlook" },
  { date: "May 02, 2026", title: "ProfTech opens spring course catalogue" },
];
const EVENTS = [
  { title: "Open Day — University & GBS", date: "May 14, 2026", unit: "University / GBS", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
  { title: "ProfTech info session", date: "May 16, 2026", unit: "ProfTech", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
  { title: "Research briefing: macro outlook", date: "May 18, 2026", unit: "Institute", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
  { title: "Guest lecture: behavioural economics", date: "May 21, 2026", unit: "University", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
  { title: "Alumni networking evening", date: "May 24, 2026", unit: "Community", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
  { title: "GBS executive open class", date: "May 28, 2026", unit: "GBS", place: "KSE Dragon Capital Building, Kyiv, Shpaka str. 3" },
];

function NewsCard({ item, onClick }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(item.title); }}
      style={{ display: "block", borderRadius: 12, overflow: "hidden", transition: "transform .18s ease" }}
      onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
      onMouseLeave={e => e.currentTarget.style.transform = "none"}>
      <div style={{ height: 150, background: "var(--kse-placeholder)" }}></div>
      <div style={{ padding: "14px 2px 0" }}>
        <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, color: "var(--kse-secondary)" }}>{item.date}</div>
        <div style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.3, marginTop: 5, letterSpacing: "-0.01em" }}>{item.title}</div>
      </div>
    </a>
  );
}

function EventRow({ item, onClick }) {
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick(item.title); }}
      style={{ display: "flex", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--kse-border-soft)",
        alignItems: "flex-start", transition: ".15s" }}
      onMouseEnter={e => e.currentTarget.style.background = "#FAFAFC"}
      onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em" }}>{item.title}</div>
      </div>
      <div style={{ flex: "0 0 220px", textAlign: "right", fontFamily: "var(--kse-font-ui)" }}>
        <div style={{ fontSize: 13, fontWeight: 600 }}>{item.date} · <span style={{ color: "var(--kse-secondary)" }}>{item.unit}</span></div>
        <div style={{ fontSize: 12, color: "var(--kse-secondary)", marginTop: 3, lineHeight: 1.4 }}>{item.place}</div>
      </div>
    </a>
  );
}

function NewsEvents({ onItem, onMore }) {
  return (
    <section className="section">
      <div className="kse-shell" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
        <div>
          <h2 className="h-sec" style={{ marginBottom: 24 }}>News</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {NEWS.map(n => <NewsCard key={n.title} item={n} onClick={onItem} />)}
          </div>
          <div style={{ marginTop: 28 }}>
            <Button variant="secondary" iconAfter="arrow_forward" onClick={() => onMore("News")}>More news</Button>
          </div>
        </div>
        <div>
          <h2 className="h-sec" style={{ marginBottom: 8 }}>Events</h2>
          <div>
            {EVENTS.map(ev => <EventRow key={ev.title} item={ev} onClick={onItem} />)}
          </div>
          <div style={{ marginTop: 24 }}>
            <Button variant="secondary" iconAfter="arrow_forward" onClick={() => onMore("Events")}>More events</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { NewsEvents });
