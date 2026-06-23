// KSE University — Faculty directory (/people) + per-person profile (/people/{slug}).
// Listing cards show only: [Photo] · [Name → profile] · one-line role.
// The profile page holds the extended bio: title line, education, career, affiliations.

const FACULTY_PEOPLE = [
  { name: "Tymofiy Mylovanov", slug: "tymofiy-mylovanov", faculty: "Economics",
    role: "President of KSE. PhD in Economics, University of Wisconsin–Madison. Former Minister of Economic Development, Trade and Agriculture of Ukraine.",
    title: "President of KSE",
    bio: `PhD in Economics, University of Wisconsin–Madison. Taught at the University of Bonn, the University of Pennsylvania, and the University of Pittsburgh. Research focus: game theory, contract theory, and institutional design, published in journals including Econometrica, the American Economic Review, and The Review of Economic Studies. Served as Ukraine's Minister of Economic Development, Trade and Agriculture from August 2019 to March 2020.` },

  { name: "Tymofii Brik", slug: "tymofii-brik", faculty: "Social Sciences",
    role: "Rector of KSE. PhD in Sociology, Carlos III University of Madrid. National coordinator of the European Social Survey in Ukraine.",
    title: "Rector of KSE",
    bio: `PhD in Sociology, Carlos III University of Madrid. Named Best Young Sociologist of Ukraine in 2018; invited as a professor of international research at Northwestern University in spring 2023; visiting researcher at the London School of Economics and Political Science. Co-leads a grant studying the needs of Ukrainian forced migrants with Lucinda Platt, Head of the Department of Social Policy. National coordinator of the European Social Survey in Ukraine since 2021. Chairman of the Supervisory Board of the analytical center Cedos; advisory board member for the "Rating Sellers" project at Texty.org; sits on the editorial board of Social Forces and the advisory board of research company Gradus.` },

  { name: "Maksym Obrizan", slug: "maksym-obrizan", faculty: "Economics",
    role: "Associate Professor, Dean of the Faculty of Economics. PhD, University of Iowa. Swedish Distinguished Professor.",
    title: "Associate Professor, Dean of the Faculty of Economics",
    bio: `PhD in Economics, University of Iowa. Has consulted on projects for the World Bank, USAID, and the Economist Intelligence Unit, in Ukraine and abroad, and currently works as a researcher with the Secretariat of the WHO Council on the Economics of Health for All. Author of 19 Scopus-indexed articles with 595 citations and an h-index of 10. Editor of RePEc New Economic Papers on transition economics; regular reviewer for international academic publications.` },

  { name: "Yuliia Svyrydenko", slug: "yuliia-svyrydenko", faculty: "Economics",
    role: "Distinguished Professor of Practice. First Deputy Prime Minister and Minister of Economy of Ukraine.",
    title: "Distinguished Professor of Practice; visiting lecturer, KSE GBS",
    bio: `Master's degree in Antitrust Management, Kyiv National University of Trade and Economics. Began her career in the private sector in 2008. From 2015, held senior posts in the Chernihiv Regional State Administration, including Head of the Department of Economic Development, First Deputy Head, and (briefly, in 2018) Head of the Administration. Appointed Deputy Minister of Economic Development, Trade and Agriculture in September 2019 and First Deputy Minister in July 2020. Became Deputy Head of the Office of the President of Ukraine in December 2020, and First Deputy Prime Minister – Minister of Economy of Ukraine in November 2021, a role she still holds.` },

  { name: "Sergiy Nikolaychuk", slug: "sergiy-nikolaychuk", faculty: "Economics",
    role: "Distinguished Professor of Practice, PhD. Deputy Governor of the National Bank of Ukraine.",
    title: "Distinguished Professor of Practice, PhD",
    bio: `Master's degree in Economics, Taras Shevchenko National University of Kyiv, followed by a PhD on the transmission mechanism of monetary policy in Ukraine. Previously Deputy Minister of Economic Development, Trade and Agriculture; Director of the Monetary Policy and Economic Analysis Department at the National Bank of Ukraine; and head of the Macroeconomic Research Department at ICU Investment Group. Joined KSE as a research fellow in April 2020 and also teaches at Taras Shevchenko National University. Deputy Governor of the National Bank of Ukraine since July 2021.` },

  { name: "Olesia Verchenko", slug: "olesia-verchenko", faculty: "Economics",
    role: "Academic Director, Master's Programs in Business & Financial Economics. PhD, University of Virginia.",
    title: "Academic Director, Master's Programs in Business & Financial Economics and Economic Analysis; Assistant Professor",
    bio: `PhD in Economics, University of Virginia; Master's in Banking and Finance, University of Lausanne. More than 20 years of teaching and applied research experience in financial markets and monetary economics.` },

  { name: "Ivan Gomza", slug: "ivan-gomza", faculty: "Social Sciences",
    role: "Professor of Political Science. PhD, joint Paris X–Nanterre / Kyiv-Mohyla Academy program.",
    title: "Professor of Political Science",
    bio: `PhD (2012) from the joint Franco-Ukrainian doctoral program at the University of Paris X–Nanterre and the Kyiv-Mohyla Academy. Held a DAAD fellowship in Germany (2013), a Fulbright Faculty Development fellowship (2016–17), a Petrach fellowship at George Washington University (2022), and a Petro Jacyk Non-Resident Scholarship at the University of Toronto (2023). Research interests: warfare, democratization, authoritarian regimes, nationalism, and contentious politics. Author of two books — most recently a study of French integral nationalism in the Third Republic (Kyiv: Krytyka, 2021), long-listed for the Ukrainian PEN-club award — plus articles on the Russo-Ukrainian war and related themes. Sits on the editorial boards of Communist and Post-Communist Studies, the Ukrainian Analytical Digest (University of Bremen), and the "Ukrainian Voices" book series (ibidem-Verlag). Teaches six courses across KSE, the Kyiv-Mohyla Academy, and Virginia Commonwealth University.` },

  { name: "Georgiy Shevchenko", slug: "georgiy-shevchenko", faculty: "Computer Technologies",
    role: "Dean, Faculty of Computer Science. Doctor of Physical and Mathematical Sciences.",
    title: "Dean, Faculty of Computer Science; Academic Director, Bachelor's Programs in Business Economics and Economics & Big Data; Professor, Doctor of Physical and Mathematical Sciences",
    bio: `Known for research in stochastic analysis, particularly models with long-term dependence. Recipient of the President of Ukraine Award for Young Scientists, among other honors. Member of the editorial boards of Modern Stochastics: Theory and Applications and Theory of Probability and Mathematical Statistics.` },

  { name: "Olena Besedina", slug: "olena-besedina", faculty: "Economics",
    role: "Academic Director, Master's Economics Programs. PhD, Bocconi University; MPA, Harvard Kennedy School.",
    title: "Academic Director, Master's Economics Programs; Assistant Professor",
    bio: `PhD in Economics, Bocconi University (Italy); Master's in Public Administration, Harvard University. Research focuses on international trade, economic policy, and the economies of developing countries. Editor of the Baltic Journal of Economics and a member of the editorial board of the International Trade Research Center at the KSE Institute.` },

  { name: "Nataliia Shapoval", slug: "nataliia-shapoval", faculty: "Economics",
    role: "Director, KSE Institute. Master's degrees from Kyiv National University and KSE / University of Houston.",
    title: "Director, KSE Institute",
    bio: `Master's degree in Probability Theory and Statistics from Kyiv National University, and a second Master's in Economic Analysis from KSE and the University of Houston. Eight years of experience managing and conducting policy and economic research across public procurement, healthcare and pharmaceuticals, private-sector strategic development, government economic strategy, regional policy, and international trade.` },

  { name: "Hanna Vakhitova", slug: "hanna-vakhitova", faculty: "Economics",
    role: "Assistant Professor of Economics. PhD, University of Kentucky.",
    title: "Lecturer in Economics; Assistant Professor",
    bio: `PhD in Economics, University of Kentucky. Teaching for more than 16 years, with 18+ years of experience in data analysis, policy impact evaluation, and thematic research for the World Bank, the International Organization for Migration, the International Labour Organization, the European Training Foundation, the EU's Horizon 2020 program, and the Ukrainian government.` },

  { name: "Yegor Stadnyi", slug: "yegor-stadnyi", faculty: "Social Sciences",
    role: "Senior Vice-Rector. Dual Master's: History (Kyiv-Mohyla Academy) and East European Studies (University of Warsaw).",
    title: "Senior Vice-Rector of KSE University",
    bio: `Dual Master's degree: History from the Kyiv-Mohyla Academy and East European Studies from the University of Warsaw. Headed the Cedos analytical center from 2018 to 2019, then served as Deputy Minister of Education and Science for Higher Education from September 2019 to June 2020. Developed his own course on contemporary Ukrainian history for students in economics and technical programs.` },

  { name: "Scott Gehlbach", slug: "scott-gehlbach", faculty: "Social Sciences",
    role: "Professor of Political Science. Lipsey Professor, University of Chicago. Author of Formal Models of Domestic Politics.",
    title: "Professor of Political Science",
    bio: `Lipsey Professor in the Department of Political Science, the Harris School of Public Policy, and the College at the University of Chicago. An early and prominent practitioner of using game theory to model the institutions of authoritarian regimes, and author of the widely used textbook Formal Models of Domestic Politics. Currently First Vice President of the Society for Institutional and Organizational Economics (SIOE), associate editor of the Quarterly Journal of Political Science, and organizer of the annual Summer Workshop in the Economic History and Historical Political Economy of Eurasia. Co-led the creation of a new PhD program in Political Economy at Chicago and now directs it.` },

  { name: "Charles Kotuby", slug: "charles-kotuby", faculty: "Social Sciences",
    role: "Professor of Law. Executive Director, Center for International Legal Education, University of Pittsburgh.",
    title: "Professor of Law",
    bio: `Professor of Practice and Executive Director of the Center for International Legal Education at the University of Pittsburgh School of Law. Formerly a Partner in the Global Disputes practice at Jones Day in Washington, DC, with 20 years as international law counsel representing multinational corporations and sovereign states in complex disputes. Has acted in international arbitrations and litigations across a range of sectors, represented clients on treaty-based claims in Central Asia, Latin America, and the Middle East, and appeared before the US Supreme Court, the Court of Justice of the European Union, ICSID, UNCITRAL, and various ad hoc arbitral tribunals.` },

  { name: "Maria Vlasenko", slug: "maria-vlasenko", faculty: "Mathematics",
    role: "Chair, Department of Mathematics. PhD, Institute of Mathematics, NAS Ukraine. Founder, International Centre for Mathematics in Ukraine.",
    title: "Chair, Department of Mathematics; Associate Professor",
    bio: `Specializes in algebraic number theory — periods, automorphic forms, and p-adic methods — with connections to mathematical physics. PhD in Mathematics, Institute of Mathematics, National Academy of Sciences of Ukraine (2005). Held postdoctoral positions at the Max Planck Institute for Mathematics in Bonn (2005–06, 2008–11) and the Institut des Hautes Études Scientifiques near Paris (2007–08); was a lecturer at Trinity College Dublin (2011–13) and University College Dublin (2013–15), then a researcher at the Institute of Mathematics of the Polish Academy of Sciences (2015–2025). Completed her habilitation in 2020. In 2022, co-founded the International Centre for Mathematics in Ukraine (ICMU), where she now serves as Managing Director.` },

  { name: "Polina Khrulova", slug: "polina-khrulova", faculty: "Engineering School",
    role: "Lecturer at KSE. Master's in Mathematics and Philosophy, Taras Shevchenko National University of Kyiv; PhD candidate, H.S. Skovoroda Institute of Philosophy, NAS of Ukraine.",
    title: "Lecturer at KSE",
    bio: `Holds a Master's degree in Mathematics and Philosophy from Taras Shevchenko National University of Kyiv and is currently a PhD candidate at the H.S. Skovoroda Institute of Philosophy of the National Academy of Sciences of Ukraine. Specializes in designing mathematics courses for interdisciplinary programs.` },

  { name: "Roman Bubiakin", slug: "roman-bubiakin", faculty: "Engineering School",
    role: "Lecturer, Programming & Software Development for Engineering Projects. Owner of a product company building team-collaboration and project-management software.",
    title: "Lecturer, Programming and Software Development for Engineering Projects",
    bio: `Owner of a product company that builds applications and tools for team collaboration, project management, and internal company processes. Teaches students to design and build working digital solutions — apps, services, and integrations — as part of their engineering projects.` },

  { name: "Daria Zaremba", slug: "daria-zaremba", faculty: "Engineering School",
    role: "Lecturer in Physics and Astronomy. Astrophysicist; leads the natural-science track and the push to modernize STEM/engineering education in Ukraine.",
    title: "Lecturer in Physics and Astronomy",
    bio: `An astrophysicist working to modernize science and engineering education in Ukraine. Leads the program's natural-science track and is updating how physics is taught so students see a clear link between scientific theory and real engineering problems.` },

  { name: "Nastasia Klen", slug: "nastasia-klen", faculty: "Engineering School",
    role: "Curriculum Lead, Human-Centered Design. Founder of NGO \"Spiv\"; 7+ years in human-centered product and service design for education, public, and private sectors.",
    title: "Curriculum Lead, Human-Centered Design",
    bio: `Designer specializing in social innovation; founder of the NGO "Spiv." Brings more than seven years of practical experience in human-centered design of products and services across the education, public, and private sectors. Within the program, she's responsible for making sure the curriculum matches students' real needs and expectations and prepares them for industry work.` },

  { name: "Kateryna Shkuropat", slug: "kateryna-shkuropat", faculty: "Engineering School",
    role: "Lecturer in Psychology. Expertise in psychodiagnostics, neuropsychology, and psychotherapy; leads humanities-track course development and mental-health practices for the program.",
    title: "Lecturer in Psychology",
    bio: `A psychologist and KSE lecturer with expertise in psychodiagnostics, neuropsychology, and psychotherapy. Leads development of the program's humanities and science-track courses, the introduction of inclusive practices, and the building of a mental-health-supportive culture among students.` },

  { name: "Oleksandr Veligorskyi", slug: "oleksandr-veligorskyi", faculty: "Engineering School",
    role: "Lecturer, Foundational Engineering. Professor and researcher in electronics and embedded systems, with industrial control-systems design experience.",
    title: "Lecturer, Foundational Engineering",
    bio: `A professor and researcher working at the intersection of electronics and embedded systems, with a background designing industrial control systems. Responsible for the program's foundational engineering content; works with the team to rethink what an engineer's profile should look like going forward, drawing on Ukrainian and European experience that combines research, teaching, and the design of new engineering programs.` },

  { name: "Pavlo Bilyk", slug: "pavlo-bilyk", faculty: "Engineering School",
    role: "Urbanist, architect, and urban researcher. Master's in European Urban Regeneration and Planning, Université Gustave Eiffel, Paris.",
    title: "Urbanist, architect, and urban researcher",
    bio: `Holds a Master's degree in European Urban Regeneration and Planning from Université Gustave Eiffel in Paris.` },

  { name: "Tetiana Zavyalova", slug: "tetiana-zavyalova", faculty: "Engineering School",
    role: "Designer and researcher, digital product design. Professional Doctorate in User System Interaction, Eindhoven University of Technology; Master's in Automation, KPI.",
    title: "Designer and researcher, digital product design",
    bio: `More than 20 years of experience in digital product design. Holds a Professional Doctorate in User System Interaction from Eindhoven University of Technology and a Master's degree in Automation from the Kyiv Polytechnic Institute (KPI). Co-founder of the product company OneNotary and an active contributor to growing Ukraine's UX community, KyivUX.` },

  { name: "Fabian Bliem", slug: "fabian-bliem", faculty: "Engineering School",
    role: "Developer and IT consultant. BSc Engineering, Multimedia Technology – Web Development; software engineering and product management background with BMW Group Austria and Porsche Informatik.",
    title: "Developer and IT consultant",
    bio: `Experienced in software engineering, product management, and digital solutions, having worked with BMW Group Austria, Porsche Informatik, and other international IT companies. Specializes in web development, requirements analysis, and implementing client-facing solutions. Holds a Bachelor of Science in Engineering, with a specialization in Multimedia Technology – Web Development.` },

  { name: "Yevheniia Kochubinska", slug: "yevheniia-kochubinska", faculty: "Mathematics",
    role: "Mathematics Professor. Candidate of Mathematical Sciences; 15+ years teaching, leads the jury of the Mathematics Section of the National Academy of Sciences of Ukraine.",
    title: "Mathematics Professor",
    bio: `Candidate of Mathematical Sciences with more than 15 years of teaching experience. Leads the jury of the Mathematics Section of the National Academy of Sciences of Ukraine. Author and lecturer of mathematics courses at BigBrotherSchool and Real Science, and a member of the editorial board of the journal In the World of Mathematics.` },

  { name: "Piotr Achinger", slug: "piotr-achinger", faculty: "Mathematics",
    role: "Simons Professor in Mathematics; Academic Director, Graduate Programs in Mathematics. PhD, UC Berkeley (2015); specializes in algebraic geometry.",
    title: "Simons Professor in Mathematics; Academic Director, Master's and Doctoral Programs in Mathematics",
    bio: `Specializes in algebraic geometry, with a focus on the topology and homotopy theory of algebraic varieties and rigid-analytic spaces. PhD from the University of California, Berkeley (2015). Held postdoctoral positions at the Banach Center in Warsaw and the Institut des Hautes Études Scientifiques (IHES) in Paris before becoming a researcher at the Institute of Mathematics of the Polish Academy of Sciences (IMPAN). Completed his habilitation in 2022.` },

  { name: "Jakub Konieczny", slug: "jakub-konieczny", faculty: "Mathematics",
    role: "Simons Professor in Mathematics. PhD, University of Oxford (2017); specializes in combinatorial number theory.",
    title: "Simons Professor in Mathematics",
    bio: `Specializes in combinatorial number theory, particularly applications of ergodic theory. PhD from the University of Oxford (2017). Held postdoctoral positions at the Hebrew University of Jerusalem (2017–2020) and the University of Lyon (2020–2023). Served as a Senior Research Associate at the University of Oxford before relocating to Kyiv.` },

  { name: "Dmytro Krukovets", slug: "dmytro-krukovets", faculty: "Computer Technologies",
    role: "IT Lecturer. Master's in Economic Analysis, KSE; lead economist, Modeling Unit, National Bank of Ukraine.",
    title: "IT Lecturer",
    bio: `Master's degree in Economic Analysis from KSE; currently pursuing a PhD in Economics at Taras Shevchenko National University of Kyiv. Alongside teaching and research, works as a lead economist in the Modeling Unit of the Monetary Policy and Economic Analysis Department at the National Bank of Ukraine. Winner of the Economic Conference for Students and Young Researchers (NBU, 2019) and runner-up at the GlobalLogic Computer Vision Hackathon.` },

  { name: "Vadym Yaremenko", slug: "vadym-yaremenko", faculty: "Computer Technologies",
    role: "IT Lecturer. Master's in Computer Science; Lead Software Engineer, EPAM Systems.",
    title: "IT Lecturer",
    bio: `Holds a Master's degree in Computer Science. Works as a Lead Software Engineer at EPAM Systems, having previously held the same role at Samsung Electronics.` },

  { name: "Oleh Omelchenko", slug: "oleh-omelchenko", faculty: "Computer Technologies",
    role: "IT Lecturer. Master's in Telecommunications, Odesa National Academy of Telecommunications; Senior Product Analyst, MacPaw.",
    title: "IT Lecturer",
    bio: `Master's degree in Telecommunications from the Odesa National Academy of Telecommunications. Currently Senior Product Analyst at MacPaw, a Kyiv-based software company, having previously worked as a Product and Web Analyst at startups and online retail businesses.` },
];

