// KSE University — Contact Us page
// Route: #/contacts

(function () {

const CONTACT_DEPTS = [
  {
    icon: "school",
    title: "Admissions",
    desc: "Questions about applying, entry requirements, deadlines, and documents.",
    phone: "+38 073 248 69 76",
    email: "applyto@kse.org.ua",
    hours: "Mon–Fri, 9:00–18:00",
  },
  {
    icon: "swap_horiz",
    title: "Academic Mobility",
    desc: "Exchanges, dual degrees, and international programs.",
    phone: "+38 050 396 30 04",
    email: "mobility@kse.org.ua",
    hours: "Mon–Fri, 9:00–17:00",
  },
  {
    icon: "science",
    title: "Research Office",
    desc: "Collaborations, grants, publications, and research partnerships.",
    phone: null,
    email: "research@kse.org.ua",
    hours: "Mon–Fri, 10:00–17:00",
  },
  {
    icon: "campaign",
    title: "Press & Media",
    desc: "Media requests, interviews, and official statements.",
    phone: null,
    email: "press@kse.org.ua",
    hours: "Mon–Fri, 9:00–18:00",
  },
  {
    icon: "work",
    title: "Careers & HR",
    desc: "Open positions, faculty applications, and HR inquiries.",
    phone: null,
    email: "hr@kse.org.ua",
    hours: "Mon–Fri, 10:00–18:00",
  },
  {
    icon: "location_on",
    title: "Campus & Visits",
    desc: "Campus tours, visit requests, and directions.",
    phone: "+38 044 492 80 12",
    email: "visit@kse.org.ua",
    hours: "Mon–Sat, 9:00–19:00",
  },
];

function UniContactsPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Contact Us</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end", paddingTop: 32 }}>
            <div style={{ paddingBottom: 64 }}>
              <span className="tag tag--soft" style={{ display: "inline-block", marginBottom: 20 }}>Contact</span>
              <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
                fontSize: 60, lineHeight: 1.05, margin: "0 0 20px", maxWidth: "16ch" }}>
                We're here to help
              </h1>
              <p style={{ fontSize: 18, color: "var(--kse-desc-light)", margin: "0 0 12px",
                maxWidth: "44ch", lineHeight: 1.6 }}>
                Whether you have questions about admissions, research, or just want to learn more about KSE — reach out. We'll get back to you shortly.
              </p>
            </div>
            <div className="imgph" style={{ height: 380, borderRadius: "12px 12px 0 0", alignSelf: "flex-end" }}>
              <span className="imgph__lbl">KSE campus</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────── */}
      <section className="usec" style={{ paddingBottom: 0 }}>
        <div className="kse-shell">
          <div style={{
            background: "var(--kse-bg-dark-1)", borderRadius: 16,
            padding: "32px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32,
          }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
                letterSpacing: "-0.02em", color: "#fff", marginBottom: 6 }}>
                Not sure who to contact?
              </div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14,
                color: "rgba(255,255,255,0.55)", lineHeight: 1.5, maxWidth: "46ch" }}>
                Leave your question and we'll route it to the right person.
              </div>
            </div>
            <Button variant="light" icon="chat_bubble"
              onClick={() => window.dispatchEvent(new CustomEvent("kse:consult"))}>
              Send a message
            </Button>
          </div>
        </div>
      </section>

      {/* ── CONTACT CARDS ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase",
              color: "var(--kse-secondary)", marginBottom: 10 }}>Departments</div>
            <h2 className="usec__title">Contact by department</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {CONTACT_DEPTS.map(d => (
              <div key={d.title} style={{
                border: "1px solid var(--kse-border)", borderRadius: 14,
                padding: "28px 28px 24px", background: "#fff",
                display: "flex", flexDirection: "column",
              }}>
                <Icon name={d.icon} size={26} style={{ color: "var(--kse-accent)", marginBottom: 16 }} />
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 19,
                  letterSpacing: "-0.015em", color: "var(--kse-title-light)", marginBottom: 8 }}>
                  {d.title}
                </div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6,
                  margin: "0 0 20px", flex: 1 }}>
                  {d.desc}
                </p>
                <div style={{ borderTop: "1px solid var(--kse-border-soft)", paddingTop: 16,
                  display: "flex", flexDirection: "column", gap: 6 }}>
                  {d.phone && (
                    <a href={"tel:" + d.phone.replace(/\s/g, "")} style={{
                      display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                      fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600,
                      color: "var(--kse-title-light)",
                    }}>
                      <Icon name="phone" size={15} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
                      {d.phone}
                    </a>
                  )}
                  <a href={"mailto:" + d.email} style={{
                    display: "flex", alignItems: "center", gap: 8, textDecoration: "none",
                    fontFamily: "var(--kse-font-ui)", fontSize: 14,
                    color: "var(--kse-secondary)",
                  }}>
                    <Icon name="mail" size={15} style={{ flexShrink: 0 }} />
                    {d.email}
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: 8,
                    fontFamily: "var(--kse-font-ui)", fontSize: 13, color: "var(--kse-secondary)" }}>
                    <Icon name="schedule" size={15} style={{ flexShrink: 0 }} />
                    {d.hours}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

window.UniContactsPage = UniContactsPage;

})();
