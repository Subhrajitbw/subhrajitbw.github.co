import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import $ from 'jquery'
function Header() {
  $(".btns").hover(function(){
    $(this).css("transform", "scale(1.2)")
    $(".buttons").children().not(this).css("transform", "scale(1)")
  })
  $(".btns").mouseout(function(){
    $(".buttons").children().css("transform", "scale(1)")
  })
  // $(".btns").mouseover(function(){
  //   $(this).css("transform", "scale(1)")
  // })
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
          <h1 className="m-0 text-primary">JobEntry</h1>
        </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className="nav-item nav-link" acti>Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            {/* <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="/job-list" className="dropdown-item">Job List</Link>
                <Link to="job-detail.html" className="dropdown-item">Job Detail</Link>
              </div>
            </div>
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
              <div className="dropdown-menu rounded-0 m-0">
                <Link to="category.html" className="dropdown-item">Job Category</Link>
                <Link to="testimonial.html" className="dropdown-item">Testimonial</Link>
                <Link to="404.html" className="dropdown-item">404</Link>
              </div>
            </div> */}
            <Link to="/job-list" className="nav-item nav-link">Jobs</Link>
            <Link to="/job-post" className="btn btn-primary rounded-0 py-4 px-lg-5 d-lg-block">Post A Job<i className="fa fa-arrow-right ms-3" /></Link>
          </div>
        </div>
      </nav>
      <div class="btn-group-vertical buttons" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary btns">Left</button>
        <button type="button" class="btn btn-secondary btns">Middle</button>
        <button type="button" class="btn btn-secondary btns">Right</button>
      </div>

    </div>
  )
}

export default Header