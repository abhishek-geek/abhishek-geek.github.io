/**
 * Design variant switch.
 *
 * The site ships ONE look per build. Flip `DEFAULT_VARIANT` below and rebuild
 * to swap the entire site between the classic portfolio and the arcade
 * (gamified) portfolio. Both variants read the same data from `me.json`.
 *
 * Optional build-time override (wins over the const): set the env var, e.g.
 *   VITE_DESIGN=classic npm run build
 *   VITE_DESIGN=arcade  npm run build
 *
 * The expression below is written so Vite/esbuild can fold it to a single
 * string literal at build time — the unused variant's component tree is then
 * dead-code-eliminated from the bundle rather than merely skipped at runtime.
 */
export type DesignVariant = "classic" | "arcade";

// 👇 Flip this line to switch the default build variant.
const DEFAULT_VARIANT = "arcade";

export const DESIGN_VARIANT = (import.meta.env.VITE_DESIGN === "classic" ||
import.meta.env.VITE_DESIGN === "arcade"
  ? import.meta.env.VITE_DESIGN
  : DEFAULT_VARIANT) as DesignVariant;
