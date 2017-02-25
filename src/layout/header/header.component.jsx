import React from 'react';
import { Link, IndexLink } from 'react-router';
const active = { color: '#f99932' }

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <IndexLink to="/" className="navbar-brand">Test</IndexLink>
          <div className="collapse navbar-collapse collapse show justify-content-end" id="navbarCollapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <IndexLink to="/" activeStyle={active} className="nav-link">Home</IndexLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
