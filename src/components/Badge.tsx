import { NavLink } from "react-router-dom";

export default function Badge(props: any){

    if (props.currentUser === undefined) {
      return (
        <div className="text-end">
            <NavLink to="/signin" type="button" className="btn btn-outline-light me-2">Login</NavLink>
            <NavLink to="/signup" type="button" className="btn btn-warning">Sign-up</NavLink>
        </div> 
    )
    } else if (props.currentUser) {
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
}