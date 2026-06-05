// Admissions & Education — feature cards + program cards + dark CTA band
function FeatureCard({ title, body, link, onClick }) {
  return (
    <div style={{ background: "var(--kse-bg-light-2)", borderRadius: 16, padding: 28, display: "flex",
      flexDirection: "column", minHeight: 168 }}>
      <h3 style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", margin: 0 }}>{title}</h3>
      <p className="lead" style={{ margin: "12px 0 20px", flex: 1 }}>{body}</p>
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(title); }}
        style={{ fontFamily: "var(--kse-font-ui)", fontSize: 15, fontWeight: 600, display: "inline-flex",
          alignItems: "center", gap: 7 }}>{link} <Icon name="arrow_forward" size={18} /></a>
    </div>
  );
}
function ProgramCard({ title, body, link, onClick }) {
  return (
    <div style={{ background: "#fff", border: "1px solid var(--kse-border)", borderRadius: 12, padding: 24,
      display: "flex", flexDirection: "column", minHeight: 200, transition: "box-shadow .18s ease" }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--kse-shadow-md)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
      <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.15 }}>{title}</h3>
      <p className="lead" style={{ fontSize: 15, margin: "14px 0 20px", flex: 1 }}>{body}</p>
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(title); }}
        style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 600, display: "inline-flex",
          alignItems: "center", gap: 7 }}>{link} <Icon name="arrow_forward" size={18} /></a>
    </div>
  );
}
function AdmissionsEducation({ onItem, onConsult }) {
  return (
    <section className="section">
      <div className="kse-shell">
        <h2 className="h-sec">Admissions &amp; Education</h2>
        <p className="lead" style={{ maxWidth: 520, marginTop: 12 }}>
          Choose the right path into KSE: degree programs, business education, professional courses and admissions support.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 32 }}>
          <FeatureCard title="Admissions" body="Explore requirements, deadlines, and next steps for any KSE program."
            link="Explore admissions" onClick={onItem} />
          <FeatureCard title="All Programs" body="Bachelor's, MBA, professional courses, and continuing education — all in one place."
            link="Browse all programs" onClick={onItem} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 20 }}>
          <ProgramCard title="KSE University" body="Bachelor's and Master's programs in economics, law, and public policy."
            link="Go to University" onClick={onItem} />
          <ProgramCard title="Graduate Business School" body="MBA and executive programs for those who lead organizations and build businesses."
            link="Go to Business School" onClick={onItem} />
          <ProgramCard title="ProfTech" body="Applied courses and short programs for skill-building and career pivots."
            link="Go to ProfTech" onClick={onItem} />
        </div>
        {/* Dark CTA band */}
        <div style={{ marginTop: 24, background: "var(--kse-accent-band)", borderRadius: 16, padding: "32px 36px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>Not sure where to start?</div>
            <div style={{ color: "var(--kse-desc-dark)", fontSize: 15, marginTop: 6 }}>Tell us about your goals — we'll help you find the right fit.</div>
          </div>
          <Button variant="light" icon="chat_bubble" onClick={onConsult}>Get a consultation</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { AdmissionsEducation });
