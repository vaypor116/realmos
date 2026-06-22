"use client";
import { useState } from "react";
import { View } from "@/app/page";
import { creativeApps, PassportConfig } from "@/lib/data";

interface Props {
  config: PassportConfig;
  setView: (v: View) => void;
}

export default function StepPreview({ config, setView }: Props) {
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const selectedApps = creativeApps.filter(a => config.selectedApps.includes(a.id));

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => { setGenerating(false); setDone(true); }, 2600);
  };

  return (
    <div>
      <span className="section-label">Step 4 of 4</span>
      <h2 className="font-serif" style={{ fontSize: "clamp(26px, 3.8vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 10 }}>
        {config.name || "Your Passport"} is ready to build.
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 40, maxWidth: 480 }}>
        Review everything below, then generate your Passport image.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 36 }}>
        {/* Passport visual */}
        <div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--indigo)", letterSpacing: 1.5, marginBottom: 12, textTransform: "uppercase" }}>Your passport</div>
          <div style={{ background: "var(--dark-panel)", borderRadius: 18, padding: 24, boxShadow: "0 16px 40px rgba(20,20,30,0.15)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <div className="shield-pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ADE80" }} />
                <span className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>READY TO GENERATE</span>
              </div>
            </div>
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <div style={{ fontSize: 40, marginBottom: 6 }}>🛡</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "white" }}>{config.name || "My Passport"}</div>
              <div className="font-mono" style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{selectedApps.length} apps synced</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              {selectedApps.map(app => (
                <div key={app.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "rgba(255,255,255,0.04)", borderRadius: 10 }}>
                  <span style={{ fontSize: 15 }}>{app.icon}</span>
                  <span style={{ fontSize: 12, color: "white", fontWeight: 500 }}>{app.name}</span>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: "#4ADE80" }}>✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Config summary */}
        <div>
          <div className="font-mono" style={{ fontSize: 10, color: "var(--indigo)", letterSpacing: 1.5, marginBottom: 12, textTransform: "uppercase" }}>Configuration</div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: 20 }}>
            {[
              { label: "Passport name", value: config.name || "Unnamed" },
              { label: "Role", value: config.role === "both" ? "Designer & Editor" : config.role === "designer" ? "Designer" : "Editor" },
              { label: "Apps synced", value: `${selectedApps.length} apps` },
              { label: "Settings & presets", value: config.includeSettings ? "Included" : "Not included" },
              { label: "Project assets", value: config.includeAssets ? "Included" : "Not included" },
              { label: "Auto-wipe on eject", value: config.wipeOnEject ? "Enabled" : "Disabled" },
            ].map((r, i) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: i < 5 ? "1px solid var(--border)" : "none" }}>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{r.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)" }}>{r.value}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: "14px 16px", background: "var(--mint-pale)", border: "1px solid rgba(31,158,118,0.2)", borderRadius: 14 }}>
            <div style={{ fontSize: 12, color: "var(--mint)", fontWeight: 700, marginBottom: 4 }}>What happens next</div>
            <div style={{ fontSize: 12, color: "var(--ink-mid)", lineHeight: 1.6 }}>We package your Passport image. Flash it to a USB drive. Plug into any laptop with your selected apps installed — your projects load instantly, and disappear cleanly when you eject.</div>
          </div>
        </div>
      </div>

      {!done ? (
        <button className="btn-primary" onClick={handleGenerate} disabled={generating} style={{ padding: "15px 36px", fontSize: 15, opacity: generating ? 0.7 : 1 }}>
          {generating ? (<><span className="spin-slow" style={{ display: "inline-block" }}>⟳</span> Building your Passport...</>) : "Generate my Passport →"}
        </button>
      ) : (
        <div className="scale-in" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", background: "var(--mint-pale)", border: "1px solid rgba(31,158,118,0.2)", borderRadius: 16 }}>
            <div style={{ fontSize: 22 }}>✅</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--mint)" }}>{config.name || "Your Passport"} is on the early access list</div>
              <div style={{ fontSize: 12, color: "var(--muted)" }}>We'll notify you the moment downloadable Passport images are ready to flash.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-primary" style={{ padding: "13px 26px", fontSize: 14 }}>Join early access waitlist →</button>
            <button className="btn-outline" onClick={() => setView("landing")} style={{ padding: "12px 22px", fontSize: 14 }}>Back to home</button>
          </div>
        </div>
      )}
    </div>
  );
}
