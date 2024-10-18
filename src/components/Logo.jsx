import { Link } from 'react-router-dom';

function Logo({ isMobile }) {
  return (
    <Link to="/">
      <img
        style={{ zIndex: 10, position: 'relative' }}
        src={
          isMobile
            ? '/assets/shared/mobile/logo.svg'
            : '/assets/shared/desktop/logo.svg'
        }
      />
    </Link>
  );
}

export default Logo;
