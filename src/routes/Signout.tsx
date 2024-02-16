import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signout(){
    const signout = async() => {
        const navigate = useNavigate();
        await axios.post("http://localhost:14374/api/users/signout");
        navigate("/");
    }
    return signout();
}