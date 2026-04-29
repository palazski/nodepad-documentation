export const ProductScreenshot = ({ light, dark, alt = '', caption }) => (
  <figure className="np-figure">
    <img src={light} alt={alt} className="block dark:hidden" />
    <img src={dark || light} alt={alt} className="hidden dark:block" />
    {caption ? <figcaption>{caption}</figcaption> : null}
  </figure>
);
