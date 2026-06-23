// KSE University — Admissions Hub (full-page, self-contained)
// Uses shared UniNav + UniFooter; routed via #/admissions

/* ── Section label helper ─────────────────────────────────── */
function SLabel({ children }) {
  return (
    <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
      letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)",
      marginBottom: 10 }}>
      {children}
    </div>
  );
}

/* ── Accordion item ───────────────────────────────────────── */
function AccItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderTop: "1px solid var(--kse-border)" }}>
      <button onClick={onToggle}
        style={{ width: "100%", background: "none", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 16, padding: "20px 0", textAlign: "left" }}>
        <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 18, fontWeight: 500,
          letterSpacing: "-0.01em", color: "var(--kse-title-light)" }}>{q}</span>
        <span style={{ flexShrink: 0, transition: "transform .22s",
          transform: open ? "rotate(45deg)" : "none", color: "var(--kse-secondary)" }}>
          <Icon name="add" size={22} />
        </span>
      </button>
      <div style={{ overflow: "hidden", maxHeight: open ? 300 : 0,
        transition: "max-height .28s ease", }}>
        <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--kse-desc-light)",
          margin: "0 0 20px", maxWidth: 680 }}>{a}</p>
      </div>
    </div>
  );
}

/* ── Main component ───────────────────────────────────────── */
function UniAdmissionsHub({ onNav, onCta }) {
  const [faqOpen, setFaqOpen] = React.useState(null);

  const levels = [
    { id: "bachelor", label: "Bachelor", desc: "For school graduates.", link: "Admissions details", route: "programs/bachelor" },
    { id: "master",   label: "Master",   desc: "For bachelor's graduates.", link: "Admissions details", route: "programs/master" },
    { id: "phd",      label: "PhD",      desc: "For the research track.", link: "Admissions details", route: "programs/phd" },
    { id: "short",    label: "Short",    desc: "Registration via external system.", link: "Catalog", route: "programs/short-courses" },
  ];

  const funding = [
    {
      icon: "stars",
      title: "Grants & scholarships",
      body: "Merit-based grants cover up to 100% of tuition for top-ranked applicants. Need-based financial aid is available regardless of program level — applications reviewed on a rolling basis.",
    },
    {
      icon: "receipt_long",
      title: "Tuition fees",
      body: "Tuition is set per program and reviewed annually. Bachelor programs start from ₴58 000/year; Master programs from ₴72 000/year. Exact figures are published with each admissions campaign.",
    },
    {
      icon: "calendar_month",
      title: "Installments & support",
      body: "Tuition may be split into two or four payments per academic year. KSE partners with two Ukrainian banks for educational loans with preferential rates for enrolled students.",
    },
  ];

  const deadlines = [
    { level: "Bachelor", range: "01.07.2026 — 25.07.2026", color: "var(--kse-accent)" },
    { level: "Master",   range: "01.06.2026 — 20.07.2026", color: "var(--kse-accent)" },
    { level: "PhD",      range: "01.04.2026 — 30.06.2026", color: "var(--kse-accent)" },
  ];

  const docs = [
    { name: "School / university diploma",   req: true,  note: "All levels" },
    { name: "External testing certificates", req: true,  note: "NMT for Bachelor" },
    { name: "Motivation letter",             req: true,  note: "All levels" },
    { name: "CV",                            req: true,  note: "Master & PhD" },
    { name: "Recommendation letters",        req: false, note: "PhD only" },
  ];

  const faqs = [
    {
      q: "What are the admission requirements?",
      a: "Requirements vary by program. Generally you need a relevant diploma or school certificate, standardized test scores (NMT for Bachelor; GPA transcript for Master/PhD), a motivation letter, and a CV. PhD applicants also submit two academic recommendation letters and a research proposal.",
    },
    {
      q: "How do I submit documents?",
      a: "Documents can be uploaded through the online application portal at university.kse.ua/apply. Originals can also be submitted in person at the admissions office on the Kyiv campus. Scanned copies are accepted during the application window; originals are verified at enrolment.",
    },
    {
      q: "Are grants available?",
      a: "Yes. KSE offers extensive merit-based grants funded by the KSE Foundation and external partners. Grant amounts range from 25% to full tuition waiver. A separate grant application is included in the admissions form — no additional application is required.",
    },
    {
      q: "When are results announced?",
      a: "Admission decisions are published within two weeks after each program's application window closes. Applicants receive an email notification and can check status in the personal applicant portal at any time.",
    },
  ];

  /* ── Breadcrumb ─────────────────────────────────────── */
  const Crumb = () => (
    <nav className="crumbs" style={{ paddingTop: 28 }}>
      <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
      <span className="crumbs__sep">/</span>
      <span className="crumbs__here">Admissions</span>
    </nav>
  );

  return (
    <div>
      <UniNav active="Admissions" onNav={onNav} onCta={onCta} />

      {/* ══ 1. HERO ═════════════════════════════════════════════ */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <Crumb />
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 24 }}>
            <span className="tag tag--soft">Admissions</span>
            <span className="tag tag--soft" style={{ background: "oklch(95% .04 70)", color: "oklch(42% .14 70)",
              border: "none" }}>V1 Must</span>
          </div>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: 18 + "ch" }}>
            Admissions Hub
          </h1>
          <p style={{ fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: 52 + "ch", lineHeight: 1.5 }}>
            Requirements, documents, deadlines and grants — one place for every applicant.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("programs")}>Browse programs</Button>
            <Button variant="secondary" onClick={() => onNav("Contacts")}>Contact admissions</Button>
          </div>
        </div>
      </section>

      {/* ══ 2. APPLICATION LEVELS ════════════════════════════════ */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head">
            <div>
              <SLabel>Choose level</SLabel>
              <h2 className="usec__title">Where are you applying</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {levels.map(l => (
              <div key={l.id} onClick={() => routeGo(l.route)}
                style={{ border: "1px solid var(--kse-border)", borderRadius: 14, padding: "28px 24px",
                  cursor: "pointer", display: "flex", flexDirection: "column", gap: 0,
                  transition: "box-shadow .18s, transform .18s", background: "#fff" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <span className="udeg" style={{ alignSelf: "flex-start", marginBottom: 20 }}>{l.label.toUpperCase()}</span>
                <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em",
                  fontFamily: "var(--kse-font-sans)" }}>{l.label}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", marginTop: 8, flex: 1, lineHeight: 1.5 }}>
                  {l.desc}
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 20,
                  fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                  color: "var(--kse-secondary)" }}>
                  {l.link} <Icon name="arrow_forward" size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. FUNDING ══════════════════════════════════════════ */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head">
            <div>
              <SLabel>Funding</SLabel>
              <h2 className="usec__title">Grants, scholarships and tuition</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {funding.map(f => (
              <div key={f.title}
                style={{ background: "#fff", border: "1px solid var(--kse-border-soft)",
                  borderRadius: 14, padding: "28px 28px 30px" }}>
                <Icon name={f.icon} size={26} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
                  letterSpacing: "-0.015em", margin: "14px 0 10px" }}>{f.title}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: 0 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. DEADLINES ════════════════════════════════════════ */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head">
            <div>
              <SLabel>Dates</SLabel>
              <h2 className="usec__title">2026 admissions campaign deadlines</h2>
            </div>
          </div>
          <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden" }}>
            {deadlines.map((d, i) => (
              <div key={d.level}
                style={{ display: "grid", gridTemplateColumns: "160px 1fr auto",
                  alignItems: "center", gap: 24, padding: "22px 28px",
                  borderBottom: i < deadlines.length - 1 ? "1px solid var(--kse-border)" : "none",
                  background: i % 2 === 1 ? "var(--kse-bg-light-2)" : "#fff" }}>
                <span className="udeg" style={{ alignSelf: "center", justifySelf: "start" }}>
                  {d.level.toUpperCase()}
                </span>
                <span style={{ fontFamily: "monospace", fontSize: 17, fontWeight: 500,
                  letterSpacing: ".01em", color: "var(--kse-title-light)" }}>
                  {d.range}
                </span>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 600,
                  color: "var(--kse-secondary)" }}>Open</span>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, color: "var(--kse-secondary)",
            marginTop: 14 }}>
            Exact dates may shift; check the official admissions calendar before applying.
          </p>
        </div>
      </section>

      {/* ══ 5. DOCUMENTS ════════════════════════════════════════ */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head">
            <div>
              <SLabel>Documents</SLabel>
              <h2 className="usec__title">Required documents</h2>
            </div>
          </div>
          <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden" }}>
            {docs.map((d, i) => (
              <div key={d.name}
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 24px",
                  borderBottom: i < docs.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  background: "#fff" }}>
                <Icon name={d.req ? "description" : "description"} size={20}
                  style={{ color: d.req ? "var(--kse-accent)" : "var(--kse-secondary)", flexShrink: 0 }} />
                <span style={{ flex: 1, fontSize: 16, fontWeight: 500,
                  fontFamily: "var(--kse-font-sans)", letterSpacing: "-0.01em" }}>{d.name}</span>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12,
                  color: "var(--kse-secondary)", minWidth: 80, textAlign: "right" }}>{d.note}</span>
                <span style={{
                  fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".04em", padding: "4px 10px", borderRadius: 999,
                  background: d.req ? "oklch(95% .04 25)" : "var(--kse-bg-light-2)",
                  color: d.req ? "oklch(48% .14 25)" : "var(--kse-secondary)",
                }}>
                  {d.req ? "REQUIRED" : "OPTIONAL"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. FAQ ══════════════════════════════════════════════ */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 8 }}>
            <div>
              <SLabel>FAQ</SLabel>
              <h2 className="usec__title">Frequently asked questions</h2>
            </div>
          </div>
          <div style={{ maxWidth: 780 }}>
            {faqs.map((f, i) => (
              <AccItem key={i} q={f.q} a={f.a}
                open={faqOpen === i}
                onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
            <div style={{ borderTop: "1px solid var(--kse-border)" }} />
          </div>
        </div>
      </section>

      {/* ══ 7. CTA BANNER ═══════════════════════════════════════ */}
      <section style={{ background: "var(--kse-accent-band)", padding: "72px 0" }}>
        <div className="kse-shell">
          <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
            letterSpacing: "-0.03em", fontSize: 42, color: "#fff", margin: "0 0 32px" }}>
            Contact the admissions office
          </h2>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={() => onCta("Apply")}
              style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 8, cursor: "pointer",
                background: "#fff", color: "var(--kse-accent-band)", border: "none",
                display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = ".9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
              Apply now <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-accent)" }} />
            </button>
            <button onClick={() => onNav("Contact Us")}
              style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 8, cursor: "pointer",
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.32)",
                display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"}>
              Contact admissions <Icon name="arrow_forward" size={18} style={{ color: "var(--kse-accent)" }} />
            </button>
            <button onClick={() => onNav("Events")}
              style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
                padding: "14px 28px", borderRadius: 8, cursor: "pointer",
                background: "transparent", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.32)",
                display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"}>
              Open days <Icon name="arrow_forward" size={18} />
            </button>
          </div>
        </div>
      </section>

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}
Object.assign(window, { UniAdmissionsHub });