function findPerson(slug) {
  return FACULTY_PEOPLE.find(p => p.slug === slug) || null;
}

function peopleByFaculty(faculty) {
  return FACULTY_PEOPLE.filter(p => p.faculty === faculty);
}

/* ─────────────────────────── Listing ─────────────────────────── */

function PersonCard({ person }) {
  return (
    <div>
      <div className="imgph" style={{ width: "100%", aspectRatio: "4 / 5", borderRadius: 12 }}>
        <span className="imgph__lbl">Photo</span>
      </div>
      <a href="#" className="pcard__name"
        onClick={(e) => { e.preventDefault(); routeGo("people/" + person.slug); }}>
        {person.name}
        <Icon name="north_east" size={15} style={{ color: "var(--kse-secondary)" }} />
      </a>
      <div className="pcard__role">{person.role}</div>
    </div>
  );
}

function UniPeoplePage({ onNav, onCta }) {
  const [faculty, setFaculty] = React.useState("All");

  const facultiesPresent = [];
  FACULTY_PEOPLE.forEach(p => { if (!facultiesPresent.includes(p.faculty)) facultiesPresent.push(p.faculty); });
  const options = ["All", ...facultiesPresent];

  const visible = faculty === "All" ? FACULTY_PEOPLE : FACULTY_PEOPLE.filter(p => p.faculty === faculty);

  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Faculty</span>
          </nav>
          <span className="tag tag--soft" style={{ marginTop: 24, display: "inline-block" }}>People</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 64, lineHeight: 1.04, margin: "18px 0 0", maxWidth: "16ch" }}>
            Faculty
          </h1>
          <p style={{ fontSize: 20, color: "var(--kse-desc-light)", marginTop: 16,
            maxWidth: "54ch", lineHeight: 1.5 }}>
            Professors, researchers and practitioners across the University's faculties. Select a name to view a full profile.
          </p>
        </div>
      </section>

      {/* ── DIRECTORY ──────────────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div className="usec__head" style={{ marginBottom: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)", marginBottom: 10 }}>
                Directory
              </div>
              <h2 className="usec__title">Faculty</h2>
            </div>
          </div>

          {/* Faculty filter */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
            padding: "4px 0 28px", borderBottom: "1px solid var(--kse-border-soft)" }}>
            <span style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".1em", textTransform: "uppercase", color: "var(--kse-secondary)", marginRight: 4 }}>
              Faculty
            </span>
            <div className="pfilter">
              {options.map(o => (
                <button key={o} className={"tag " + (faculty === o ? "tag--active" : "tag--soft")}
                  onClick={() => setFaculty(o)}>{o}</button>
              ))}
            </div>
            <span style={{ marginLeft: "auto", fontFamily: "var(--kse-font-ui)", fontSize: 13,
              color: "var(--kse-secondary)" }}>{visible.length} people</span>
          </div>

          <div className="people-grid" style={{ marginTop: 32 }}>
            {visible.map(p => <PersonCard key={p.slug} person={p} />)}
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

