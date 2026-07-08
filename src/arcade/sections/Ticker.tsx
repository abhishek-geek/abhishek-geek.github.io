interface TickerProps {
  items: string[];
}

export default function Ticker({ items }: TickerProps) {
  // The track is rendered twice back-to-back so the -50% marquee loop is seamless.
  const renderTrack = (hidden: boolean) => (
    <span style={{ display: "inline-flex" }} aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span className="arcade__ticker-item" key={`${hidden ? "b" : "a"}-${i}`}>
          {item}
          <span aria-hidden="true">◆</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="arcade__ticker">
      <div className="arcade__ticker-track">
        {renderTrack(false)}
        {renderTrack(true)}
      </div>
    </div>
  );
}
