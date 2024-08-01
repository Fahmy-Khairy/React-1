import { Link, NavLink } from "react-router-dom"


export default function Navbar() {
 

  
  return (

    <>
    <nav id="navbar-example" className="navbar navbar-expand-xl my-bg fixed-top">
  <div className="container">
    <Link className="navbar-brand fs-1 fw-fw-bold" to="home">Start Framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav ms-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <NavLink className="nav-link fs-3"  to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-3" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link fs-3" to="contact">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>

  )
}
