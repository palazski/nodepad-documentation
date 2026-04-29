export const CompareTable = ({ left, right, leftAccent, rightAccent }) => (
  <div className="np-compare-table">
    <div className="np-compare-col" data-accent={leftAccent || undefined}>
      <h3>{left.title}</h3>
      <ul>
        {left.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
    <div className="np-compare-col" data-accent={rightAccent || undefined}>
      <h3>{right.title}</h3>
      <ul>
        {right.points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  </div>
);
