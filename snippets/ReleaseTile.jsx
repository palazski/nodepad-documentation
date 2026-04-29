export const ReleaseTile = ({ version, date, title, children }) => (
  <article className="np-release-tile">
    <div className="meta">
      {version ? <span className="version">{version}</span> : null}
      {date ? <span className="date">{date}</span> : null}
    </div>
    {title ? <h3>{title}</h3> : null}
    <div className="body">{children}</div>
  </article>
);
