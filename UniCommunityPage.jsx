// KSE University — /community full page
const COMMUNITY_CARDS = [
  { icon: "groups",         title: "Student life",         desc: "Campus clubs, cultural initiatives, sports and the everyday life of KSE students.", route: "community" },
  { icon: "favorite",       title: "Clubs & initiatives",  desc: "Student-run organizations spanning debate, entrepreneurship, arts, tech and civic engagement.", route: "community" },
  { icon: "support_agent",  title: "Student support",      desc: "Psychological counseling, academic advising and financial assistance programs for enrolled students.", route: "resources" },
  { icon: "auto_stories",   title: "Student stories",      desc: "First-person accounts from current students — why they chose KSE and what their experience is like.", route: "community" },
  { icon: "diversity_3",    title: "Alumni",               desc: "A growing network of KSE graduates working across Ukraine and internationally.", route: "community" },
  { icon: "event",          title: "Community events",     desc: "Open lectures, hackathons, film screenings, policy salons and inter-university events.", route: "events" },
  { icon: "work",           title: "Career support",       desc: "Career center, internship matching, employer partnerships and graduate employment data.", route: "community" },
];

function UniCommunityPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active="Community" onNav={onNav} onCta={onCta} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Community</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Community</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.04, margin: "16px 0 0", maxWidth: "18ch" }}>
            Community &amp; Student Life
          </h1>
          <p style={{ fontSize: 19, color: "var(--kse-desc-light)", marginTop: 18,
            maxWidth: "50ch", lineHeight: 1.55 }}>
            The University as a living academic community.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" onClick={() => routeGo("resources")}>Student resources</Button>
            <Button variant="secondary" onClick={() => routeGo("events")}>Events calendar</Button>
          </div>
        </div>
      </section>

      {/* ── SECTION CARDS ────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Explore</div>
              <h2 className="usec__title">Life at KSE</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {COMMUNITY_CARDS.map((c, i) => (
              <div key={c.title} onClick={() => routeGo(c.route)}
                style={{ border: "1px solid var(--kse-border-soft)", borderRadius: 14,
                  padding: "26px 26px 24px", cursor: "pointer", background: "#fff",
                  transition: "box-shadow .18s, transform .18s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <Icon name={c.icon} size={26} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 20, fontWeight: 500,
                  letterSpacing: "-0.015em", margin: "14px 0 10px" }}>{c.title}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: "0 0 18px" }}>{c.desc}</p>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                  color: "var(--kse-secondary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Learn more <Icon name="arrow_forward" size={15} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI TEASER ────────────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 12 }}>Alumni</div>
              <h2 className="usec__title" style={{ marginBottom: 16 }}>A network that stays</h2>
              <p style={{ fontSize: 16, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: "0 0 24px" }}>
                KSE graduates work at leading institutions, startups and public bodies across Ukraine and internationally. The alumni network is a resource — for career connections, mentorship and community.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".06em", padding: "5px 12px", borderRadius: 999,
                  background: "oklch(94% .04 250)", color: "oklch(42% .12 250)" }}>V1 Should</span>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
                  color: "var(--kse-secondary)" }}>Full alumni section coming in next version</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {["Alumni story", "Alumni story", "Alumni story", "Alumni story"].map((l, i) => (
                <div key={i} className="imgph" style={{ height: 160 }}>
                  <span className="imgph__lbl">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ROW ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-accent-band)", padding: "60px 0" }}>
        <div className="kse-shell" style={{ display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
            letterSpacing: "-0.03em", fontSize: 36, color: "#fff", margin: 0 }}>
            Join the KSE community
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => routeGo("resources")}
              style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "13px 26px", borderRadius: 8, cursor: "pointer",
                background: "#fff", color: "var(--kse-accent-band)", border: "none",
                display: "inline-flex", alignItems: "center", gap: 8 }}>
              Student resources <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-accent)" }} />
            </button>
            <button onClick={() => routeGo("events")}
              style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "13px 26px", borderRadius: 8, cursor: "pointer",
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.32)",
                display: "inline-flex", alignItems: "center", gap: 8 }}>
              Events calendar <Icon name="arrow_forward" size={18} />
            </button>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniCommunityPage });
