"use client";
import { creativeApps, PassportConfig } from "@/lib/data";

interface Props {
  config: PassportConfig;
  setConfig: (c: PassportConfig) => void;
  onNext: () => void;
}

export default function StepApps({ config, setConfig, onNext }: Props) {
  const relevantApps = config.role === "designer" ? creativeApps.filter(a => a.category === "Design")
    : config.role === "editor" ? creativeApps.filter(a => a.category === "Video" || a.category === "Audio")
    : creativeApps;

  const toggle = (id: string) => {
    if (config.selectedApps.includes(id)) {
      setConfig({ ...config, selectedApps: config.selectedApps.filter(a => a !== id) });
    } else {
      setConfig({ ...config, selectedApps: [...config.selectedApps, id] });
    }
  };

  return (
    <div>
      <span className="section-label">Step 2 of 4</span>
      <h2 className="font-serif" style={{ fontSize: "clamp(26px, 3.8vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 10 }}>
        Which apps should your Passport carry?
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 40, maxWidth: 480 }}>
        We'll sync your projects, presets and workspace layout for each one. The host laptop just needs the app already installed.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginBottom: 40 }}>
        {relevantApps.map(app => {
          const selected = config.selectedApps.includes(app.id);
          return (
            <div key={app.id} onClick={() => toggle(app.id)} style={{
              display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 18px",
              borderRadius: 14, cursor: "pointer",
              border: `1.5px solid ${selected ? "var(--indigo)" : "var(--border)"}`,
              background: selected ? "var(--indigo-pale)" : "var(--surface)",
              transition: "all 0.15s",
            }}>
              <div style={{ fontSize: 24 }}>{app.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 2 }}>{app.name}</div>
                <div className="font-mono" style={{ fontSize: 10, color: "var(--indigo)", marginBottom: 4 }}>{app.fileTypes.join(", ")}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{app.desc}</div>
              </div>
              <div style={{ width: 18, height: 18, borderRadius: 6, flexShrink: 0, border: `1.5px solid ${selected ? "var(--indigo)" : "var(--border-mid)"}`, background: selected ? "var(--indigo)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>
                {selected && "✓"}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <button className="btn-primary" onClick={onNext} disabled={config.selectedApps.length === 0} style={{ padding: "14px 32px", fontSize: 14, opacity: config.selectedApps.length ? 1 : 0.5, cursor: config.selectedApps.length ? "pointer" : "not-allowed" }}>
          Continue →
        </button>
        <span className="font-mono" style={{ fontSize: 12, color: "var(--muted)" }}>{config.selectedApps.length} apps selected</span>
      </div>
    </div>
  );
}
