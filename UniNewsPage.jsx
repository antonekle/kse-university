// KSE University — /news full page (News & Events newsroom)
// Featured story + category-filtered news grid + upcoming events strip + subscribe CTA.

const NEWS_CATS = ["All", "Research", "Admissions", "Events", "Partnerships", "Community", "Awards"];

const FEATURED_NEWS = {
  cat: "Research",
  title: "Engineering School opens advanced AI & Robotics Lab",
  desc: "The new lab gives students and researchers hands-on access to robotics platforms, GPU compute and embedded systems — anchoring KSE's growing program in applied artificial intelligence and autonomous systems.",
  date: "04 November 2026",
  read: "4 min read",
};

const NEWS_ITEMS = [
  { cat: "Partnerships", title: "Joint research conference with EU universities announced", date: "28.10.2026",
    dek: "A two-day program bringing together faculty and partners from across Europe." },
  { cat: "Admissions", title: "New merit grant launched for master's students", date: "21.10.2026",
    dek: "Expanded financial support for the 2027 graduate intake." },
  { cat: "Awards", title: "KSE researcher receives national science award", date: "15.10.2026",
    dek: "Recognition for contributions to applied mathematics and modeling." },
  { cat: "Community", title: "Students launch volunteer reconstruction initiative", date: "08.10.2026",
    dek: "A student-led effort supporting recovery projects across the country." },
  { cat: "Research", title: "Mathematics faculty publishes in leading international journal", date: "30.09.2026",
    dek: "New results in algebraic number theory from the department." },
  { cat: "Events", title: "Annual Economics Forum returns this spring", date: "24.09.2026",
    dek: "Keynotes and panels on reconstruction and macroeconomic policy." },
  { cat: "Admissions", title: "Open Day draws record number of prospective students", date: "18.09.2026",
    dek: "Campus tours and faculty sessions across every program." },
  { cat: "Partnerships", title: "KSE signs memorandum with international technology firm", date: "10.09.2026",
    dek: "A new pathway for internships and applied projects." },
];

const NEWS_UPCOMING = [
  { day: "30", mon: "NOV", title: "Open Day: Bachelor Programs", cat: "Open Days", time: "11:00" },
  { day: "05", mon: "DEC", title: "Seminar: AI Systems Security", cat: "Seminars", time: "18:00" },
  { day: "10", mon: "DEC", title: "Master Programs Presentation", cat: "Admissions", time: "17:30" },
];

