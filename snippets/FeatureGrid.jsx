export const FeatureGrid = ({ cols = 2, accent, items = [] }) => (
  <div
    className="np-feature-grid"
    data-cols={String(cols)}
    data-accent={accent || undefined}
  >
    {items.map((item, i) => {
      const Tag = item.href ? 'a' : 'div';
      return (
        <Tag key={i} className="np-feature-tile" href={item.href}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.body ? <p>{item.body}</p> : null}
        </Tag>
      );
    })}
  </div>
);
