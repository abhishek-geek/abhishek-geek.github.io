/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional build-time design override: "classic" | "arcade". */
  readonly VITE_DESIGN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
