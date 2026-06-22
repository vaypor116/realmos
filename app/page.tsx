"use client";
import { useState } from "react";
import Landing from "@/components/Landing";
import Configurator from "@/components/Configurator";

export type View = "landing" | "configurator";

export default function Home() {
  const [view, setView] = useState<View>("landing");

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {view === "landing" && <Landing setView={setView} />}
      {view === "configurator" && <Configurator setView={setView} />}
    </main>
  );
}
