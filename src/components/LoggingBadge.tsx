import { NavLink } from "react-router-dom";

export default function LoggingBadge(){
    return (
        <div className="text-end">
            <NavLink to="/signin" type="button" className="btn btn-outline-light me-2">Login</NavLink>
            <NavLink to="/signup" type="button" className="btn btn-warning">Sign-up</NavLink>
        </div> 
    )
}