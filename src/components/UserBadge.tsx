import { NavLink } from "react-router-dom"

export default function UserBadge(){
    return (
        <div className="flex-shrink-0 dropdown">
          <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small shadow">
            <li><NavLink className="dropdown-item" to="/car/new">Post Car</NavLink></li>
            <li><NavLink className="dropdown-item" to="/user/userId/settings">Settings</NavLink></li>
            <li><NavLink className="dropdown-item" to="/user/userId">Profile</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/user/userId/signout">Sign Out</NavLink></li>
          </ul>
        </div>
    )
}