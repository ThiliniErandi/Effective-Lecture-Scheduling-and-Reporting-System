
import axios from 'axios';


const verifyUser = (path, cookies, removeCookie) => {

    if (!cookies.jwt) {
        window.location = '/';
    } else {
        axios.post("http://localhost:8070/" + path, {}, {
            withCredentials: true
        }).then((res) => {
            if (res.status === 403 || res.status === 401) {
                removeCookie("jwt");
                window.location = '/';
            }
        })
    }

}

export default verifyUser;