
import axios from 'axios';


const verifyUser = (path, cookies, removeCookie) => {

    if (!cookies.jwt) {
        window.location = '/';
    } else {
        axios.post(`http://localhost:8070/${path}`, {}, {
            withCredentials: true
        }).then((res) => {
            if (res.status === 200) {
                removeCookie("jwt", { path: '/' });
                window.location = '/';
            }
        })
    }

}

export default verifyUser;