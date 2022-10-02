import React from "react";
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const logout = ()=>{
    localStorage.removeItem('token');
    history.push('/login');
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          PJ News
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto" />
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/readNow">
                Read Now
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/searchnews">
                {localStorage.getItem("username")} &nbsp;
              </Link>
            </li>
            <li>
              <button onClick={logout}
                className="button"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >             
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
