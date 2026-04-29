export const ProductScreenshot = ({ light, dark, alt = '', caption, aspect }) => {
  const wrapperStyle = aspect ? { aspectRatio: aspect } : undefined;
  return (
    <figure className="np-diagram-frame" style={{ margin: '1.5rem 0' }}>
      <div style={wrapperStyle}>
        <img src={light} alt={alt} className="block dark:hidden" />
        <img src={dark || light} alt={alt} className="hidden dark:block" />
      </div>
      {caption ? <figcaption className="np-diagram-caption">{caption}</figcaption> : null}
    </figure>
  );
};
