import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface SectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, index, title, children }: SectionProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id={id} className="section reveal" ref={ref}>
      <header className="section__header">
        <span className="section__index">{index}</span>
        <h2 className="section__title">{title}</h2>
        <span className="section__rule" aria-hidden="true" />
      </header>
      {children}
    </section>
  );
}
