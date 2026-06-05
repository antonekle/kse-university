// KSE University — hash router: route table + shared placeholder page layout.
// All placeholder pages reuse ONE layout (UniNav + UniFooter + this body).

// path (no leading slash) -> { title, desc, nav: active top-nav label (or null) }
const ROUTES = {
  "about":        { title: "About the University", desc: "Mission, history, and leadership of KSE University.", nav: "About", renderFull: (onNav, onCta) => React.createElement(UniAboutPage, { onNav, onCta }) },

  "programs":                 { title: "Academic Programs", desc: "Bachelor, master, doctoral, and short programs across every faculty.", nav: "Programs", renderBody: (onNav) => React.createElement(UniPrograms, { onNav, hideHeader: true, noshell: true }) },
  "programs/bachelor":        { title: "Bachelor Programs", desc: "Undergraduate degrees and entry pathways.", nav: "Programs", renderFull: (onNav, onCta) => React.createElement(UniBachelorPage, { onNav, onCta }) },
  "programs/master":          { title: "Master Programs", desc: "Graduate degrees and specialized tracks.", nav: "Programs", renderFull: (onNav, onCta) => React.createElement(UniMasterPage, { onNav, onCta }) },
  "programs/phd":             { title: "PhD Programs", desc: "Doctoral research and supervision.", nav: "Programs", renderFull: (onNav, onCta) => React.createElement(UniPhdPage, { onNav, onCta }) },
  "programs/short-courses":   { title: "Short Courses", desc: "Short, intensive courses and professional certificates.", nav: "Programs", renderFull: (onNav, onCta) => React.createElement(UniShortCoursesPage, { onNav, onCta }) },

  "admissions":   { title: "Admissions", desc: "How to apply, deadlines, and entry requirements.", nav: "Admissions", renderFull: (onNav, onCta) => React.createElement(UniAdmissionsHub, { onNav, onCta }) },

  "faculties":                      { title: "Faculties & Schools", desc: "The schools and departments that make up the University.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultiesPage, { onNav, onCta }) },
  "faculties/engineering":          { title: "School of Engineering", desc: "Engineering, data science, and applied mathematics.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultyEngineering, { onNav, onCta }) },
  "faculties/computer-technologies": { title: "Computer Technologies", desc: "Software, cybersecurity, and intelligent systems.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultyComputerTech, { onNav, onCta }) },
  "faculties/mathematics":           { title: "Mathematics", desc: "Pure and applied mathematics.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultyMathematics, { onNav, onCta }) },
  "faculties/social-sciences":       { title: "Social Sciences", desc: "Psychology, sociology, public policy, and urban studies.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultySocialSciences, { onNav, onCta }) },
  "faculties/economics":             { title: "Economics", desc: "Economic theory, data, business, and finance.", nav: "Faculties", renderFull: (onNav, onCta) => React.createElement(UniFacultyEconomics, { onNav, onCta }) },

  "research":     { title: "Research", desc: "Centers, projects, and publications.", nav: "Research", renderFull: (onNav, onCta) => React.createElement(UniResearchPage, { onNav, onCta }) },
  "community":    { title: "Community", desc: "Students, alumni, and partners of KSE.", nav: "Community", renderFull: (onNav, onCta) => React.createElement(UniCommunityPage, { onNav, onCta }) },
  "grants-aid":   { title: "Grants & Financial Aid", desc: "Merit grants, need-based support, external scholarships and state-funded places.", nav: "Grants & Aid", renderFull: (onNav, onCta) => React.createElement(UniGrantsAid, { onNav, onCta }) },

  "campus":       { title: "Campus & Visit", desc: "Visit the campus in Kyiv and plan your trip.", nav: null },
  "news":         { title: "News & Events", desc: "Latest announcements and stories from the University.", nav: null },
  "events":       { title: "Events", desc: "Lectures, conferences, and open days.", nav: null },
  "resources":    { title: "Student Resources", desc: "Tools, portals, and support for students.", nav: null },
  "people":       { title: "Faculty & Researchers", desc: "Faculty members and researchers across the University.", nav: null },
  "documents":    { title: "Documents", desc: "Official forms, policies, and downloads.", nav: null },
  "contacts":     { title: "Contacts", desc: "Get in touch with offices and departments.", nav: null },
  "publications":  { title: "Publications", desc: "Academic papers, reports and research output by faculty and researchers.", nav: "Research" },
  "mobility":      { title: "Student Mobility & Exchanges", desc: "International exchange programs, partnerships and mobility opportunities.", nav: null },
};

// Homepage labels (onNav("…")) -> route path, so existing section links route correctly.
const LABEL_TO_ROUTE = {
  "Home": "",
  "About": "about",
  "Programs": "programs",
  "Admissions": "admissions",
  "Faculties": "faculties",
  "Research": "research",
  "Community": "community",
  "Grants & Aid": "grants-aid",
  "Campus": "campus",
  "Visit Campus": "campus",
  "Apply": "admissions",
  "Contact": "contacts",
  "Contacts": "contacts",
  "Campus": "campus",
  "Programs": "programs",
  "Resources": "resources",
  "News": "news",
  "Events": "events",
  "Documents": "documents",
  "People": "people",
  // Faculty rows on the homepage
  "Engineering School": "faculties/engineering-school",
  "Economics & Business": "faculties/economics",
  "Sociology": "faculties/sociology",
  "Mathematics": "faculties/mathematics",
  "Cybersecurity": "faculties/cybersecurity",
  "Delta Engineering": "faculties/delta-engineering",
  // Life section chips
  "Open Days": "events",
  "Open days": "events",
  "Directions": "campus",
  "How to get here": "campus",
  // Research section
  "Publications": "publications",
  "Research areas": "research",
  "Centers & labs": "research",
  "Conferences": "events",
  "Publications / IDs": "publications",
  "All profiles": "people",
  // Resources section
  "Mobility": "mobility",
  "Moodle": "resources",
  "KSE Hub": "resources",
};

// Navigation helpers --------------------------------------------------------
function routeGo(path) {
  window.location.hash = path ? "#/" + path : "#/";
}
function currentPath() {
  return window.location.hash.replace(/^#\/?/, "").replace(/\/+$/, "");
}
function buildCrumbs(path) {
  const out = [{ label: "Home", path: "" }];
  const segs = path.split("/").filter(Boolean);
  let acc = "";
  segs.forEach(s => {
    acc = acc ? acc + "/" + s : s;
    const r = ROUTES[acc];
    out.push({ label: r ? r.title : s, path: acc });
  });
  return out;
}

// Shared placeholder page layout -------------------------------------------
function UniPlaceholder({ path, route, onNav, onCta }) {
  const crumbs = buildCrumbs(path);
  return (
    <div>
      <UniNav active={route.nav} onNav={onNav} onCta={onCta} />
      <main className="page">
        <div className="kse-shell">
          <nav className="crumbs" aria-label="Breadcrumb">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <React.Fragment key={c.path || "home"}>
                  {i > 0 && <span className="crumbs__sep">/</span>}
                  {last
                    ? <span className="crumbs__here" aria-current="page">{c.label}</span>
                    : <a href="#" className="crumbs__link"
                        onClick={(e) => { e.preventDefault(); routeGo(c.path); }}>{c.label}</a>}
                </React.Fragment>
              );
            })}
          </nav>
          <h1 className="page__title">{route.title}</h1>
          <p className="page__desc">{route.desc}</p>
          {route.renderBody
            ? route.renderBody(onNav)
            : <section className="page__empty" aria-label="Section placeholder">
                <Icon name="schedule" size={24} style={{ color: "var(--kse-secondary)" }} />
                <span>Content coming soon</span>
              </section>}
        </div>
      </main>
      <UniFooter onNav={onNav} />
    </div>
  );
}

Object.assign(window, { ROUTES, LABEL_TO_ROUTE, routeGo, currentPath, UniPlaceholder });
