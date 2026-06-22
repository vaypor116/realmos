"use client";
import { PassportConfig } from "@/lib/data";

interface Props {
  config: PassportConfig;
  setConfig: (c: PassportConfig) => void;
  onNext: () => void;
}

export default function StepSecurity({ config, setConfig, onNext }: Props) {
  const toggles = [
    {
      key: "includeSettings" as const,
      icon: "🎛",
      title: "Sync app settings & presets",
      desc: "Workspace layouts, brushes, LUTs, color profiles — carried exactly as you set them up.",
    },
    {
      key: "includeAssets" as const,
      icon: "📁",
      title: "Carry project assets",
      desc: "Footage, images, fonts and linked files travel with your project — not just the project file itself.",
    },
    {
      key: "wipeOnEject" as const,
      icon: "🧹",
      title: "Auto-wipe on eject",
      desc: "Recommended. Clears cache, temp renders and recent-file history from the host machine the moment you unplug.",
    },
  ];

  return (
    <div>
      <span className="section-label">Step 3 of 4</span>
      <h2 className="font-serif" style={{ fontSize: "clamp(26px, 3.8vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 10 }}>
        How should your Passport protect you?
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 40, maxWidth: 480 }}>
        Every borrowed laptop is someone else's machine. Here's exactly what stays under your control.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 44 }}>
        {toggles.map(t => {
          const active = config[t.key];
          return (
            <div key={t.key} onClick={() => setConfig({ ...config, [t.key]: !active })} style={{
              display: "flex", alignItems: "center", gap: 16, padding: "18px 20px",
              borderRadius: 16, cursor: "pointer",
              border: `1.5px solid ${active ? "var(--indigo)" : "var(--border)"}`,
              background: active ? "var(--indigo-pale)" : "var(--surface)",
              transition: "all 0.15s",
            }}>
              <div style={{ fontSize: 24 }}>{t.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)", marginBottom: 3 }}>{t.title}</div>
                <div style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.6 }}>{t.desc}</div>
              </div>
              {/* Toggle switch */}
              <div style={{ width: 44, height: 24, borderRadius: 100, background: active ? "var(--indigo)" : "var(--border-mid)", position: "relative", flexShrink: 0, transition: "background 0.2s" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: "white", position: "absolute", top: 3, left: active ? 23 : 3, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
              </div>
            </div>
          );
        })}
      </div>

      <button className="btn-primary" onClick={onNext} style={{ padding: "14px 32px", fontSize: 14 }}>
        Review my Passport →
      </button>
    </div>
  );
}
