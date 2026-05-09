const PageLinks = (props) => {
  const { href, text } = props;
  return (
    <li>
      <a href={href} className="footer-link">
        {text}
      </a>
    </li>
  );
};
export default PageLinks;
