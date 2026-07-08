import { useEffect, useMemo } from "react";
import type { Profile } from "../types";
import { buildArcadeContent } from "./content";
import { useArcadeReveal } from "./useArcadeReveal";
import ArcadeNav from "./ArcadeNav";
import Character from "./sections/Character";
import Ticker from "./sections/Ticker";
import QuestLog from "./sections/QuestLog";
import TrophyRoom from "./sections/TrophyRoom";
import SkillTree from "./sections/SkillTree";
import SideQuests from "./sections/SideQuests";
import Party from "./sections/Party";
import "./arcade.css";

interface ArcadeAppProps {
  profile: Profile;
}

/** The arcade (gamified) portfolio layout. */
export default function ArcadeApp({ profile }: ArcadeAppProps) {
  const content = useMemo(() => buildArcadeContent(profile), [profile]);
  const rootRef = useArcadeReveal<HTMLDivElement>();

  // Swap the browser-tab icon to the arcade "AD" hex badge for this variant.
  useEffect(() => {
    const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!link) return;
    const previous = { href: link.href, type: link.getAttribute("type") };
    link.setAttribute("type", "image/svg+xml");
    link.href = "/favicon-arcade.svg";
    return () => {
      link.href = previous.href;
      if (previous.type) link.setAttribute("type", previous.type);
    };
  }, []);
  const handle = `${profile.personalDetails.name.first[0]}. ${profile.personalDetails.name.last}`.toUpperCase();

  return (
    <div className="arcade" ref={rootRef}>
      <div className="arcade__scan" aria-hidden="true" />
      <div className="arcade__vignette" aria-hidden="true" />

      <ArcadeNav handle={handle} />

      <main id="top" className="arcade__main">
        <Character content={content} />
        <Ticker items={content.ticker} />
        <QuestLog quests={content.quests} />
        <TrophyRoom trophies={content.trophies} />
        <SkillTree categories={content.skills} />
        <SideQuests sideQuests={content.sideQuests} />
        <Party content={content} />
      </main>
    </div>
  );
}
