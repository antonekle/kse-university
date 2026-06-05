// KSE University — /grants-aid full page (Grants & Scholarships)
// Route: #/grants-aid

const MAIN_GRANTS = [
  {
    id: "olympians",
    title: "Program to Support Olympians",
    who: "Winners of all-Ukrainian STEM Olympiads (grades 11, 2024–2025)",
    covers: "Full tuition",
    coversBadge: "100% tuition",
    route: "grants/olympians-support",
    advice: false,
    applyHref: "https://forms.zohopublic.eu/",
  },
  {
    id: "financial-aid",
    title: "Financial Aid",
    who: "Defenders of Ukraine and their families, IDPs, residents of temporarily occupied territories (from Feb 24, 2022)",
    covers: "Full tuition + part of colliving accommodation",
    coversBadge: "Tuition + housing",
    route: "grants/financial-aid",
    advice: true,
    applyHref: "https://forms.zohopublic.eu/",
  },
  {
    id: "academic",
    title: "Academic Grants",
    who: "High NMT/YeVI scores, competition and tournament winners",
    covers: "Full tuition + part of colliving accommodation",
    coversBadge: "Tuition + housing",
    route: "grants/academic-grants",
    advice: true,
    applyHref: "https://forms.zohopublic.eu/",
  },
  {
    id: "come-back",
    title: "Come Back Home",
    who: "Those forced abroad after Feb 24, 2022 who wish to return to study in Ukraine",
    covers: "Full tuition + part of colliving accommodation",
    coversBadge: "Tuition + housing",
    route: "grants/come-back-home",
    advice: true,
    applyHref: "https://forms.zohopublic.eu/",
  },
];

const MEMORIAL_SCHOLARSHIPS = [
  {
    id: "chopiyuk",
    title: "Ruslan Chopyuk Memorial Scholarship",
    programs: "All undergraduate programs (years 2–4)",
    who: "KSE students",
    route: "grants/memorial-chopiyuk",
  },
  {
    id: "tsybukh",
    title: "Iryna Tsybukh Memorial Scholarship",
    programs: "Memory Studies, Urban Studies, Social Psychology, Public Policy",
    who: "KSE students",
    route: "grants/memorial-tsybukh",
  },
  {
    id: "batoh",
    title: "Yar Batoh Memorial Scholarship",
    programs: "Memory Studies, Urban Studies, Social Psychology, Public Policy, Economic Analysis, Business and Finance Economics",
    who: "KSE students",
    route: "grants/memorial-batoh",
  },
];

