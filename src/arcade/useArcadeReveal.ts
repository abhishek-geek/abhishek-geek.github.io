import { useEffect, useRef } from "react";

/**
 * Drives the arcade scroll choreography inside a container:
 *  - `[data-reveal]` elements fade/slide in when scrolled into view.
 *  - `[data-fill]` bars animate their width to `data-fill`% when visible.
 *
 * Honours `prefers-reduced-motion` by showing everything immediately.
 * Returns a ref to attach to the container element.
 */
export function useArcadeReveal<T extends HTMLElement>() {
  const rootRef = useRef<T | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reveals = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const bars = Array.from(root.querySelectorAll<HTMLElement>("[data-fill]"));

    const fill = (el: HTMLElement) => {
      el.style.width = `${el.getAttribute("data-fill") ?? "0"}%`;
    };
    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    };

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || typeof IntersectionObserver === "undefined") {
      reveals.forEach(show);
      bars.forEach(fill);
      return;
    }

    reveals.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(22px)";
      el.style.transition =
        "opacity .6s cubic-bezier(.2,.7,.2,1), transform .6s cubic-bezier(.2,.7,.2,1)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-fill")) fill(el);
          else show(el);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
    bars.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return rootRef;
}
