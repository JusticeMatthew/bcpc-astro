import { Link } from 'react-scroll';

export default function ScrollLink({
  to = null,
  offset = 0,
  styles = '',
  activeStyles = '',
  children,
}) {
  return (
    <Link
      href="/"
      to={to}
      offset={offset}
      spy={true}
      smooth={true}
      isDynamic={true}
      duration={500}
      className={styles}
      activeClass={activeStyles}
    >
      {children}
    </Link>
  );
}
