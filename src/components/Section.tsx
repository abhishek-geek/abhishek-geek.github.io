import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
}

export default function Section({ id, index, label, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={id} className="section">
      <header className="section__header reveal" ref={ref}>
        <span className="section__index">({index})</span>
        <h2 className="section__label">{label}</h2>
      </header>
      {children}
    </section>
  );
}
