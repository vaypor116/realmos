"use client";
import { useState } from "react";
import { View } from "@/app/page";
import { PassportConfig, creativeApps } from "@/lib/data";
import StepRole from "@/components/StepRole";
import StepApps from "@/components/StepApps";
import StepSecurity from "@/components/StepSecurity";
import StepPreview from "@/components/StepPreview";

type Step = "role" | "apps" | "security" | "preview";
const steps: Step[] = ["role", "apps", "security", "preview"];
const stepLabels: Record<Step, string> = { role: "You", apps: "Your tools", security: "Protection", preview: "Your Passport" };

interface Props { setView: (v: View) => void; }

export default function Configurator({ setView }: Props) {
  const [step, setStep] = useState<Step>("role");
  const [config, setConfig] = useState<PassportConfig>({
    name: "",
    role: null,
    selectedApps: [],
    includeSettings: true,
    includeAssets: true,
    wipeOnEject: true,
  });

  const currentIndex = steps.indexOf(step);
  const goNext = () => { if (currentIndex < steps.length - 1) setStep(steps[currentIndex + 1]); };
  const goBack = () => { if (currentIndex === 0) setView("landing"); else setStep(steps[currentIndex - 1]); };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg)" }}>
      <div style={{ padding: "20px 28px", borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={goBack} style={{ background: "none", border: "none", color: "var(--muted)", fontSize: 13, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "Cabinet Grotesk" }}>
            ← Back
          </button>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {steps.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: i <= currentIndex ? "var(--indigo)" : "var(--border-mid)", transition: "background 0.3s" }} />
                {i < steps.length - 1 && <div style={{ width: 24, height: 1, background: i < currentIndex ? "var(--indigo)" : "var(--border)" }} />}
              </div>
            ))}
          </div>
          <div className="font-mono" style={{ fontSize: 11, color: "var(--muted)" }}>{currentIndex + 1} / {steps.length} · {stepLabels[step]}</div>
        </div>
      </div>

      <div style={{ flex: 1, padding: "56px 28px" }}>
        <div key={step} className="fade-up" style={{ maxWidth: 820, margin: "0 auto" }}>
          {step === "role" && <StepRole config={config} setConfig={setConfig} onNext={goNext} />}
          {step === "apps" && <StepApps config={config} setConfig={setConfig} onNext={goNext} />}
          {step === "security" && <StepSecurity config={config} setConfig={setConfig} onNext={goNext} />}
          {step === "preview" && <StepPreview config={config} setView={setView} />}
        </div>
      </div>
    </div>
  );
}
