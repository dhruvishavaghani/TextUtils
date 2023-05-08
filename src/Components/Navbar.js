import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    
    //  <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid">
    <h2 className={`navbar-brand text-${props.c}`}>TextUtil</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="\navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.c}`}  aria-current="page" to="/TextForm">Get Start</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.c}`}>
    <input className="form-check-input" type="checkbox" onClick={props.pagemode} id="flexSwitchCheckChecked" unchecked/>
    <label className="form-check-label" htmlfor="flexSwitchCheckChecked">Dark Mode</label>
</div>
    </div>
  </div>
</nav>
    //  </div>
  )
}

