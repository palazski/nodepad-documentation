export const EdgeChip = ({ type = 'continuation', children }) => (
  <span className="np-edge-chip" data-type={type}>
    <span className="dot" aria-hidden="true" />
    {children}
  </span>
);
