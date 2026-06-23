// KSE University — Documents placeholder page
// Route: #/documents

(function () {

const DOC_SECTIONS = [
  {
    title: "Application & Admissions",
    docs: [
      { name: "Application form (Bachelor)",   type: "PDF" },
      { name: "Application form (Master)",      type: "PDF" },
      { name: "Application form (PhD)",         type: "PDF" },
      { name: "Document checklist",             type: "PDF" },
    ],
  },
  {
    title: "Academic Policies",
    docs: [
      { name: "Code of Academic Integrity",     type: "PDF" },
      { name: "Student Academic Regulations",   type: "PDF" },
      { name: "Grading & Assessment Policy",    type: "PDF" },
      { name: "Attendance Policy",              type: "PDF" },
    ],
  },
  {
    title: "Academic Mobility",
    docs: [
      { name: "Mobility participation form",    type: "DOCX" },
      { name: "Learning agreement template",    type: "DOCX" },
      { name: "Language proficiency requirements", type: "PDF" },
    ],
  },
  {
    title: "Finance & Grants",
    docs: [
      { name: "Tuition fee schedule 2025–26",   type: "PDF" },
      { name: "Grant application form",         type: "PDF" },
      { name: "Financial aid declaration",      type: "DOCX" },
    ],
  },
];

const TYPE_COLOR = {
  PDF:  { bg: "oklch(94% .04 25)",  color: "oklch(42% .14 25)"  },
  DOCX: { bg: "oklch(94% .04 250)", color: "oklch(42% .12 250)" },
};

function UniDocumentsPage({ onNav, onCta }) {
  return (
    <div>
      <UniNav active={null} onNav={onNav} onCta={onCta} />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--kse-bg-light-2)", borderBottom: "1px solid var(--kse-border-soft)" }}>
        <div className="kse-shell" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <nav className="crumbs" style={{ paddingTop: 28 }}>
            <a href="#" className="crumbs__link" onClick={(e) => { e.preventDefault(); routeGo(""); }}>Home</a>
            <span className="crumbs__sep">/</span>
            <span className="crumbs__here">Documents</span>
          </nav>
          <span className="tag tag--soft" style={{ display: "inline-block", marginTop: 24 }}>Resources</span>
          <h1 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, letterSpacing: "-0.034em",
            fontSize: 60, lineHeight: 1.05, margin: "18px 0 16px", maxWidth: "20ch" }}>
            Documents &amp; Forms
          </h1>
          <p style={{ fontSize: 18, color: "var(--kse-desc-light)", margin: 0, maxWidth: "48ch", lineHeight: 1.55 }}>
            Official forms, policies, and templates for students and applicants.
          </p>
        </div>
      </section>

      {/* ── DOCUMENT SECTIONS ───────────────────────────────────── */}
      <section className="usec">
        <div className="kse-shell">
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {DOC_SECTIONS.map(sec => (
              <div key={sec.title}>
                <h2 style={{ fontFamily: "var(--kse-font-sans)", fontWeight: 500, fontSize: 22,
                  letterSpacing: "-0.02em", color: "var(--kse-title-light)",
                  margin: "0 0 16px", paddingBottom: 12,
                  borderBottom: "1px solid var(--kse-border-soft)" }}>
                  {sec.title}
                </h2>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {sec.docs.map((doc, i) => (
                    <div key={doc.name} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: 24, padding: "14px 0",
                      borderBottom: i < sec.docs.length - 1 ? "1px solid var(--kse-border-soft)" : "none",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <Icon name="description" size={18} style={{ color: "var(--kse-secondary)", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--kse-font-sans)", fontSize: 16, fontWeight: 400,
                          color: "var(--kse-title-light)" }}>{doc.name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                        <span style={{
                          fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
                          letterSpacing: ".08em", padding: "3px 8px", borderRadius: 999,
                          background: TYPE_COLOR[doc.type]?.bg, color: TYPE_COLOR[doc.type]?.color,
                        }}>{doc.type}</span>
                        <button style={{
                          display: "inline-flex", alignItems: "center", gap: 5,
                          fontFamily: "var(--kse-font-ui)", fontSize: 13, fontWeight: 600,
                          color: "var(--kse-title-light)", background: "transparent",
                          border: "1px solid var(--kse-border)", borderRadius: 8,
                          padding: "6px 14px", cursor: "pointer", transition: ".15s",
                        }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = "var(--kse-title-light)"}
                          onMouseLeave={e => e.currentTarget.style.borderColor = "var(--kse-border)"}>
                          <Icon name="download" size={15} /> Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <UniConsultBanner />
      <UniFooter onNav={onNav} />
    </div>
  );
}

window.UniDocumentsPage = UniDocumentsPage;

})();
