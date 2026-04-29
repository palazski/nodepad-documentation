export const HeroBlock = ({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
}) => (
  <section className="np-hero">
    <div>
      {eyebrow ? <span className="np-eyebrow">{eyebrow}</span> : null}
      <h1>{title}</h1>
      {subtitle ? <p className="lead">{subtitle}</p> : null}
      {(primaryCta || secondaryCta) ? (
        <div className="ctas">
          {primaryCta ? (
            <a className="np-cta np-cta-primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
          ) : null}
          {secondaryCta ? (
            <a className="np-cta np-cta-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
    {children ? <div>{children}</div> : null}
  </section>
);
