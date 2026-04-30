export const DiagramFrame = ({ caption, children }) => (
  <figure className="np-figure">
    {children}
    {caption ? <figcaption>{caption}</figcaption> : null}
  </figure>
);
