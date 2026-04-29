export const SectionHeading = ({ eyebrow, title, level = 2 }) => {
  const Heading = `h${level}`;
  return (
    <header style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
      {eyebrow ? (
        <span className="np-eyebrow" style={{ display: 'block', marginBottom: '0.375rem' }}>
          {eyebrow}
        </span>
      ) : null}
      <Heading style={{ margin: 0 }}>{title}</Heading>
    </header>
  );
};
