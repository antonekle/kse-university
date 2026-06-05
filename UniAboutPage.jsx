// KSE University — /about full page
function UniAboutPage({ onNav, onCta }) {
  const structure = [
    {
      icon: "account_balance",
      title: "Academic structure",
      sub: "Faculties & schools",
      desc: "Five faculties spanning engineering, economics, mathematics, sociology, cybersecurity and defense engineering — each with its own academic council and research profile.",
      link: "Faculties & Schools", route: "faculties",
    },
    {
      icon: "school",
      title: "Programs",
      sub: "BA · MA · PhD · Short",
      desc: "21 degree programs and a growing portfolio of professional short courses, designed to combine rigorous academic foundations with applied skills.",
      link: "Academic Programs", route: "programs",
    },
    {
      icon: "science",
      title: "Research",
      sub: "Centers, labs, conferences",
      desc: "Research centers and interdisciplinary labs produce policy-relevant and scientific output, partnering with universities and institutions in Ukraine and abroad.",
      link: "Research Hub", route: "research",
    },
  ];

  const links = [
    { label: "Faculties & Schools", route: "faculties", icon: "account_balance" },
    { label: "Research",            route: "research",  icon: "science" },
    { label: "Community",           route: "community", icon: "groups" },
    { label: "Contacts",            route: "contacts",  icon: "mail" },
  ];

  return (
    <div>
      <UniNav active="About" onNav={onNav} onCta={onCta} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">About</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>About</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.04, margin: "16px 0 0", maxWidth: "20ch" }}>
            KSE University as an academic institution
          </h1>
          <p style={{ fontSize: 19, color: "var(--kse-desc-light)", marginTop: 18,
            maxWidth: "56ch", lineHeight: 1.55 }}>
            The University as a complete academic ecosystem: faculties, programs, research, people and community.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Mission</div>
              <h2 className="usec__title">Who we are</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--kse-title-light)", margin: 0 }}>
                KSE University is a research-intensive academic institution in Kyiv, Ukraine. It combines world-class education with applied research to train the economists, engineers, policy-makers and technologists who will shape Ukraine's future.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--kse-desc-light)", marginTop: 20 }}>
                The University operates five faculties, offers 21 degree programs at bachelor, master and doctoral level, and runs a portfolio of professional short courses and executive education. Research is embedded in every program — not separate from it.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { n: "2003", l: "Year founded" },
                { n: "21+", l: "Degree programs" },
                { n: "6", l: "Faculties & schools" },
                { n: "1 200+", l: "Current students" },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", alignItems: "baseline", gap: 18,
                  padding: "18px 24px", border: "1px solid var(--kse-border-soft)",
                  borderRadius: 12, background: "#fff" }}>
                  <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 40, fontWeight: 500,
                    letterSpacing: "-0.03em", minWidth: 90 }}>{s.n}</span>
                  <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14,
                    color: "var(--kse-secondary)" }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE ARE ORGANIZED ─────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Structure</div>
              <h2 className="usec__title">How the University is organized</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
            {structure.map(s => (
              <div key={s.title} onClick={() => routeGo(s.route)}
                style={{ background: "#fff", border: "1px solid var(--kse-border-soft)", borderRadius: 14,
                  padding: "28px 28px 26px", cursor: "pointer", transition: "box-shadow .18s" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
                <Icon name={s.icon} size={26} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)",
                  marginTop: 16, marginBottom: 6 }}>{s.sub}</div>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 22, fontWeight: 500,
                  letterSpacing: "-0.018em", marginBottom: 12 }}>{s.title}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: "0 0 20px" }}>{s.desc}</p>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                  color: "var(--kse-secondary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {s.link} <Icon name="arrow_forward" size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LINKS ROW ────────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <h2 className="usec__title" style={{ marginBottom: 32 }}>Explore the University</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
            {links.map(l => (
              <div key={l.label} onClick={() => routeGo(l.route)}
                style={{ border: "1px solid var(--kse-border)", borderRadius: 12, padding: "22px 22px",
                  cursor: "pointer", display: "flex", flexDirection: "column", gap: 14, transition: ".15s" }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--kse-bg-light-2)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#fff"; }}>
                <Icon name={l.icon} size={22} style={{ color: "var(--kse-secondary)" }} />
                <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 18, fontWeight: 500,
                  letterSpacing: "-0.015em", flex: 1 }}>{l.label}</span>
                <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-secondary)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniAboutPage });
