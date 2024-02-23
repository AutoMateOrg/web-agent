import axios from "axios";
import { redirect } from "react-router-dom";

const Signout = async() => {
    const res = await axios.post("http://localhost:14374/api/users/signout");
    // console.log(res);
    if (res.status === 200) {
        return redirect("/");
    }
    
}

export default Signout;