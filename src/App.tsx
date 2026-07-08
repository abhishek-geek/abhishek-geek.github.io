import profileData from "./data/me.json";
import type { Profile } from "./types";
import { DESIGN_VARIANT } from "./config/design";
import ClassicApp from "./variants/ClassicApp";
import ArcadeApp from "./arcade/ArcadeApp";

const profile = profileData as Profile;

/**
 * Picks the design variant at build time from `src/config/design.ts`.
 * Both variants render the same `me.json` data.
 */
export default function App() {
  if (DESIGN_VARIANT === "arcade") {
    return <ArcadeApp profile={profile} />;
  }
  return <ClassicApp profile={profile} />;
}
