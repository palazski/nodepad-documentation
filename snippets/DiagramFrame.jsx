export const DiagramFrame = ({ caption, aspect, children }) => {
  const style = aspect ? { aspectRatio: aspect } : undefined;
  return (
    <figure className="np-diagram-frame" style={{ margin: '1.5rem 0' }}>
      <div style={style}>{children}</div>
      {caption ? <figcaption className="np-diagram-caption">{caption}</figcaption> : null}
    </figure>
  );
};
