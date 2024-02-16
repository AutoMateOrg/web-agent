import automate from "../assets/automate.png";
import { NavLink } from "react-router-dom";
import Badge from "./Badge";
import { useEffect } from "react";
import axios from "axios";
import useRequest from "../hooks/use-request";

export default function Nav() {
    useEffect(() => {
        const currentUser = useRequest();
        console.log(currentUser);
    })
    return (
        <nav className="navbar navbar-expand-lg bg-dark bg-body-terti ary" data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={automate} className="rounded-circle" width="30px" height="30px"/></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Cars
                        </a>
                        <ul className="dropdown-menu">
                            <li><NavLink className="dropdown-item" to="/cars">Puchase New</NavLink></li>
                            <li><NavLink className="dropdown-item" to="/cars">Purchase Used</NavLink></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><NavLink className="dropdown-item" to="/cars/explore">Explore Alls</NavLink></li>
                        </ul>
                    </li>    
                </ul>
                </div>
                <Badge currentUser="null" />
            </div>
            
        </nav>
    )
}