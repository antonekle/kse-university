// KSE University — Program sub-pages: Bachelor, Master, PhD, Short Courses
// Shared ProgramsLayout + per-level data. Routes: #/programs/{level}

/* ═══════════════════════════ DATA ══════════════════════════════════════ */

const PROGRAMS_DATA = {
  bachelor: {
    title: "Bachelor Programs",
    subtitle: "Four-year academic programs with a strong foundational curriculum and research component.",
    tag: "Programs · Bachelor",
    applyLabel: "Apply for Bachelor",
    cards: [
      { faculty: "Economics", name: "Business Economics",
        desc: "Foundation of economic theory and business decision-making.",
        language: "Ukrainian / English", duration: "4 years", format: "On-campus", slug: "business-economics" },
      { faculty: "Computer Technologies", name: "Computer Science",
        desc: "Programming, algorithms, data structures and software engineering.",
        language: "English", duration: "4 years", format: "On-campus", slug: "computer-science" },
      { faculty: "Social Sciences", name: "Sociology",
        desc: "Study of society, behavioral and quantitative methods.",
        language: "Ukrainian", duration: "4 years", format: "On-campus", slug: "sociology" },
      { faculty: "Mathematics", name: "Applied Mathematics",
        desc: "Mathematical modeling of real-world systems.",
        language: "Ukrainian", duration: "4 years", format: "On-campus", slug: "applied-mathematics" },
    ],
    secondary: "events",
  },
  master: {
    title: "Master Programs",
    subtitle: "1.5-year programs of advanced specialization.",
    tag: "Programs · Master",
    applyLabel: "Apply for Master",
    cards: [
      { faculty: "Economics", name: "Economic Analysis",
        desc: "Advanced quantitative methods and economic research.",
        language: "English", duration: "1.5 years", format: "On-campus", slug: "economic-analysis" },
      { faculty: "Computer Technologies", name: "Software Engineering",
        desc: "Applied software systems, architecture and product development.",
        language: "English", duration: "1.5 years", format: "On-campus", slug: "software-engineering" },
      { faculty: "Social Sciences", name: "Public Policy & Governance",
        desc: "Policy design, institutional analysis and public administration.",
        language: "Ukrainian / English", duration: "1.5 years", format: "On-campus", slug: "public-policy" },
      { faculty: "Computer Technologies", name: "Data Science & AI",
        desc: "Machine learning, statistics and applied data systems.",
        language: "English", duration: "1.5 years", format: "Hybrid", slug: "data-science-ai" },
    ],
    secondary: "events",
  },
  phd: {
    title: "PhD Programs",
    subtitle: "Research programs supervised by leading faculty of the University.",
    tag: "Programs · PhD",
    applyLabel: "Apply for PhD",
    cards: [
      { faculty: "Economics", name: "PhD in Economics",
        desc: "Independent research supervised by leading scholars.",
        language: "English", duration: "4 years", format: "On-campus", slug: "phd-economics" },
      { faculty: "Mathematics", name: "PhD in Mathematics",
        desc: "Research in pure and applied mathematics.",
        language: "English", duration: "4 years", format: "On-campus", slug: "phd-mathematics" },
      { faculty: "Social Sciences", name: "PhD in Sociology",
        desc: "Empirical research on society.",
        language: "Ukrainian / English", duration: "4 years", format: "On-campus", slug: "phd-sociology" },
    ],
    secondary: "phd",
  },
  "short-courses": {
    title: "Short Courses",
    subtitle: "Short, intensive courses and professional certificates.",
    tag: "Programs · Short Courses",
    applyLabel: "Apply for Short Courses",
    cards: [
      { faculty: "Computer Technologies", name: "Data Analysis for Decision-Makers",
        desc: "Applied statistics and data interpretation for managers.",
        language: "English", duration: "6 weeks", format: "Hybrid", slug: "data-analysis" },
      { faculty: "Social Sciences", name: "Public Policy Fundamentals",
        desc: "Key tools for policy analysis and institutional design.",
        language: "Ukrainian", duration: "4 weeks", format: "On-campus", slug: "public-policy-fundamentals" },
      { faculty: "Computer Technologies", name: "AI & Business Strategy",
        desc: "Practical AI literacy for business leaders.",
        language: "English", duration: "8 weeks", format: "Hybrid", slug: "ai-business-strategy" },
      { faculty: "Economics", name: "Financial Modeling",
        desc: "Excel-based modeling, valuation and scenario analysis.",
        language: "Ukrainian / English", duration: "5 weeks", format: "On-campus", slug: "financial-modeling" },
    ],
    secondary: "corporate",
  },
};

