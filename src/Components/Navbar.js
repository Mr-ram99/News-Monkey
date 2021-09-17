import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export  class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#007784"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/"><strong>News Monkey</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/sports">Sports</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-dark m-1 p-1" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}
export default Navbar