import React from 'react';
import '../App.css';

const Header = (props) => {

  const {title} = props;

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">{title}</a>
        </div>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
          </ul>
        </div>
      </nav>
  );
}



export default Header;
