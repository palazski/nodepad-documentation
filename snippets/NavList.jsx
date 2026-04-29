export const NavList = ({ items = [] }) => (
  <ul className="np-navlist">
    {items.map((item, i) => (
      <li key={i}>
        <a href={item.href}>
          <span>
            <span className="title">{item.title}</span>
            {item.body ? <span className="body">{item.body}</span> : null}
          </span>
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </li>
    ))}
  </ul>
);
