export const NumberedSteps = ({ items = [] }) => (
  <ol className="np-numbered-steps" style={{ listStyle: 'none', padding: 0 }}>
    {items.map((item, i) => {
      const num = item.number ?? String(i + 1).padStart(2, '0');
      return (
        <li key={i} className="np-numbered-step">
          <span className="num">{num}</span>
          <div className="body">
            {item.title ? <h3>{item.title}</h3> : null}
            {item.body ? <div>{item.body}</div> : null}
            {item.visual ? <div style={{ marginTop: '0.75rem' }}>{item.visual}</div> : null}
          </div>
        </li>
      );
    })}
  </ol>
);
