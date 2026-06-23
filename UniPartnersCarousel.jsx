// KSE University — Academic Partners marquee carousel
// Inserted after the hero on all program catalog pages

(function () {

const PARTNERS = [
  { name: "CERGE-EI",                       src: "../uploads/6452499baf9a73000db628fd_optimized.webp"        },
  { name: "Ariel University",               src: "../uploads/6452499caf9a73000db62913_optimized_1520.webp"   },
  { name: "ISET",                           src: "../uploads/645249aafca34a000d046c3f_optimized_2003.webp"   },
  { name: "Paris School of Economics",      src: "../uploads/645249aefca34a000d046c59_optimized.webp"        },
  { name: "NYU",                            src: "../uploads/645249af06e3c6000d405766_optimized.webp"        },
  { name: "ISET",                           src: "../uploads/645249b106e3c6000d405782_optimized.webp"        },
  { name: "University of Connecticut",      src: "../uploads/645249b2fca34a000d046c73_optimized.webp"        },
  { name: "University of Toronto",          src: "../uploads/645249b3c83160000d4ff8ee_optimized.webp"        },
  { name: "University of Houston",          src: "../uploads/645249b4fca34a000d046c89_optimized.webp"        },
  { name: "Panthéon Sorbonne",              src: "../uploads/645249b5af9a73000db62937_optimized.webp"        },
  { name: "IE University",                  src: "../uploads/64524ab1c83160000d4ffa22_optimized_1140.webp"   },
  { name: "Europa-Universität Viadrina",    src: "../uploads/64524ab9c83160000d4ffa3c_optimized_1396.webp"   },
  { name: "CESI École d'Ingénieurs",        src: "../uploads/64524ac2fca34a000d046e50_optimized.webp"        },
  { name: "Centenary College of Louisiana", src: "../uploads/64524ac6af9a73000db62a9d_optimized.webp"        },
  { name: "University of Massachusetts",   src: "./logos/University_of_Massachusetts.png"                  },
  { name: "Bocconi University",            src: "./logos/Bocconi.png"                                      },
  { name: "ZEvA",                          src: "./logos/Zeva.png"                                         },
  { name: "Olin College of Engineering",   src: "./logos/olin_logo.svg"                                    },

];

function UniPartnersCarousel() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section style={{
      background: "#fff",
      borderTop: "1px solid var(--kse-border-soft)",
      borderBottom: "1px solid var(--kse-border-soft)",
      overflow: "hidden",
      padding: "52px 0 48px",
    }}>
      <style>{`
        @keyframes kse-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .kse-partners__track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: kse-marquee 44s linear infinite;
        }
        .kse-partners__track:hover {
          animation-play-state: paused;
        }
        .kse-partner-logo {
          filter: grayscale(1) opacity(.55);
          transition: filter .22s ease;
        }
        .kse-partner-card:hover .kse-partner-logo {
          filter: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .kse-partners__track { animation: none; }
        }
      `}</style>

      {/* Section header */}
      <div className="kse-shell" style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <div style={{
              fontFamily: "var(--kse-font-ui)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".13em", textTransform: "uppercase",
              color: "var(--kse-secondary)", marginBottom: 10,
            }}>
              Partners
            </div>
            <h2 style={{
              fontFamily: "var(--kse-font-sans)", fontWeight: 500,
              fontSize: 32, letterSpacing: "-0.025em",
              margin: 0, color: "var(--kse-title-light)", lineHeight: 1.1,
            }}>
              Academic Partners
            </h2>
          </div>
        </div>
      </div>

      {/* Scrolling strip */}
      <div className="kse-partners__track">
        {doubled.map((p, i) => (
          <div
            key={i}
            className="kse-partner-card"
            title={p.name}
            style={{
              flexShrink: 0,
              width: 172,
              height: 84,
              borderRadius: 12,
              background: p.dark ? "#0C0D37" : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 20px",
              cursor: "default",
            }}
          >
            <img
              src={p.src}
              alt={p.name}
              className="kse-partner-logo"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

window.UniPartnersCarousel = UniPartnersCarousel;

})();