function UniNewsPage({ onNav, onCta }) {
  const [activeCat, setActiveCat] = React.useState("All");
  const list = activeCat === "All" ? NEWS_ITEMS : NEWS_ITEMS.filter(n => n.cat === activeCat);

  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">News &amp; Events</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Newsroom</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.04, margin: "16px 0 0", maxWidth: "16ch" }}>
            News &amp; Events
          </h1>
          <p style={{ fontSize: 19, color: "var(--kse-desc-light)", marginTop: 18, maxWidth: "52ch", lineHeight: 1.55 }}>
            Announcements, research stories and events from across KSE University — for students, applicants and the wider community.
          </p>
        </div>
      </section>

      {/* ── FEATURED STORY ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
            letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 16 }}>Featured</div>
          <div onClick={onCta} style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0,
            border: "1px solid var(--kse-border)", borderRadius: 16, overflow: "hidden", background: "#fff", cursor: "pointer" }}>
            <div className="imgph" style={{ minHeight: 340 }}>
              <span className="imgph__lbl">FEATURED IMAGE</span>
            </div>
            <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="udeg" style={{ alignSelf: "flex-start", marginBottom: 18 }}>{FEATURED_NEWS.cat}</span>
              <h2 style={{ fontFamily: "var(--kse-font-sans)", fontSize: 34, fontWeight: 500,
                letterSpacing: "-0.025em", lineHeight: 1.12, margin: 0 }}>{FEATURED_NEWS.title}</h2>
              <p style={{ fontSize: 16, color: "var(--kse-desc-light)", lineHeight: 1.6, margin: "16px 0 24px" }}>{FEATURED_NEWS.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28,
                fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600, color: "var(--kse-secondary)" }}>
                <span>{FEATURED_NEWS.date}</span>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--kse-border)" }}></span>
                <span>{FEATURED_NEWS.read}</span>
              </div>
              <Button variant="primary" iconAfter="arrow_forward" style={{ alignSelf: "flex-start" }} onClick={onCta}>Read story</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS (filterable grid) ────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 20 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Latest</div>
              <h2 className="usec__title">Latest news</h2>
            </div>
          </div>

          {/* category filter */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
            {NEWS_CATS.map(t => (
              <button key={t} onClick={() => setActiveCat(t)}
                style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                  padding: "9px 18px", borderRadius: 999, cursor: "pointer", transition: ".15s",
                  border: activeCat === t ? "1.5px solid #0D0D0D" : "1.5px solid var(--kse-border)",
                  background: activeCat === t ? "#0D0D0D" : "transparent",
                  color: activeCat === t ? "#fff" : "var(--kse-title-light)" }}>
                {t}
              </button>
            ))}
          </div>

          {list.length === 0 ? (
            <div style={{ border: "1px dashed var(--kse-border)", borderRadius: 14, padding: "48px",
              textAlign: "center", color: "var(--kse-secondary)", fontFamily: "var(--kse-font-ui)", fontSize: 15, background: "#fff" }}>
              No {activeCat.toLowerCase()} stories right now.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {list.map(n => (
                <div key={n.title} onClick={onCta}
                  style={{ background: "#fff", border: "1px solid var(--kse-border-soft)", borderRadius: 14,
                    overflow: "hidden", cursor: "pointer", display: "flex", flexDirection: "column",
                    transition: "box-shadow .18s, transform .18s" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                  <div className="imgph" style={{ height: 168 }}>
                    <span className="imgph__lbl">NEWS IMAGE</span>
                  </div>
                  <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <span className="udeg" style={{ marginBottom: 12, display: "inline-block", alignSelf: "flex-start" }}>{n.cat}</span>
                    <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 17, fontWeight: 500,
                      letterSpacing: "-0.015em", lineHeight: 1.35, marginBottom: 10 }}>{n.title}</div>
                    <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.55, margin: "0 0 16px", flex: 1 }}>{n.dek}</p>
                    <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600, color: "var(--kse-secondary)" }}>{n.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── UPCOMING EVENTS STRIP ────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Calendar</div>
              <h2 className="usec__title">Upcoming events</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("events"); }}>
              All events <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
            {NEWS_UPCOMING.map((ev, i) => (
              <div key={ev.title} onClick={() => routeGo("events")}
                style={{ display: "flex", alignItems: "center", gap: 24, padding: "18px 24px",
                  borderBottom: i < NEWS_UPCOMING.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  cursor: "pointer", transition: ".12s" }}
                onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <div style={{ flexShrink: 0, width: 62, height: 62, borderRadius: 12,
                  border: "1px solid var(--kse-border)", display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", background: "var(--kse-bg-light-2)" }}>
                  <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 24, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{ev.day}</span>
                  <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "var(--kse-secondary)", marginTop: 3 }}>{ev.mon}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <span className="udeg" style={{ marginBottom: 6, display: "inline-block" }}>{ev.cat}</span>
                  <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{ev.title}</div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 20 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 14, color: "var(--kse-title-light)" }}>{ev.time}</span>
                  <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-secondary)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ────────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div style={{ background: "var(--kse-primary, #0C0D37)", borderRadius: 18, padding: "48px 52px",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: "44ch" }}>
              <h2 style={{ fontFamily: "var(--kse-font-sans)", fontSize: 30, fontWeight: 500,
                letterSpacing: "-0.025em", color: "#fff", margin: 0, lineHeight: 1.15 }}>Stay in the loop</h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.72)", lineHeight: 1.6, margin: "12px 0 0" }}>
                Get KSE news and event highlights delivered to your inbox each month.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" icon="mail" style={{ background: "#fff", color: "#0D0D0D" }} onClick={onCta}>Subscribe</Button>
              <Button variant="secondary" iconAfter="arrow_forward" style={{ borderColor: "rgba(255,255,255,.4)", color: "#fff", background: "transparent" }} onClick={() => routeGo("events")}>Browse events</Button>
            </div>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniNewsPage });
