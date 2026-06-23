// KSE University — Academic Mobility page
// Route: #/mobility

(function () {

/* ═══════════════════════════════ DATA ═══════════════════════════════════ */

const PARTNER_REGIONS = [
  {
    region: "Americas",
    countries: [
      { country: "Canada",  institutions: ["University of Toronto — Munk School of Global Affairs and Public Policy"] },
      { country: "USA",     institutions: ["Harvard University (Davis Center)", "UMass Amherst", "MIT", "Olin College of Engineering", "Brown University", "University of Connecticut", "University of Pittsburgh", "George Washington University", "UChicago — Harris School", "University of Houston", "UC San Diego"] },
      { country: "Mexico",  institutions: ["ITAM"] },
    ],
  },
  {
    region: "Europe",
    countries: [
      { country: "United Kingdom", institutions: ["London School of Economics", "King's College London"] },
      { country: "Netherlands",    institutions: ["VU Amsterdam"] },
      { country: "Germany",        institutions: ["European University Viadrina"] },
      { country: "Switzerland",    institutions: ["ETH Zurich"] },
      { country: "France",         institutions: ["Sciences Po"] },
      { country: "Sweden",         institutions: ["Stockholm School of Economics"] },
      { country: "Estonia",        institutions: ["University of Tartu"] },
      { country: "Poland",         institutions: ["SWPS University", "Warsaw School of Economics SGH"] },
      { country: "Czech Republic", institutions: ["NYU Prague"] },
      { country: "Italy",          institutions: ["Bocconi University"] },
    ],
  },
];

const MOBILITY_TYPES = [
  { icon: "school",         title: "Dual diploma",           desc: "Opportunity to obtain a diploma abroad through partner university programs." },
  { icon: "swap_horiz",     title: "Semester exchange",      desc: "Spend one or two semesters at a top partner university worldwide." },
  { icon: "wb_sunny",       title: "Short-term programs",    desc: "Summer and winter schools, programs with low ECTS credit load." },
  { icon: "emoji_events",   title: "Academic competitions",  desc: "International olympiads and academic competitions worldwide." },
];

const DUAL_DEGREES = [
  {
    name: "University of Houston",
    country: "USA",
    rank: "ARWU top 300",
    desc: "One of the best research universities in the United States, ranked in the ARWU top 300. Available for bachelor's and master's programs in economics and finance.",
    programs: ["BA Business Economics", "BA Economics and Big Data", "MA Economic Analysis", "MA Business & Finance Economics"],
  },
  {
    name: "University of Chicago — Harris School of Public Policy",
    country: "USA",
    rank: "Top 10 in Public Policy (US)",
    desc: "Ranked top 10 in public policy in the United States. Students of the master's program Public Policy and Governance can obtain a dual diploma.",
    programs: ["MA Public Policy and Governance"],
  },
  {
    name: "University of Toronto — Munk School",
    country: "Canada",
    rank: "Top 20 globally",
    desc: "Top 20 globally for education and research quality. Trains future leaders in international politics, economics, and governance.",
    programs: ["MA Public Policy and Governance"],
  },
];

const EXCHANGE_PROGRAMS = [
  {
    name: "University of Massachusetts",
    country: "USA",
    stat: "27th among US public universities (U.S. News).",
    subjects: ["Humanities", "Social Sciences", "Business Economics"],
  },
  {
    name: "University of Connecticut",
    country: "USA",
    stat: "Leading American university known for academic freedom and an interdisciplinary approach.",
    subjects: ["Business"],
  },
];

const APPLY_STEPS = [
  { n: "01", title: "Fill out the form",    desc: "Complete the program participation form online." },
  { n: "02", title: "Upload documents",     desc: "Prepare and upload all required documents to your application." },
  { n: "03", title: "Interview",            desc: "Attend an interview with the KSE selection committee." },
  { n: "04", title: "Selection",            desc: "The committee determines the final list of participants." },
];

const REQUIREMENTS = [
  { label: "GPA",                 detail: "Not lower than 86 for the entire period of study" },
  { label: "No academic debt",    detail: "Prior to departure from KSE" },
  { label: "English proficiency", detail: "KSE internal score ≥ 91, or IELTS ≥ 6.5 / TOEFL iBT ≥ 95 / Duolingo ≥ 120 / BULATS ≥ 70" },
  { label: "Academic integrity",  detail: "No violations during studies (with exception for resolved cases per the Code of Academic Integrity)" },
  { label: "Full document set",   detail: "Complete set of required application documents" },
  { label: "Host requirements",   detail: "Compliance with the host university's additional requirements" },
  { label: "Leadership",          detail: "Demonstrated leadership qualities and active social/community engagement" },
  { label: "KSE ambassador",      detail: "Willingness to represent KSE during the mobility period" },
];

const DOCUMENTS = [
  "CV (resume)",
  "Motivation letter (in English)",
  "Foreign language proficiency certificate (if available)",
  "List of subjects to study at the host university, aligned with the KSE curriculum",
];

/* ═══════════════════════════ COMPONENT ══════════════════════════════════ */

function UniMobilityPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Academic Mobility</span>
          </nav>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end", paddingTop: 32 }}>
            <div style={{ paddingBottom: 64 }}>
              <span className="tag tag--soft" style={{ display: "inline-block", marginBottom: 20 }}>Mobility</span>
              <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
                fontSize: 60, lineHeight: 1.05, margin: "0 0 20px", maxWidth: "18ch" }}>
                KSE Academic Mobility
              </h1>
              <p style={{ fontSize: 20, color: "var(--kse-desc-light)", margin: "0 0 32px",
                maxWidth: "44ch", lineHeight: 1.5 }}>
                Gain new knowledge and experience at the world's best universities with KSE.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Apply now</Button>
                <Button variant="secondary" onClick={() => routeGo("contacts")}>Get consultation</Button>
              </div>
              <p style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, color: "var(--kse-secondary)",
                marginTop: 28, lineHeight: 1.65, maxWidth: "40ch" }}>
                Every year, over{" "}
                <strong style={{ color: "var(--kse-title-light)", fontWeight: 600 }}>100</strong>{" "}
                of KSE's best students participate in exchange programs with top universities in Europe and the United States.
              </p>
            </div>
            <div className="imgph" style={{ height: 420, borderRadius: "12px 12px 0 0", alignSelf: "flex-end" }}>
              <span className="imgph__lbl">Students abroad</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MOBILITY INCLUDES ──────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Overview</div>
              <h2 className="usec__title">What academic mobility includes</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {MOBILITY_TYPES.map(m => (
              <div key={m.title} style={{ border: "1px solid var(--kse-border)", borderRadius: 12,
                padding: "28px 24px", background: "#fff" }}>
                <Icon name={m.icon} size={28} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 18,
                  letterSpacing: "-0.015em", margin: "16px 0 8px", color: "var(--kse-title-light)" }}>{m.title}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: 0 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNER UNIVERSITIES ────────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Partners</div>
              <h2 className="usec__title">Where do KSE students go?</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
            border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
            {PARTNER_REGIONS.map((reg, ri) => (
              <div key={reg.region} style={{ padding: "32px 36px",
                borderRight: ri === 0 ? "1px solid var(--kse-border)" : "none" }}>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 20 }}>
                  {reg.region}
                </div>
                {reg.countries.map((c, ci) => (
                  <div key={c.country} style={{
                    display: "grid", gridTemplateColumns: "130px 1fr", gap: 16, alignItems: "start",
                    padding: "13px 0", borderTop: ci > 0 ? "1px solid var(--kse-border-soft)" : "none",
                  }}>
                    <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12, fontWeight: 700,
                      color: "var(--kse-secondary)", paddingTop: 2, letterSpacing: ".02em" }}>{c.country}</span>
                    <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 14,
                      color: "var(--kse-title-light)", lineHeight: 1.6 }}>
                      {c.institutions.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL DEGREE PROGRAMS ────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Dual degree</div>
              <h2 className="usec__title">Dual Degree Programs</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {DUAL_DEGREES.map(d => (
              <div key={d.name} style={{ border: "1px solid var(--kse-border)", borderRadius: 14,
                padding: "28px 28px 24px", background: "#fff", display: "flex", flexDirection: "column",
                transition: "box-shadow .18s, transform .18s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                  {d.country} · {d.rank}
                </div>
                <h3 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
                  letterSpacing: "-0.015em", margin: "0 0 14px", color: "var(--kse-title-light)", lineHeight: 1.25, flex: 0 }}>
                  {d.name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: "0 0 20px", flex: 1 }}>{d.desc}</p>
                <div style={{ borderTop: "1px solid var(--kse-border-soft)", paddingTop: 16 }}>
                  <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                    letterSpacing: ".08em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 8 }}>
                    Available programs
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {d.programs.map(p => (
                      <span key={p} className="tag tag--soft" style={{ fontSize: 12 }}>{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEMESTER EXCHANGE PROGRAMS ──────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Exchange</div>
              <h2 className="usec__title">Semester Exchange Programs</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => e.preventDefault()}>
              All exchange programs <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
            {EXCHANGE_PROGRAMS.map((p, i) => (
              <div key={p.name} style={{
                display: "grid", gridTemplateColumns: "1fr 1.2fr 200px", gap: 32, alignItems: "center",
                padding: "28px 32px",
                borderBottom: i < EXCHANGE_PROGRAMS.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
              }}>
                <div>
                  <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                    letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 8 }}>
                    {p.country}
                  </div>
                  <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
                    letterSpacing: "-0.015em", color: "var(--kse-title-light)" }}>{p.name}</div>
                </div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6, margin: 0 }}>{p.stat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.subjects.map(s => (
                    <span key={s} className="tag tag--soft" style={{ fontSize: 12 }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO APPLY ────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 40 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Process</div>
              <h2 className="usec__title">How to apply</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
            border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
            {APPLY_STEPS.map((s, i) => (
              <div key={s.n} style={{
                padding: "32px 28px",
                borderRight: i < APPLY_STEPS.length - 1 ? "1px solid var(--kse-border)" : "none",
              }}>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 44,
                  letterSpacing: "-0.05em", color: "var(--kse-border)", lineHeight: 1, marginBottom: 20 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 17,
                  letterSpacing: "-0.01em", color: "var(--kse-title-light)", marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => routeGo("contacts")}>
              Get consultation on academic mobility
            </Button>
          </div>
        </div>
      </section>

      {/* ── REQUIREMENTS + DOCUMENTS ────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
            {/* Requirements */}
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Eligibility</div>
              <h2 className="usec__title" style={{ marginBottom: 28 }}>Requirements</h2>
              <div>
                {REQUIREMENTS.map((r, i) => (
                  <div key={r.label} style={{
                    display: "grid", gridTemplateColumns: "20px 1fr", gap: 12, alignItems: "start",
                    padding: "14px 0", borderTop: i > 0 ? "1px solid var(--kse-border-soft)" : "none",
                  }}>
                    <Icon name="check_circle" size={18} style={{ color: "var(--kse-accent)", marginTop: 1 }} />
                    <div>
                      <span style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 15,
                        color: "var(--kse-title-light)" }}>{r.label}</span>
                      <span style={{ fontSize: 14, color: "var(--kse-desc-light)" }}> — {r.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Documents + image */}
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>Checklist</div>
              <h2 className="usec__title" style={{ marginBottom: 28 }}>Required Documents</h2>
              <div style={{ border: "1px solid var(--kse-border)", borderRadius: 12, overflow: "hidden", background: "#fff", marginBottom: 20 }}>
                {DOCUMENTS.map((d, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px",
                    borderBottom: i < DOCUMENTS.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                  }}>
                    <Icon name="description" size={17} style={{ color: "var(--kse-accent)", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 15, color: "var(--kse-title-light)", lineHeight: 1.5 }}>{d}</span>
                  </div>
                ))}
              </div>
              <div className="imgph" style={{ height: 188, borderRadius: 12 }}>
                <span className="imgph__lbl">KSE students abroad</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT / CTA ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, padding: "32px 32px 28px", background: "#fff" }}>
              <Icon name="school" size={28} style={{ color: "var(--kse-accent)" }} />
              <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
                letterSpacing: "-0.02em", margin: "16px 0 8px" }}>Admissions</div>
              <a href="tel:+380732486976" style={{ display: "block", fontSize: 16, fontWeight: 500,
                color: "var(--kse-title-light)", textDecoration: "none", marginBottom: 4 }}>
                +38 073 248 69 76
              </a>
              <a href="mailto:applyto@kse.org.ua" style={{ display: "block", fontSize: 14,
                color: "var(--kse-secondary)", textDecoration: "none" }}>
                applyto@kse.org.ua
              </a>
              <div style={{ marginTop: 24 }}>
                <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Apply now</Button>
              </div>
            </div>
            <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, padding: "32px 32px 28px", background: "#fff" }}>
              <Icon name="help_outline" size={28} style={{ color: "var(--kse-secondary)" }} />
              <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
                letterSpacing: "-0.02em", margin: "16px 0 8px" }}>Other questions</div>
              <a href="tel:+380503963004" style={{ display: "block", fontSize: 16, fontWeight: 500,
                color: "var(--kse-title-light)", textDecoration: "none", marginBottom: 12 }}>
                +38 050 396 30 04
              </a>
              <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.6, margin: 0 }}>
                Questions about eligibility, documents, or the application process? We're happy to help.
              </p>
              <div style={{ marginTop: 24 }}>
                <Button variant="secondary" onClick={() => routeGo("contacts")}>Contact us</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}

window.UniMobilityPage = UniMobilityPage;

})();
