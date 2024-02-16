import axios from "axios";

// const useRequest = ({ url, method, body }) => {
//     const doRequest = async () => {
//         const response = await axios[method](url, body, {withCredentials: true});
//         return response.data;
//     }
//     return { doRequest }
// }

const useRequest = async() => {
    const reponse = await axios.get("http://localhost:14374/api/users/currentuser", {withCredentials: true});
    return reponse.data.currentUser;
}

export default useRequest;
    