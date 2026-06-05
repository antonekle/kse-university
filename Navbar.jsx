// KSE global navbar with search
function Navbar({ onSearch, onNav }) {
  const links = ["About", "Units", "Admissions", "Education", "News & Events", "Careers", "Contacts"];
  const [q, setQ] = React.useState("");
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(255,255,255,0.88)",
      backdropFilter: "blur(10px)", borderBottom: "1px solid var(--kse-border-soft)" }}>
      <div className="kse-shell" style={{ display: "flex", alignItems: "center", gap: 28, height: 76 }}>
        <a href="#top" onClick={() => onNav && onNav("Home")}><Logo /></a>
        <nav style={{ display: "flex", gap: 22, marginLeft: 8 }}>
          {links.map(l => (
            <a key={l} href="#" onClick={(e) => { e.preventDefault(); onNav && onNav(l); }}
              className="nav-link"
              style={{ fontFamily: "var(--kse-font-ui)", fontSize: 14, fontWeight: 500, color: "#0D0D0D",
                opacity: .82, transition: ".15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = .82}>{l}</a>
          ))}
        </nav>
        <form style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8,
          border: "1px solid var(--kse-border)", borderRadius: 999, padding: "9px 16px", width: 280,
          background: "#fff" }}
          onSubmit={(e) => { e.preventDefault(); onSearch && onSearch(q); }}>
          <Icon name="search" size={18} style={{ color: "var(--kse-secondary)" }} />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search items, new collections etc…"
            style={{ border: "none", outline: "none", background: "transparent", fontFamily: "var(--kse-font-sans)",
              fontSize: 13, width: "100%", color: "#0D0D0D" }} />
        </form>
      </div>
    </header>
  );
}
Object.assign(window, { Navbar });
