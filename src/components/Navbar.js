// write rfc to get this export structure
//impt to import propt

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" to="/">Home</Link> */}
          <a className="nav-link active" href="#">Home</a>

        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}

        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.textMode}`}>
      <input className="form-check-input" type="checkbox" style={{backgroundColor: props.mode === 'dark'? '#212529':'white'}} onClick = {props.toggleMode} id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
    </div>
    </div>
  </div>
</nav>
  )
}

//to set props type we use propTypes
Navbar.propTypes = {
  title:PropTypes.string.isRequired, // we have to give value of title otherwise it will give error to do this we use is required
  aboutText:PropTypes.string
}

//to set default props value we use defaultptop property
Navbar.defaultProps = {
  title:"Set title here",
  aboutText:"type about here"
}