/* ─────────────────────────── Profile ─────────────────────────── */

function UniPersonPage({ person, onNav, onCta }) {
  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 56 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo("people"); }}>Faculty</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">{person.name}</span>
          </nav>

          <div className="person-layout" style={{ marginTop: 28 }}>
            <div className="imgph" style={{ width: "100%", aspectRatio: "4 / 5", borderRadius: 14 }}>
              <span className="imgph__lbl">Photo</span>
            </div>
            <div>
              <span className="tag tag--soft" style={{ display: "inline-block" }}>{person.faculty}</span>
              <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.03em",
                fontSize: 52, lineHeight: 1.05, margin: "16px 0 0", maxWidth: "16ch" }}>
                {person.name}
              </h1>
              <div style={{ fontFamily: "var(--kse-font-sans)", fontSize: 19, fontWeight: 500,
                color: "var(--kse-title-light)", marginTop: 14, lineHeight: 1.4, maxWidth: "44ch" }}>
                {person.title}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usec">
        <div className="kse-shell">
          <div className="person-layout">
            <div>
              <div style={{ fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                letterSpacing: ".13em", textTransform: "uppercase", color: "var(--kse-secondary)" }}>
                Profile
              </div>
            </div>
            <div>
              <p className="person-bio">{person.bio}</p>
              <a href="#" className="usec__link" style={{ marginTop: 28 }}
                onClick={(e) => { e.preventDefault(); routeGo("people"); }}>
                <Icon name="arrow_back" size={18} /> Back to faculty
              </a>
            </div>
          </div>
        </div>
      </section>

      <UniFooter onNav={onNav} />
    </div>
  );
}

Object.assign(window, { UniPeoplePage, UniPersonPage, PersonCard, findPerson, peopleByFaculty });
