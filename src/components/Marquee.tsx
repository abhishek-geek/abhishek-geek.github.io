interface MarqueeProps {
  items: string[];
}

function Track({ items, hidden }: { items: string[]; hidden?: boolean }) {
  return (
    <span className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={item} className="marquee__item">
          {item}
          <span className="marquee__star" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </span>
  );
}

export default function Marquee({ items }: MarqueeProps) {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <Track items={items} />
        <Track items={items} hidden />
      </div>
    </div>
  );
}
