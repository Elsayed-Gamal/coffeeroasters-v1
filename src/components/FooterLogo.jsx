import { Link } from 'react-router-dom';

function FooterLogo() {
  return (
    <Link to="/" style={{ display: 'flex', justifyContent: 'center' }}>
      <img src="/assets/shared/desktop/footer-logo.svg" />
    </Link>
  );
}

export default FooterLogo;
