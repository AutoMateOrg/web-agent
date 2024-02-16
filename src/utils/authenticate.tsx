import axios from "axios";

const authenticate = async(email: string, password: string) => {
    const res = await axios.post("http://localhost:14374/api/users/signin", { 
          email: email,
          password: password
    },{withCredentials: true})
    return res.headers["Set-Cookie"]
} 

export default authenticate;