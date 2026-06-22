"use client";
import { View } from "@/app/page";
import { securityFeatures, steps, creativeApps } from "@/lib/data";

interface Props { setView: (v: View) => void; }

export default function Landing({ setView }: Props) {
  return (
    <div>
      {/* Nav */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(251,250,248,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", height: 64, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontWeight: 900, fontSize: 14 }}>R</span>
            </div>
            <span style={{ fontSize: 16, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.3px" }}>RealmOS</span>
            <span className="font-mono" style={{ fontSize: 10, color: "var(--indigo)", background: "var(--indigo-pale)", padding: "2px 8px", borderRadius: 20, marginLeft: 2 }}>CREATIVE PASSPORT</span>
          </div>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <a href="#security" style={{ color: "var(--ink-mid)", fontSize: 13, textDecoration: "none", padding: "8px 14px", fontWeight: 500 }}>Security</a>
            <a href="#how" style={{ color: "var(--ink-mid)", fontSize: 13, textDecoration: "none", padding: "8px 14px", fontWeight: 500 }}>How it works</a>
            <button className="btn-primary" onClick={() => setView("configurator")} style={{ padding: "10px 20px", fontSize: 13 }}>
              Create your Passport →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "72px 28px 64px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 56, alignItems: "center" }}>
          <div>
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--mint-pale)", border: "1px solid rgba(31,158,118,0.25)", borderRadius: 100, padding: "6px 14px", marginBottom: 28 }}>
              <span style={{ fontSize: 13 }}>🛡</span>
              <span className="font-mono" style={{ fontSize: 11, color: "var(--mint)", letterSpacing: 0.3 }}>Encrypted · Zero trace left behind</span>
            </div>

            <h1 className="fade-up d1 font-serif" style={{ fontSize: "clamp(38px, 5.2vw, 60px)", fontWeight: 600, lineHeight: 1.08, letterSpacing: "-1.5px", color: "var(--ink)", marginBottom: 22 }}>
              Borrow the power.<br />
              Keep your <span className="gradient-text" style={{ fontStyle: "italic" }}>work yours.</span>
            </h1>

            <p className="fade-up d2" style={{ fontSize: 17, color: "var(--ink-mid)", lineHeight: 1.7, maxWidth: 460, marginBottom: 36 }}>
              Carry your projects, presets and workspace on one secure drive. Plug into any laptop with Premiere, Photoshop or Resolve already installed — edit at full power, then eject and disappear without a trace.
            </p>

            <div className="fade-up d3" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button className="btn-primary" onClick={() => setView("configurator")} style={{ padding: "15px 30px", fontSize: 15 }}>
                Create your Passport →
              </button>
              <a href="#how" className="btn-outline" style={{ padding: "14px 26px", fontSize: 15, textDecoration: "none" }}>
                See how it works
              </a>
            </div>

            {/* Trust row */}
            <div className="fade-up d4" style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {[
                { icon: "🔒", label: "256-bit encryption" },
                { icon: "🧹", label: "Auto-wipe on eject" },
                { icon: "🚫", label: "Nothing installed on host" },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontSize: 14 }}>{t.icon}</span>
                  <span style={{ fontSize: 12, color: "var(--ink-mid)", fontWeight: 500 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual — the security/passport visual */}
          <div className="fade-up d2" style={{ position: "relative" }}>
            <div className="float" style={{ background: "var(--dark-panel)", borderRadius: 22, padding: 28, boxShadow: "0 30px 70px rgba(20,20,30,0.18), 0 0 0 1px rgba(255,255,255,0.04)" }}>
              {/* Top status row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div className="shield-pulse" style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ADE80" }} />
                  <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>PASSPORT ACTIVE</span>
                </div>
                <span className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>encrypted</span>
              </div>

              {/* Shield icon centerpiece */}
              <div style={{ textAlign: "center", marginBottom: 24 }}>
                <div style={{ fontSize: 56, marginBottom: 8 }}>🛡</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 4 }}>Rinji's Creative Passport</div>
                <div className="font-mono" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>3 projects · 2 apps synced</div>
              </div>

              {/* App rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                {[
                  { icon: "🎬", name: "Premiere Pro", file: "AbujaDoc_v3.prproj" },
                  { icon: "🖼", name: "Photoshop", file: "Brand_assets.psd" },
                ].map(a => (
                  <div key={a.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: "rgba(255,255,255,0.04)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 18 }}>{a.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: "white", fontWeight: 600 }}>{a.name}</div>
                      <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{a.file}</div>
                    </div>
                    <span style={{ fontSize: 12, color: "#4ADE80" }}>✓</span>
                  </div>
                ))}
              </div>

              {/* Eject button visual */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 14px", background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.15)", borderRadius: 12 }}>
                <span style={{ fontSize: 14 }}>⏏</span>
                <span className="font-mono" style={{ fontSize: 11, color: "#FF9060" }}>Eject → wipes all host traces</span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="pulse-ring" style={{ position: "absolute", top: -14, right: -14, background: "var(--mint)", borderRadius: 14, padding: "10px 16px", boxShadow: "0 10px 24px rgba(31,158,118,0.3)" }}>
              <div style={{ fontSize: 11, color: "white", fontWeight: 700 }}>Zero trace ✓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security section */}
      <section id="security" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "80px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">Built on trust</span>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)" }}>
              Borrowing hardware shouldn't mean<br />exposing your work.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {securityFeatures.map(f => (
              <div key={f.title} className="card-hover" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 22 }}>
                <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.65 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ padding: "80px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label">How it works</span>
            <h2 className="font-serif" style={{ fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)" }}>
              Four steps. Total control.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {steps.map(s => (
              <div key={s.n} style={{ position: "relative", padding: "0 4px" }}>
                <div className="font-mono" style={{ fontSize: 12, color: "var(--indigo)", marginBottom: 14 }}>{s.n}</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported apps */}
      <section style={{ background: "var(--card)", borderTop: "1px solid var(--border)", padding: "72px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <span className="section-label">Works with your tools</span>
            <h2 className="font-serif" style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 600, letterSpacing: "-0.5px", color: "var(--ink)" }}>
              Built for designers and editors.
            </h2>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            {creativeApps.map(app => (
              <div key={app.id} style={{ display: "flex", alignItems: "center", gap: 8, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 100, padding: "9px 18px" }}>
                <span style={{ fontSize: 15 }}>{app.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "90px 28px", textAlign: "center" }}>
        <h2 className="font-serif" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 600, color: "var(--ink)", marginBottom: 16, letterSpacing: "-1px" }}>
          Your next edit doesn't need<br />your own laptop.
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 32 }}>Free to set up. Works with the software your friend already has.</p>
        <button className="btn-primary" onClick={() => setView("configurator")} style={{ padding: "16px 36px", fontSize: 15 }}>
          Create your Creative Passport →
        </button>
      </section>

      {/* Footer */}
      <footer style={{ padding: "32px 28px", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, background: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "white", fontWeight: 900, fontSize: 11 }}>R</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: 13, color: "var(--ink)" }}>RealmOS</span>
          </div>
          <span className="font-mono" style={{ fontSize: 11, color: "var(--muted)" }}>© 2025 Realm Technology · Built in Nigeria for the world</span>
        </div>
      </footer>
    </div>
  );
}
