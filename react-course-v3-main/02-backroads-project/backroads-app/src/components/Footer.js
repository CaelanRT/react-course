import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => {
          const { href, text } = link;
          return <PageLinks href={href} text={text} />;
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { href, className } = link;
          return <SocialLinks href={href} className={className} />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
