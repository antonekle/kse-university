// KSE University — /events full page
const EVENT_CATS = ["All", "Open Days", "Lectures", "Conferences", "Seminars", "Admissions", "Workshops"];

const FEATURED_EVENT = {
  cat: "Conference",
  title: "KSE Annual Economics Forum 2026",
  desc: "Two days of keynotes and panels on post-war reconstruction, macroeconomic policy and the future of Ukraine's economy — with faculty, government and international partners.",
  date: "15–16 April 2026",
  time: "09:30 – 18:00",
  place: "KSE Campus, Kyiv · Hybrid",
};

const UPCOMING = [
  { day: "30", mon: "NOV", title: "Open Day: Bachelor Programs",        cat: "Open Days",   format: "On campus", place: "Main Hall, KSE Campus", time: "11:00" },
  { day: "05", mon: "DEC", title: "Seminar: AI Systems Security",       cat: "Seminars",    format: "Online",    place: "Zoom webinar",          time: "18:00" },
  { day: "10", mon: "DEC", title: "Master Programs Presentation",       cat: "Admissions",  format: "On campus", place: "Room 312, KSE Campus",  time: "17:30" },
  { day: "12", mon: "DEC", title: "Public Lecture: Reconstruction Economics", cat: "Lectures", format: "Hybrid", place: "Auditorium A · Online", time: "16:00" },
  { day: "18", mon: "DEC", title: "Workshop: Data Science for Policy",  cat: "Workshops",   format: "On campus", place: "Computer Lab 2",        time: "14:00" },
  { day: "22", mon: "JAN", title: "AI & Security Symposium",            cat: "Conferences", format: "Hybrid",    place: "KSE Campus · Online",   time: "10:00" },
  { day: "04", mon: "FEB", title: "Open Day: Faculties Showcase",       cat: "Open Days",   format: "On campus", place: "Main Hall, KSE Campus", time: "12:00" },
];

const FORMATS = [
  { icon: "school",      name: "Open Days",        desc: "Tour the campus, meet faculty and current students, and explore programs across every faculty." },
  { icon: "podium",      name: "Public Lectures",  desc: "Open talks from KSE professors and visiting scholars on economics, policy and technology." },
  { icon: "groups",      name: "Research Seminars",desc: "Working seminars where researchers present and discuss ongoing projects and findings." },
  { icon: "handshake",   name: "Career Fairs",     desc: "Connect with employers and partners hiring KSE students and graduates." },
];

