import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const {title} = props;

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <a href="/" className="navbar-brand">{title}</a>
        </div>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link"> <i className="fa fa-home"></i>Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/addContact" className="nav-link"> <i className="fa fa-plus"></i>Add</Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link"> <i className="fa fa-question"></i>About</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}



export default Header;
