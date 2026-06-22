"use client";
import { PassportConfig } from "@/lib/data";

interface Props {
  config: PassportConfig;
  setConfig: (c: PassportConfig) => void;
  onNext: () => void;
}

const roles = [
  { id: "designer" as const, emoji: "🎨", title: "I'm a Designer", desc: "Photoshop, Illustrator, Lightroom, Figma" },
  { id: "editor" as const, emoji: "🎬", title: "I'm an Editor", desc: "Premiere Pro, DaVinci Resolve, After Effects" },
  { id: "both" as const, emoji: "✨", title: "I do both", desc: "Design and edit — carry everything" },
];

export default function StepRole({ config, setConfig, onNext }: Props) {
  return (
    <div>
      <span className="section-label">Step 1 of 4</span>
      <h2 className="font-serif" style={{ fontSize: "clamp(26px, 3.8vw, 38px)", fontWeight: 600, letterSpacing: "-1px", color: "var(--ink)", marginBottom: 10 }}>
        Tell us who you are.
      </h2>
      <p style={{ fontSize: 15, color: "var(--muted)", marginBottom: 40, maxWidth: 480 }}>
        This shapes which apps and presets we look for when building your Passport.
      </p>

      <div style={{ marginBottom: 36 }}>
        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--ink-mid)", marginBottom: 8 }}>Name your Passport</label>
        <input
          value={config.name}
          onChange={e => setConfig({ ...config, name: e.target.value })}
          placeholder="e.g. Rinji's Creative Passport"
          style={{ width: "100%", maxWidth: 380, background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 10, padding: "13px 16px", color: "var(--ink)", fontSize: 14, fontFamily: "Cabinet Grotesk", outline: "none" }}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = "var(--indigo)"; }}
          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = "var(--border)"; }}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 44 }}>
        {roles.map(r => {
          const selected = config.role === r.id;
          return (
            <div key={r.id} onClick={() => setConfig({ ...config, role: r.id })} style={{
              cursor: "pointer", padding: "24px 20px", borderRadius: 16,
              border: `1.5px solid ${selected ? "var(--indigo)" : "var(--border)"}`,
              background: selected ? "var(--indigo-pale)" : "var(--surface)",
              transition: "all 0.15s",
            }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{r.emoji}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", marginBottom: 5 }}>{r.title}</div>
              <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.5 }}>{r.desc}</div>
            </div>
          );
        })}
      </div>

      <button className="btn-primary" onClick={onNext} disabled={!config.name || !config.role} style={{ padding: "14px 32px", fontSize: 14, opacity: (config.name && config.role) ? 1 : 0.5, cursor: (config.name && config.role) ? "pointer" : "not-allowed" }}>
        Continue →
      </button>
    </div>
  );
}
