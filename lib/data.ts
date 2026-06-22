export interface CreativeApp {
  id: string;
  name: string;
  category: "Design" | "Video" | "Audio";
  icon: string;
  fileTypes: string[];
  desc: string;
}

export const creativeApps: CreativeApp[] = [
  { id: "premiere", name: "Premiere Pro", category: "Video", icon: "🎬", fileTypes: [".prproj"], desc: "Timelines, sequences, color presets" },
  { id: "resolve", name: "DaVinci Resolve", category: "Video", icon: "🎞", fileTypes: [".drp"], desc: "Color grades, LUTs, fusion comps" },
  { id: "aftereffects", name: "After Effects", category: "Video", icon: "✨", fileTypes: [".aep"], desc: "Compositions, motion presets" },
  { id: "photoshop", name: "Photoshop", category: "Design", icon: "🖼", fileTypes: [".psd"], desc: "Brushes, actions, layer styles" },
  { id: "illustrator", name: "Illustrator", category: "Design", icon: "🖊", fileTypes: [".ai"], desc: "Swatches, brushes, templates" },
  { id: "figma", name: "Figma (local files)", category: "Design", icon: "🎨", fileTypes: [".fig"], desc: "Local drafts and component libraries" },
  { id: "lightroom", name: "Lightroom Classic", category: "Design", icon: "📷", fileTypes: [".lrcat"], desc: "Catalogs, presets, edit history" },
  { id: "audition", name: "Audition", category: "Audio", icon: "🎙", fileTypes: [".sesx"], desc: "Sessions, effect chains" },
];

export interface PassportConfig {
  name: string;
  role: "designer" | "editor" | "both" | null;
  selectedApps: string[];
  includeSettings: boolean;
  includeAssets: boolean;
  wipeOnEject: boolean;
}

export const securityFeatures = [
  { icon: "🔒", title: "Encrypted at rest", desc: "Your files are encrypted the moment they touch the drive. Unreadable without your passport key." },
  { icon: "🧹", title: "Zero trace on eject", desc: "Every cache file, every temp render, every recent-file entry — wiped from the host machine automatically." },
  { icon: "🚫", title: "No installs required", desc: "We never install software on a borrowed machine. We only use what's already there, then leave." },
  { icon: "👁", title: "You see what syncs", desc: "Nothing moves without your approval. Review exactly what's being carried before you eject." },
];

export const steps = [
  { n: "01", title: "Plug in anywhere", desc: "Insert your Creative Passport into any laptop with your software already installed." },
  { n: "02", title: "Your projects appear", desc: "Your files, presets and workspace layout load — exactly as you left them." },
  { n: "03", title: "Work at full power", desc: "Edit using their hardware. Render, export, design — borrowed power, your files." },
  { n: "04", title: "Eject. Vanish.", desc: "Pull the drive. Every trace of your session disappears from their machine instantly." },
];
