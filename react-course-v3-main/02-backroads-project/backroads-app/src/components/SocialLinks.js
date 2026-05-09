const SocialLinks = (props) => {
  const { href, className } = props;
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
        <i className={className}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
