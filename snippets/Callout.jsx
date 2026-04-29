export const Callout = ({ tone = 'note', accent, title, children }) => {
  const accentToColor = {
    fork: 'var(--color-edge-fork)',
    merge: 'var(--color-edge-merge)',
    reference: 'var(--color-edge-reference)',
    continuation: 'var(--color-edge-continuation)',
  };
  const toneToColor = {
    note: 'var(--ring)',
    info: 'var(--ring)',
    tip: 'var(--color-edge-merge)',
    check: 'var(--color-edge-merge)',
    warning: 'var(--destructive)',
    danger: 'var(--destructive)',
  };
  const borderColor = accent ? accentToColor[accent] : toneToColor[tone];
  const style = {
    borderRadius: 'var(--radius-lg)',
    background: 'var(--card)',
    border: '1px solid var(--border)',
    borderLeft: `3px solid ${borderColor}`,
    padding: '0.875rem 1rem',
    margin: '1rem 0',
  };
  return (
    <div style={style}>
      {title ? (
        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{title}</strong>
      ) : null}
      <div style={{ color: 'var(--muted-foreground)', fontSize: '0.95em' }}>{children}</div>
    </div>
  );
};