function UniEventsPage({ onNav, onCta }) {
  const [activeCat, setActiveCat] = React.useState("All");
  const list = activeCat === "All" ? UPCOMING : UPCOMING.filter(e => e.cat === activeCat);

  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Events</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Events</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.04, margin: "16px 0 0", maxWidth: "16ch" }}>
            What's on at KSE
          </h1>
          <p style={{ fontSize: 19, color: "var(--kse-desc-light)", marginTop: 18, maxWidth: "52ch", lineHeight: 1.55 }}>
            Lectures, conferences, open days and seminars — open to students, applicants and the wider community.
          </p>
        </div>
      </section>

      {/* ── FILTER ───────────────────────────────────────────────── */}
      <section className="usec" style={{ paddingBottom: 0 }}>
        <div className="kse-shell">
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {EVENT_CATS.map(t => (
              <button key={t} onClick={() => setActiveCat(t)}
                style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                  padding: "10px 20px", borderRadius: 999, cursor: "pointer", transition: ".15s",
                  border: activeCat === t ? "1.5px solid #0D0D0D" : "1.5px solid var(--kse-border)",
                  background: activeCat === t ? "#0D0D0D" : "transparent",
                  color: activeCat === t ? "#fff" : "var(--kse-title-light)" }}>
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED EVENT ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
            letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 16 }}>Featured</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0,
            border: "1px solid var(--kse-border)", borderRadius: 16, overflow: "hidden", background: "#fff" }}>
            <div className="imgph" style={{ minHeight: 340 }}>
              <span className="imgph__lbl">EVENT IMAGE</span>
            </div>
            <div style={{ padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span className="udeg" style={{ alignSelf: "flex-start", marginBottom: 18 }}>{FEATURED_EVENT.cat}</span>
              <h2 style={{ fontFamily: "var(--kse-font-sans)", fontSize: 34, fontWeight: 500,
                letterSpacing: "-0.025em", lineHeight: 1.12, margin: 0 }}>{FEATURED_EVENT.title}</h2>
              <p style={{ fontSize: 16, color: "var(--kse-desc-light)", lineHeight: 1.6, margin: "16px 0 24px" }}>{FEATURED_EVENT.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--kse-font-ui)", fontSize: 14, color: "var(--kse-title-light)" }}>
                  <Icon name="calendar_month" size={18} style={{ color: "var(--kse-secondary)" }} />{FEATURED_EVENT.date}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--kse-font-ui)", fontSize: 14, color: "var(--kse-title-light)" }}>
                  <Icon name="schedule" size={18} style={{ color: "var(--kse-secondary)" }} />{FEATURED_EVENT.time}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--kse-font-ui)", fontSize: 14, color: "var(--kse-title-light)" }}>
                  <Icon name="location_on" size={18} style={{ color: "var(--kse-secondary)" }} />{FEATURED_EVENT.place}</div>
              </div>
              <Button variant="primary" iconAfter="arrow_forward" style={{ alignSelf: "flex-start" }} onClick={onCta}>Register</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Calendar</div>
              <h2 className="usec__title">Upcoming events</h2>
            </div>
          </div>
          {list.length === 0 ? (
            <div style={{ border: "1px dashed var(--kse-border)", borderRadius: 14, padding: "48px",
              textAlign: "center", color: "var(--kse-secondary)", fontFamily: "var(--kse-font-ui)", fontSize: 15, background: "#fff" }}>
              No {activeCat.toLowerCase()} scheduled right now.
            </div>
          ) : (
            <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
              {list.map((ev, i) => (
                <div key={ev.title + i} style={{ display: "flex", alignItems: "center", gap: 24, padding: "18px 24px",
                  borderBottom: i < list.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  cursor: "pointer", transition: ".12s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  onClick={onCta}>
                  {/* date block */}
                  <div style={{ flexShrink: 0, width: 62, height: 62, borderRadius: 12,
                    border: "1px solid var(--kse-border)", display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center", background: "var(--kse-bg-light-2)" }}>
                    <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 24, fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em" }}>{ev.day}</span>
                    <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", color: "var(--kse-secondary)", marginTop: 3 }}>{ev.mon}</span>
                  </div>
                  {/* main */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                      <span className="udeg">{ev.cat}</span>
                      <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 600, color: "var(--kse-secondary)" }}>{ev.format}</span>
                    </div>
                    <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{ev.title}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontFamily: "var(--kse-font-ui)", fontSize: 13, color: "var(--kse-secondary)" }}>
                      <Icon name="location_on" size={15} />{ev.place}
                    </div>
                  </div>
                  {/* time + cta */}
                  <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: 20 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 14, color: "var(--kse-title-light)" }}>{ev.time}</span>
                    <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-secondary)" }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── EVENT FORMATS ────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 28 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Formats</div>
              <h2 className="usec__title">Recurring formats</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
            {FORMATS.map(f => (
              <div key={f.name} style={{ background: "#fff", border: "1px solid var(--kse-border-soft)",
                borderRadius: 14, padding: "26px 28px", display: "flex", gap: 18 }}>
                <div style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 11,
                  background: "var(--kse-bg-light-2)", border: "1px solid var(--kse-border-soft)",
                  display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={f.icon} size={22} style={{ color: "var(--kse-secondary)" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 19, fontWeight: 500,
                    letterSpacing: "-0.015em", marginBottom: 8 }}>{f.name}</div>
                  <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
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
                letterSpacing: "-0.025em", color: "#fff", margin: 0, lineHeight: 1.15 }}>Never miss an event</h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,.72)", lineHeight: 1.6, margin: "12px 0 0" }}>
                Subscribe to the KSE events calendar or get monthly highlights straight to your inbox.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button variant="primary" icon="calendar_add_on" style={{ background: "#fff", color: "#0D0D0D" }} onClick={onCta}>Add to calendar</Button>
              <Button variant="secondary" iconAfter="arrow_forward" style={{ borderColor: "rgba(255,255,255,.4)", color: "#fff", background: "transparent" }} onClick={onCta}>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniEventsPage });
