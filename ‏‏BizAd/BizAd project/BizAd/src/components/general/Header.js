import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid row">
          <a className="navbar-brand text-white col-8 ms-5" href="#">
            <Link to="/" className="nav-link active">
              <i className="bi bi-shop"></i> BizAd
            </Link>
          </a>
          <a className="navbar-brand text-white col-1" href="#">
            <Link to="/Services" className="nav-link active">
              services
            </Link>
          </a>
          <a className="navbar-brand text-white col-1" href="#">
            <Link to="/About" className="nav-link active">
              about
            </Link>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