const UPCOMING_EVENTS = [
  { date: "15 Jul 2026", type: "Open Day",      title: "Engineering School Open Day" },
  { date: "22 Jul 2026", type: "Info Session",   title: "Master Programs — Information Evening" },
  { date: "05 Aug 2026", type: "Campus Tour",    title: "Summer Campus Tour" },
];

const PHD_RESEARCH_AREAS = [
  { title: "Economics & Policy",    desc: "Empirical and theoretical research" },
  { title: "Data & AI",             desc: "Machine learning, statistics" },
  { title: "Sociology",             desc: "Quantitative and qualitative research" },
  { title: "Pure Mathematics",      desc: "Topology, algebra, analysis" },
  { title: "Cybersecurity",         desc: "Architecture and cryptography" },
  { title: "Defense Engineering",   desc: "Dual-use systems" },
];

const PHD_SUPERVISORS = [
  { name: "O. Petrenko",   title: "Dean, Engineering School",  tags: ["AI", "Software Engineering"],  slug: "petrenko" },
  { name: "M. Kovalenko",  title: "Professor of Economics",        tags: ["Macroeconomics", "Policy"],    slug: "kovalenko" },
  { name: "I. Shevchuk",   title: "Associate Professor",           tags: ["Sociology", "Methods"],        slug: "shevchuk" },
  { name: "T. Bondar",     title: "Lab Director",                  tags: ["Topology", "Analysis"],        slug: "bondar" },
];

/* ═══════════════════════ HELPERS ═══════════════════════════════════════ */

function groupByFaculty(cards) {
  const groups = {};
  const order = [];
  cards.forEach(c => {
    if (!groups[c.faculty]) { groups[c.faculty] = []; order.push(c.faculty); }
    groups[c.faculty].push(c);
  });
  return order.map(f => ({ faculty: f, cards: groups[f] }));
}

/* ═══════════════════════ FILTER BAR ════════════════════════════════════ */

function PillGroup({ label, options, value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
        color: "var(--kse-secondary)", letterSpacing: ".07em", textTransform: "uppercase",
        whiteSpace: "nowrap" }}>{label}</span>
      <div style={{ display: "flex", gap: 5 }}>
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)}
            style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: value === o ? 600 : 500,
              padding: "5px 13px", borderRadius: 999, cursor: "pointer",
              border: value === o ? "1.5px solid var(--kse-title-light)" : "1px solid var(--kse-border)",
              background: value === o ? "var(--kse-title-light)" : "#fff",
              color: value === o ? "#fff" : "var(--kse-title-light)", transition: ".15s" }}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function FilterBar() {
  const [faculty, setFaculty] = React.useState("All");
  const [lang,   setLang]   = React.useState("All");
  const [fmt,    setFmt]    = React.useState("All");
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap",
      padding: "18px 0", borderBottom: "1px solid var(--kse-border-soft)" }}>
      <PillGroup label="Faculty"
        options={["All", "Engineering School", "Computer Technologies", "Mathematics", "Social Sciences", "Economics"]}
        value={faculty} onChange={setFaculty} />
      <div style={{ width: 1, height: 20, background: "var(--kse-border)", flexShrink: 0 }} />
      <PillGroup label="Language" options={["All", "UA", "EN"]} value={lang} onChange={setLang} />
      <div style={{ width: 1, height: 20, background: "var(--kse-border)", flexShrink: 0 }} />
      <PillGroup label="Format" options={["All", "On-campus", "Hybrid"]} value={fmt} onChange={setFmt} />
      <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".04em", padding: "4px 10px", borderRadius: 999, marginLeft: "auto",
        background: "oklch(94% .04 250)", color: "oklch(42% .12 250)" }}>V1 Should</span>
    </div>
  );
}

/* ═══════════════════════ PROGRAM CARD ══════════════════════════════════ */

function ProgramCard({ card, levelKey }) {
  return (
    <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, padding: "24px 24px 20px",
      background: "#fff", display: "flex", flexDirection: "column",
      transition: "box-shadow .18s, transform .18s" }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>

      <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)",
        marginBottom: 12 }}>{card.faculty}</div>

      <h3 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
        letterSpacing: "-0.015em", margin: "0 0 10px", color: "var(--kse-title-light)" }}>{card.name}</h3>

      <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65,
        margin: "0 0 18px", flex: 1 }}>{card.desc}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8,
        padding: "14px 0", borderTop: "1px solid var(--kse-border-soft)",
        borderBottom: "1px solid var(--kse-border-soft)", marginBottom: 18 }}>
        {[
          { icon: "translate",  label: "Language", val: card.language },
          { icon: "schedule",   label: "Duration", val: card.duration },
          { icon: "location_on",label: "Format",   val: card.format   },
        ].map(m => (
          <div key={m.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Icon name={m.icon} size={15} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12,
              color: "var(--kse-secondary)", minWidth: 62 }}>{m.label}</span>
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
              fontWeight: 500, color: "var(--kse-title-light)" }}>{m.val}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => routeGo("programs/p/" + card.slug)}
          style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
            padding: "9px 14px", borderRadius: 8, cursor: "pointer", flex: 1,
            background: "transparent", color: "var(--kse-title-light)",
            border: "1.5px solid var(--kse-border)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 5,
            transition: ".15s" }}
          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--kse-title-light)"}
          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--kse-border)"}>
          View Program <Icon name="arrow_forward" size={14} />
        </button>
        <button onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}
          style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
            padding: "9px 18px", borderRadius: 8, cursor: "pointer",
            background: "var(--kse-accent)", color: "#fff", border: "none", transition: ".15s" }}
          onMouseEnter={e => e.currentTarget.style.opacity = ".88"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
          Apply
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════ PROGRAMS GRID ═════════════════════════════════ */

function ProgramsGrid({ cards, levelKey }) {
  return (
    <div className="programs-grid">
      {cards.map(c => <ProgramCard key={c.slug} card={c} levelKey={levelKey} />)}
    </div>
  );
}

/* ═══════════════════════ SECONDARY SECTIONS ════════════════════════════ */

function EventsBlock() {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div className="usec__head" style={{ marginBottom: 24 }}>
          <div>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
              Upcoming
            </div>
            <h2 className="usec__title">Events</h2>
          </div>
          <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("events"); }}>
            All events <Icon name="arrow_forward" size={18} />
          </a>
        </div>
        <div style={{ border: "1px solid var(--kse-border)", borderRadius: 14, overflow: "hidden" }}>
          {UPCOMING_EVENTS.map((ev, i) => (
            <div key={i} onClick={() => routeGo("events")}
              style={{ display: "flex", alignItems: "center", gap: 24, padding: "20px 24px",
                borderBottom: i < UPCOMING_EVENTS.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                background: "#fff", cursor: "pointer", transition: ".15s" }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
              onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
              <div style={{ fontFamily: "monospace", fontSize: 14, fontWeight: 500,
                color: "var(--kse-secondary)", minWidth: 90 }}>{ev.date}</div>
              <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".04em", padding: "4px 10px", borderRadius: 999,
                background: "oklch(94% .04 250)", color: "oklch(42% .12 250)",
                whiteSpace: "nowrap" }}>{ev.type}</span>
              <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 16, fontWeight: 500,
                flex: 1, color: "var(--kse-title-light)", letterSpacing: "-0.01em" }}>{ev.title}</span>
              <Icon name="arrow_forward" size={16} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhDSecondary() {
  return (
    <>
      {/* Research Areas */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Areas
              </div>
              <h2 className="usec__title">Research Areas</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {PHD_RESEARCH_AREAS.map(a => (
              <div key={a.title} style={{ border: "1px solid var(--kse-border)", borderRadius: 12,
                padding: "22px 24px", background: "#fff" }}>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 17,
                  letterSpacing: "-0.01em", marginBottom: 8 }}>{a.title}</div>
                <p style={{ fontSize: 13, color: "var(--kse-desc-light)", lineHeight: 1.55, margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potential Supervisors */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Faculty
              </div>
              <h2 className="usec__title">Potential Supervisors</h2>
            </div>
            <a href="#" className="usec__link" onClick={(e) => { e.preventDefault(); routeGo("people"); }}>
              All profiles <Icon name="arrow_forward" size={18} />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {PHD_SUPERVISORS.map(s => (
              <div key={s.name} onClick={() => routeGo("people")}
                style={{ border: "1px solid var(--kse-border)", borderRadius: 14,
                  padding: "24px 22px 20px", background: "#fff", cursor: "pointer",
                  transition: "box-shadow .18s, transform .18s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "none"; }}>
                <div className="imgph" style={{ width: 52, height: 52, borderRadius: "50%", marginBottom: 16 }}>
                  <span className="imgph__lbl" style={{ fontSize: 10 }}>Photo</span>
                </div>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 600, fontSize: 17,
                  letterSpacing: "-0.01em", marginBottom: 3 }}>{s.name}</div>
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 12,
                  color: "var(--kse-secondary)", marginBottom: 14 }}>{s.title}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 18 }}>
                  {s.tags.map(t => (
                    <span key={t} className="tag tag--soft" style={{ fontSize: 11 }}>{t}</span>
                  ))}
                </div>
                <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                  color: "var(--kse-secondary)", display: "inline-flex", alignItems: "center", gap: 5 }}>
                  View Profile <Icon name="arrow_forward" size={14} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funding + Requirements */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { icon: "stars",     title: "Funding & Grants",
                body: "Scholarships, research positions, external grants.",
                link: "Learn more →", route: "grants-aid" },
              { icon: "checklist", title: "Admission Requirements",
                body: "Master's degree, research proposal, interview.",
                link: "View requirements →", route: "admissions" },
            ].map(b => (
              <div key={b.title} style={{ border: "1px solid var(--kse-border)", borderRadius: 14,
                padding: "28px 28px 24px", background: "#fff" }}>
                <Icon name={b.icon} size={26} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 20,
                  letterSpacing: "-0.015em", margin: "14px 0 10px" }}>{b.title}</div>
                <p style={{ fontSize: 14, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: "0 0 20px" }}>{b.body}</p>
                <a href="#" onClick={(e) => { e.preventDefault(); routeGo(b.route); }}
                  style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                    color: "var(--kse-secondary)", display: "inline-flex", alignItems: "center", gap: 5,
                    textDecoration: "none" }}>
                  {b.link} <Icon name="arrow_forward" size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CorporateTraining() {
  return (
    <section className="usec usec--wash">
      <div className="kse-shell">
        <div style={{ border: "1px solid var(--kse-border)", borderRadius: 16, padding: "40px 40px 36px",
          background: "#fff", display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 40, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 12 }}>
              Corporate
            </div>
            <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 28,
              letterSpacing: "-0.025em", margin: "0 0 12px" }}>Corporate Training</h2>
            <p style={{ fontSize: 15, color: "var(--kse-desc-light)", lineHeight: 1.65, margin: 0, maxWidth: 440 }}>
              Tailored programs for organizations and teams.
            </p>
          </div>
          <button onClick={() => routeGo("contacts")}
            style={{ fontFamily: "var(--kse-font-ui)", fontWeight: 600, fontSize: 15,
              padding: "14px 28px", borderRadius: 8, cursor: "pointer", flexShrink: 0,
              background: "var(--kse-title-light)", color: "#fff", border: "none",
              display: "inline-flex", alignItems: "center", gap: 8, transition: ".15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = ".85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Get in touch <Icon name="arrow_forward" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ SHARED LAYOUT ═════════════════════════════════ */

function ProgramsLayout({ levelKey, onNav, onCta }) {
  const data = PROGRAMS_DATA[levelKey];
  return (
    <div>
      <UniNav active="Programs" onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("programs"); }}>Academic Programs</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">{data.title}</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>{data.tag}</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "18ch" }}>
            {data.title}
          </h1>
          <p style={{ fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "52ch", lineHeight: 1.5 }}>
            {data.subtitle}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>
              {data.applyLabel}
            </Button>
            <Button variant="secondary" onClick={() => routeGo("events")}>Open Days</Button>
          </div>
        </div>
      </section>

      {/* ── FILTER + CARDS ─────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 8 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Programs
              </div>
              <h2 className="usec__title">{data.title}</h2>
            </div>
          </div>
          <FilterBar />
          <div style={{ marginTop: 32 }}>
            <ProgramsGrid cards={data.cards} levelKey={levelKey} />
          </div>
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────────── */}
      <UniPartnersCarousel />

      {/* ── SECONDARY SECTION ──────────────────────────────────── */}
      {data.secondary === "events"    && <EventsBlock />}
      {data.secondary === "phd"       && <PhDSecondary />}
      {data.secondary === "corporate" && <CorporateTraining />}

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}

/* ═══════════════════════ PAGE COMPONENTS ═══════════════════════════════ */

function UniBachelorPage({ onNav, onCta }) {
  return <ProgramsLayout levelKey="bachelor" onNav={onNav} onCta={onCta} />;
}
function UniMasterPage({ onNav, onCta }) {
  return <ProgramsLayout levelKey="master" onNav={onNav} onCta={onCta} />;
}
function UniPhdPage({ onNav, onCta }) {
  return <ProgramsLayout levelKey="phd" onNav={onNav} onCta={onCta} />;
}
function UniShortCoursesPage({ onNav, onCta }) {
  return <ProgramsLayout levelKey="short-courses" onNav={onNav} onCta={onCta} />;
}

function UniAcademicProgramsPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active="Programs" onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Academic Programs</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>Programs</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "18ch" }}>
            Academic Programs
          </h1>
          <p style={{ fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "52ch", lineHeight: 1.5 }}>
            Bachelor, master, doctoral, and short programs across every faculty.
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>
              Apply now
            </Button>
            <Button variant="secondary" onClick={() => routeGo("events")}>Open Days</Button>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS LIST ─────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <UniPrograms onNav={onNav} hideHeader={true} noshell={true} />
        </div>
      </section>

      {/* ── PARTNERS ──────────────────────────────────────────── */}
      <UniPartnersCarousel />

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}

Object.assign(window, { UniBachelorPage, UniMasterPage, UniPhdPage, UniShortCoursesPage, UniAcademicProgramsPage });
