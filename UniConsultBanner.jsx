// KSE University — "Not sure where to start?" CTA banner
// Drop before <UniFooter> on any page. Dispatches kse:consult to open the modal.

function UniConsultBanner() {
  return (
    <section className="usec">
      <div className="kse-shell">
        <div style={{
          background: "var(--kse-accent-band)", borderRadius: 16,
          padding: "36px 40px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 32, flexWrap: "wrap",
        }}>
          <div>
            <div style={{ color: "#fff", fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 24, letterSpacing: "-0.02em", marginBottom: 8 }}>
              Not sure where to start?
            </div>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.55, maxWidth: "48ch" }}>
              Tell us about your goals — we'll help you find the right program.
            </div>
          </div>
          <Button variant="light" icon="chat_bubble"
            onClick={() => window.dispatchEvent(new CustomEvent("kse:consult"))}>
            Get a consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
window.UniConsultBanner = UniConsultBanner;
