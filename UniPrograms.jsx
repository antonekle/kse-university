// KSE University — Programs block with tab filter (Section 01 on homepage)
const PROG_DATA = {
  bachelor: [
    { name: "Business Economics",                      slug: "biznes-ekonomika" },
    { name: "Economics and Big Data",                  slug: "ekonomika-ta-veliki-dani" },
    { name: "Psychology",                              slug: "psykhologiya" },
    { name: "Law",                                     slug: "pravo" },
    { name: "Software Engineering",                    slug: "inzheneriya-programnogo-zabezpechennya" },
    { name: "Cybersecurity",                           slug: "kiberbezpeka" },
    { name: "Artificial Intelligence",                 slug: "shtuchnyi-intelekt" },
    { name: "Applied Mathematics",                     slug: "prykladna-matematyka" },
    { name: "Physical Mathematics",                    slug: "fizyko-matematychna" },
    { name: "Engineering of Innovative Manufacturing", slug: "inzheneriya-innovatsiynoho-vyrobnytstva" },
    { name: "Delta Engineering",                       slug: "delta-inzheneriya" },
  ],
  master: [
    { name: "Business and Financial Economics",               slug: "biznes-ta-finansova-ekonomika" },
    { name: "Economic Analysis",                              slug: "ekonomichnyi-analiz" },
    { name: "Public Policy and Governance",                   slug: "publichna-polityka-ta-vryaduvannya" },
    { name: "Urban Studies and Post-War Reconstruction",      slug: "urbanism-ta-pislyavoienna-rekonstruktsiya" },
    { name: "Social Psychology",                              slug: "sotsialna-psykholohiya" },
    { name: "Memory Studies and Public History",              slug: "memory-studies-ta-publichna-istoriya" },
    { name: "Micro- and Nanoelectronics",                     slug: "mikro-ta-nanoelektronika" },
    { name: "Unmanned Aerial Vehicles",                       slug: "bezpilotni-aviatsiini-kompleksy" },
    { name: "Mathematics",                                    slug: "matematyka" },
    { name: "Bioinformatics and Biomedical Data Analysis",    slug: "bioinformatyka-ta-biomedychni-dani" },
  ],
  phd: [
    { name: "Economics",         slug: "ekonomika" },
    { name: "Engineering Sciences", slug: "inzhenerni-nauky" },
    { name: "Mathematics",       slug: "matematyka" },
  ],
  short: [
    { name: "Cybersecurity Short Course", slug: "cybersecurity-short-course" },
    { name: "Delta Engineering Short",    slug: "delta-engineering-short" },
  ],
};

const BASE_URLS = {
  bachelor: "https://university.kse.ua/bakalavrat/",
  master:   "https://university.kse.ua/magistratura/",
  phd:      "https://university.kse.ua/aspirantura/",
  short:    "https://university.kse.ua/short-courses/",
};

const DEGREE_LABEL = { bachelor: "BA", master: "MA", phd: "PhD", short: "Short" };

const TABS = [
  { id: "all",      label: "All" },
  { id: "bachelor", label: "Bachelor" },
  { id: "master",   label: "Master" },
  { id: "phd",      label: "PhD" },
  { id: "short",    label: "Short courses" },
];

function UniPrograms({ onNav, hideHeader, noshell }) {
  const [active, setActive] = React.useState("all");

  const rows = React.useMemo(() => {
    if (active === "all") {
      return Object.entries(PROG_DATA).flatMap(([type, list]) =>
        list.map(p => ({ ...p, type }))
      );
    }
    return PROG_DATA[active].map(p => ({ ...p, type: active }));
  }, [active]);

  const content = (
    <div>
      {/* Header */}
      {!hideHeader && (
        <div className="usec__head">
          <div>
            <span className="usec__num">03</span>
            <h2 className="usec__title">Programs</h2>
            <p className="lead" style={{ marginTop: 10, maxWidth: 400 }}>
              Degrees and courses across five faculties.
            </p>
          </div>
          <a href="#" className="usec__link"
            onClick={(e) => { e.preventDefault(); onNav("Programs"); }}>
            All programs <Icon name="arrow_forward" size={18} />
          </a>
        </div>
      )}

      {/* Tab bar */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {TABS.map(t => {
          const on = active === t.id;
          return (
            <button key={t.id} onClick={() => setActive(t.id)}
              style={{
                fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                padding: "8px 18px", borderRadius: 999, cursor: "pointer", transition: ".15s",
                border: on ? "1.5px solid #0D0D0D" : "1.5px solid var(--kse-border)",
                background: on ? "#0D0D0D" : "transparent",
                color: on ? "#fff" : "var(--kse-title-light)",
              }}>
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
        color: "var(--kse-secondary)", marginBottom: 16 }}>
        {rows.length} {rows.length === 1 ? "program" : "programs"}
      </div>

      {/* Program rows grid */}
      <div className="prog-grid" style={{
        border: "1px solid var(--kse-border)", borderRadius: 12, overflow: "hidden",
        display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
      }}>
        {rows.map((p, i) => {
          const url = BASE_URLS[p.type] + p.slug;
          const isLast = i === rows.length - 1;
          const isOddTotal = rows.length % 2 !== 0;
          const isLastSingleCell = isOddTotal && i === rows.length - 1;
          return (
            <a key={p.type + p.slug} href={url} target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "15px 20px",
                borderBottom: isLast || (isOddTotal && i === rows.length - 2)
                  ? "none" : "1px solid var(--kse-border)",
                borderRight: i % 2 === 0 && !isLastSingleCell
                  ? "1px solid var(--kse-border)" : "none",
                textDecoration: "none", color: "inherit",
                transition: "background .12s", background: "transparent",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--kse-bg-light-2)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
              <span style={{ flex: 1, fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em" }}>
                {p.name}
              </span>
              {active === "all" && (
                <span className="udeg" style={{ flexShrink: 0 }}>
                  {DEGREE_LABEL[p.type]}
                </span>
              )}
              <Icon name="arrow_outward" size={16}
                style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
            </a>
          );
        })}
      </div>
    </div>
  );

  if (noshell) return content;

  return (
    <section className="usec">
      <div className="kse-shell">{content}</div>
    </section>
  );
}
Object.assign(window, { UniPrograms });