/* ─── Grant Card ─────────────────────────────────────────────────────── */
function GrantCard({ grant }) {
  return (
    <div style={{
      border: "1px solid var(--kse-border)", borderRadius: 16,
      background: "#fff", display: "flex", flexDirection: "column",
      overflow: "hidden",
      transition: "box-shadow .18s, transform .18s",
    }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>

      {/* Illustration placeholder */}
      <div className="imgph" style={{ height: 160, borderRadius: 0, flexShrink: 0 }}>
        <span className="imgph__lbl">{grant.title}</span>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 26px 22px", display: "flex", flexDirection: "column", flex: 1, gap: 0 }}>

        {/* Coverage badge */}
        <span style={{
          fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
          letterSpacing: ".05em", padding: "4px 11px", borderRadius: 999,
          background: "oklch(95% .04 145)", color: "oklch(36% .13 145)",
          alignSelf: "flex-start", marginBottom: 14,
        }}>{grant.coversBadge}</span>

        <h3 style={{
          fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
          letterSpacing: "-0.015em", margin: "0 0 16px", color: "var(--kse-title-light)",
          lineHeight: 1.25,
        }}>{grant.title}</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, marginBottom: 22 }}>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{
              fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
              color: "var(--kse-secondary)", minWidth: 52, paddingTop: 1,
            }}>Who</span>
            <span style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6 }}>{grant.who}</span>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{
              fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
              color: "var(--kse-secondary)", minWidth: 52, paddingTop: 1,
            }}>Covers</span>
            <span style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6 }}>{grant.covers}</span>
          </div>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button onClick={() => routeGo(grant.route)}
            style={{
              fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
              padding: "9px 16px", borderRadius: 8, cursor: "pointer",
              background: "var(--kse-title-light)", color: "#fff", border: "none",
              display: "inline-flex", alignItems: "center", gap: 6, transition: ".15s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            More details <Icon name="arrow_forward" size={14} />
          </button>
          {grant.advice && (
            <button onClick={() => routeGo("contacts")}
              style={{
                fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                padding: "9px 16px", borderRadius: 8, cursor: "pointer",
                background: "transparent", color: "var(--kse-title-light)",
                border: "1.5px solid var(--kse-border)", transition: ".15s",
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--kse-title-light)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--kse-border)"}>
              Get advice
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─── Memorial Scholarship Card ──────────────────────────────────────── */
function MemorialCard({ scholarship }) {
  return (
    <div style={{
      border: "1px solid var(--kse-border-soft)", borderRadius: 14,
      background: "#fff", padding: "24px 26px 22px",
      display: "flex", flexDirection: "column", gap: 0,
      transition: "box-shadow .15s",
    }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>

      <div style={{
        width: 36, height: 36, borderRadius: "50%", marginBottom: 18,
        background: "oklch(92% .03 30)", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name="workspace_premium" size={20} style={{ color: "oklch(50% .12 30)" }} />
      </div>

      <h3 style={{
        fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 18,
        letterSpacing: "-0.015em", margin: "0 0 14px", color: "var(--kse-title-light)",
        lineHeight: 1.3,
      }}>{scholarship.title}</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{
            fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
            color: "var(--kse-secondary)", minWidth: 60, paddingTop: 1,
          }}>Programs</span>
          <span style={{ fontSize: 13, color: "var(--kse-desc-light)", lineHeight: 1.6 }}>{scholarship.programs}</span>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <span style={{
            fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
            color: "var(--kse-secondary)", minWidth: 60, paddingTop: 1,
          }}>Who</span>
          <span style={{ fontSize: 13, color: "var(--kse-desc-light)", lineHeight: 1.6 }}>{scholarship.who}</span>
        </div>
      </div>

      <a href="#" onClick={(e) => { e.preventDefault(); routeGo(scholarship.route); }}
        style={{
          fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
          color: "var(--kse-secondary)", display: "inline-flex", alignItems: "center", gap: 5,
          textDecoration: "none", transition: ".15s",
        }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--kse-title-light)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--kse-secondary)"}>
        More details <Icon name="arrow_forward" size={14} />
      </a>
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────────────────── */
function UniGrantsAid({ onNav, onCta }) {
  return (
    <div>
      <UniNav active="Grants & Aid" onNav={onNav} onCta={onCta} />

      {/* ══ HERO ═════════════════════════════════════════════════ */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Grants &amp; Scholarships</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Funding</span>
          <h1 style={{
            fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "20ch",
          }}>
            Grants &amp; Financial Support
          </h1>

          {/* Quote */}
          <figure style={{ margin: "28px 0 0", padding: "22px 28px",
            borderLeft: "3px solid var(--kse-accent)", background: "#fff",
            borderRadius: "0 12px 12px 0", maxWidth: "56ch" }}>
            <blockquote style={{
              fontFamily: "var(--kse-font-sans)", fontSize: 17, fontWeight: 400,
              lineHeight: 1.6, color: "var(--kse-title-light)",
              margin: 0, fontStyle: "italic", letterSpacing: "-0.01em",
            }}>
              "The future of Ukraine is people. If future generations do not have quality education, then there is no future Ukraine."
            </blockquote>
            <figcaption style={{
              fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
              color: "var(--kse-secondary)", marginTop: 12,
            }}>
              Tymofiy Mylovanov, President of KSE
            </figcaption>
          </figure>

          <div style={{ marginTop: 32 }}>
            <a href="https://forms.zohopublic.eu/" target="_blank" rel="noopener noreferrer"
              style={{
                fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "13px 26px", borderRadius: 8, cursor: "pointer",
                background: "var(--kse-accent)", color: "#fff", border: "none",
                display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none",
                transition: ".15s",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              Apply for a Grant <Icon name="open_in_new" size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ══ MAIN GRANTS ══════════════════════════════════════════ */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Grant programs
              </div>
              <h2 className="usec__title">Available Grants</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {MAIN_GRANTS.map(g => <GrantCard key={g.id} grant={g} />)}
          </div>
        </div>
      </section>

      {/* ══ MEMORIAL SCHOLARSHIPS ════════════════════════════════ */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                In memoriam
              </div>
              <h2 className="usec__title">Memorial Scholarships</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {MEMORIAL_SCHOLARSHIPS.map(s => <MemorialCard key={s.id} scholarship={s} />)}
          </div>
        </div>
      </section>

      {/* ══ CONTACT BLOCK ════════════════════════════════════════ */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{
            border: "1px solid var(--kse-border)", borderRadius: 16,
            padding: "36px 40px", background: "#fff",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
          }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 14 }}>
                Admission
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <a href="tel:+380732486976"
                  style={{ fontFamily: "var(--kse-font-sans)", fontSize: 20, fontWeight: 500,
                    letterSpacing: "-0.01em", color: "var(--kse-title-light)", textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
                  onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                  <Icon name="phone" size={18} style={{ color: "var(--kse-secondary)" }} />
                  +38 073 248 69 76
                </a>
                <a href="mailto:apply@kse.org.ua"
                  style={{ fontFamily: "var(--kse-font-ui)", fontSize: 15, fontWeight: 500,
                    color: "var(--kse-secondary)", textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--kse-title-light)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--kse-secondary)"}>
                  <Icon name="mail" size={16} />
                  apply@kse.org.ua
                </a>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 14 }}>
                Other questions
              </div>
              <a href="tel:+380503963004"
                style={{ fontFamily: "var(--kse-font-sans)", fontSize: 20, fontWeight: 500,
                  letterSpacing: "-0.01em", color: "var(--kse-title-light)", textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
                onMouseEnter={e => e.currentTarget.style.opacity = ".7"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                <Icon name="phone" size={18} style={{ color: "var(--kse-secondary)" }} />
                +38 050 396 30 04
              </a>
            </div>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniGrantsAid });
