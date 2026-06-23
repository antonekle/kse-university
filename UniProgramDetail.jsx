// KSE University — Program detail placeholder pages.
// Route: #/programs/p/{slug}  (resolved dynamically in uni-app.jsx)
// One shared layout, driven by PROGRAMS_REGISTRY. Unknown slugs fall back
// to a generic placeholder so no program link is ever dead.

const FACULTY_META = {
  "engineering":           { title: "Engineering School",   key: "engineering" },
  "computer-technologies": { title: "Computer Technologies", key: "computer-technologies" },
  "mathematics":           { title: "Mathematics",          key: "mathematics" },
  "social-sciences":       { title: "Social Sciences",      key: "social-sciences" },
  "economics":             { title: "Economics",            key: "economics" },
};

const DEGREE_LABEL = { BA: "Bachelor", MA: "Master", PhD: "PhD" };
const DEGREE_DURATION = { BA: "4 years", MA: "1.5 years", PhD: "4 years" };

// slug -> program. Covers every program listed on the faculty hubs.
const PROGRAMS_REGISTRY = {
  "software-engineering": {
    name: "Software Engineering", level: "BA", faculty: "computer-technologies",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Design, build, and ship reliable software — from algorithms and data structures to architecture and team practices.",
    topics: ["Algorithms & Data Structures", "Software Architecture", "Databases & Systems", "Web & Cloud"],
  },
  "artificial-intelligence": {
    name: "Artificial Intelligence", level: "BA", faculty: "computer-technologies",
    lang: "English", format: "On-campus",
    desc: "Foundations of machine learning, neural networks, and applied AI for real-world data and decision systems.",
    topics: ["Machine Learning", "Neural Networks", "Computer Vision", "Natural Language Processing"],
  },
  "applied-mathematics": {
    name: "Applied Mathematics", level: "BA", faculty: "mathematics",
    lang: "Ukrainian", format: "On-campus",
    desc: "Mathematical modeling of real-world systems, with strong computational and analytical training.",
    topics: ["Mathematical Modeling", "Numerical Methods", "Probability", "Optimization"],
  },
  "unmanned-aerial-vehicles": {
    name: "Unmanned Aerial Vehicles", level: "MA", faculty: "engineering",
    lang: "Ukrainian", format: "On-campus",
    desc: "Engineering of unmanned aerial systems — design, control, avionics, and mission software.",
    topics: ["Flight Dynamics", "Control Systems", "Avionics", "Mission Software"],
  },
  "micro-and-nanoelectronics": {
    name: "Micro and Nanoelectronics", level: "MA", faculty: "engineering",
    lang: "Ukrainian", format: "On-campus",
    desc: "Design and fabrication of microelectronic and nanoscale devices and embedded systems.",
    topics: ["Semiconductor Devices", "Circuit Design", "Embedded Systems", "Nanofabrication"],
  },
  "cybersecurity": {
    name: "Cybersecurity", level: "BA", faculty: "computer-technologies",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Securing systems and networks — cryptography, secure architecture, and defensive operations.",
    topics: ["Cryptography", "Network Security", "Secure Architecture", "Incident Response"],
  },
  "physical-mathematics": {
    name: "Physical Mathematics", level: "BA", faculty: "mathematics",
    lang: "Ukrainian", format: "On-campus",
    desc: "Rigorous training across physics and mathematics for research and advanced study.",
    topics: ["Mathematical Physics", "Differential Equations", "Mechanics", "Analysis"],
  },
  "mathematics": {
    name: "Mathematics", level: "MA", faculty: "mathematics",
    lang: "English", format: "On-campus",
    desc: "Advanced pure and applied mathematics, from algebra and analysis to probability and topology.",
    topics: ["Algebra", "Analysis", "Topology", "Probability"],
  },
  "bioinformatics": {
    name: "Bioinformatics and Biomedical Data Analysis", level: "MA", faculty: "mathematics",
    lang: "English", format: "On-campus",
    desc: "Computational analysis of biological and biomedical data, from genomics to clinical datasets.",
    topics: ["Genomics", "Statistical Genetics", "Biomedical Data", "Machine Learning"],
  },
  "psychology": {
    name: "Psychology", level: "BA", faculty: "social-sciences",
    lang: "Ukrainian", format: "On-campus",
    desc: "Scientific study of mind and behavior, with strong methods and applied practice.",
    topics: ["Cognitive Psychology", "Research Methods", "Neuroscience", "Clinical Practice"],
  },
  "law": {
    name: "Law", level: "BA", faculty: "social-sciences",
    lang: "Ukrainian", format: "On-campus",
    desc: "Foundations of law and legal reasoning with a modern, international orientation.",
    topics: ["Constitutional Law", "International Law", "Legal Reasoning", "Human Rights"],
  },
  "public-policy-governance": {
    name: "Public Policy and Governance", level: "MA", faculty: "social-sciences",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Policy design, institutional analysis, and effective public administration.",
    topics: ["Policy Design", "Institutional Analysis", "Public Administration", "Evaluation"],
  },
  "urbanism-reconstruction": {
    name: "Urbanism and Postwar Reconstruction", level: "MA", faculty: "social-sciences",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Urban planning and postwar reconstruction — resilient, human-centered cities.",
    topics: ["Urban Planning", "Reconstruction", "Resilience", "Community Design"],
  },
  "social-psychology": {
    name: "Social Psychology", level: "MA", faculty: "social-sciences",
    lang: "Ukrainian", format: "On-campus",
    desc: "How individuals think, feel, and behave in social contexts, grounded in research methods.",
    topics: ["Group Behavior", "Attitudes", "Research Methods", "Applied Practice"],
  },
  "memory-conflict-studies": {
    name: "Memory and Conflict Studies", level: "MA", faculty: "social-sciences",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Interdisciplinary study of how societies remember, narrate, and rebuild after conflict.",
    topics: ["Memory Studies", "Public History", "Conflict Studies", "Archives"],
  },
  "business-economics": {
    name: "Business Economics", level: "BA", faculty: "economics",
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Economic theory and business decision-making with a quantitative foundation.",
    topics: ["Microeconomics", "Macroeconomics", "Statistics", "Business Strategy"],
  },
  "economics-big-data": {
    name: "Economics and Big Data", level: "BA", faculty: "economics",
    lang: "English", format: "On-campus",
    desc: "Economics combined with data science — statistics, programming, and applied analytics.",
    topics: ["Econometrics", "Programming", "Data Analytics", "Machine Learning"],
  },
  "business-finance-economics": {
    name: "Business and Finance Economics", level: "MA", faculty: "economics",
    lang: "English", format: "On-campus",
    desc: "Advanced business and financial economics for markets, firms, and policy.",
    topics: ["Corporate Finance", "Financial Markets", "Valuation", "Risk"],
  },
  "economic-analysis": {
    name: "Economic Analysis", level: "MA", faculty: "economics",
    lang: "English", format: "On-campus",
    desc: "Rigorous quantitative methods and economic research at the graduate level.",
    topics: ["Advanced Econometrics", "Microeconomic Theory", "Research Design", "Policy Analysis"],
  },
};

// Resolve a program by slug, with a generic fallback for unknown slugs.
function getProgram(slug) {
  if (PROGRAMS_REGISTRY[slug]) return Object.assign({ slug }, PROGRAMS_REGISTRY[slug]);
  const name = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  return { slug, name, level: null, faculty: null,
    lang: "Ukrainian / English", format: "On-campus",
    desc: "Program overview and full curriculum are being prepared for this page.",
    topics: [] };
}
window.getProgram = getProgram;

/* ─── Detail page ───────────────────────────────────────────────────── */
function UniProgramDetailPage({ program, onNav, onCta }) {
  const fac = program.faculty ? FACULTY_META[program.faculty] : null;
  const degree = program.level ? DEGREE_LABEL[program.level] : "Program";
  const duration = program.level ? DEGREE_DURATION[program.level] : "—";

  const facts = [
    { icon: "school",      label: "Degree",   val: degree },
    { icon: "schedule",    label: "Duration", val: duration },
    { icon: "translate",   label: "Language", val: program.lang },
    { icon: "location_on", label: "Format",   val: program.format },
    { icon: "account_balance", label: "Faculty", val: fac ? fac.title : "University-wide" },
  ];

  return (
    <div>
      <UniNav active="Programs" onNav={onNav} onCta={onCta} />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 56 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            {fac
              ? <>
                  <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("faculties"); }}>Faculties</a>
                  <span className="crumbs__sep">/</span>
                  <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("faculties/" + fac.key); }}>{fac.title}</a>
                </>
              : <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("programs"); }}>Academic Programs</a>}
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">{program.name}</span>
          </nav>

          <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
            {program.level && <span className="udeg">{program.level}</span>}
            <span className="tag tag--soft" style={{ display: "inline-block" }}>
              {degree}{fac ? " · " + fac.title : ""}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.05, margin: "16px 0 0", maxWidth: "20ch",
          }}>{program.name}</h1>
          <p style={{
            fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "54ch", lineHeight: 1.5,
          }}>{program.desc}</p>

          <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Apply now</Button>
            {fac && <Button variant="secondary" onClick={() => routeGo("faculties/" + fac.key)}>View faculty</Button>}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ───────────────────────────────────────── */}
      <UniPartnersCarousel />

      {/* ── KEY FACTS ───────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{
            border: "1px solid var(--kse-border)", borderRadius: 14, background: "#fff",
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)", overflow: "hidden",
          }}>
            {facts.map((f, i) => (
              <div key={f.label} style={{
                padding: "24px 24px", borderRight: i < facts.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
              }}>
                <Icon name={f.icon} size={20} style={{ color: "var(--kse-accent)" }} />
                <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                  letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)",
                  margin: "12px 0 6px" }}>{f.label}</div>
                <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 16, fontWeight: 500,
                  letterSpacing: "-0.01em", color: "var(--kse-title-light)" }}>{f.val}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL STUDY ───────────────────────────────── */}
      <section className="usec usec--wash">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Curriculum
              </div>
              <h2 className="usec__title">What you'll study</h2>
            </div>
          </div>

          {program.topics.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
              {program.topics.map(t => (
                <span key={t} className="tag tag--soft" style={{ fontSize: 14, padding: "8px 16px" }}>{t}</span>
              ))}
            </div>
          )}

          <div style={{
            border: "1px dashed var(--kse-border)", borderRadius: 14,
            minHeight: 150, display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "center", gap: 10, background: "rgba(255,255,255,0.6)", textAlign: "center",
          }}>
            <Icon name="description" size={24} style={{ color: "var(--kse-secondary)" }} />
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 15, fontWeight: 500,
              color: "var(--kse-secondary)" }}>Full curriculum and course list — coming soon</span>
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13,
              color: "var(--kse-secondary)", maxWidth: "44ch", lineHeight: 1.5 }}>
              Detailed modules, faculty, and admission requirements for this program will be published on this page.
            </span>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────────── */}
      <section style={{ padding: "64px 0", borderTop: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 32, letterSpacing: "-0.025em", margin: "0 0 8px" }}>Interested in this program?</h2>
            <p style={{ fontSize: 16, color: "var(--kse-desc-light)", margin: 0 }}>Start your application or talk to our admissions team.</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <Button variant="primary" iconAfter="arrow_forward" onClick={() => window.dispatchEvent(new CustomEvent("kse:apply"))}>Apply now</Button>
            <Button variant="secondary" onClick={() => routeGo("contacts")}>Contact admissions</Button>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

Object.assign(window, { UniProgramDetailPage, PROGRAMS_REGISTRY, getProgram, FACULTY_META });
