import axios from 'axios';

const verifyUser = (path, cookies, removeCookie) => {

    if (!cookies.jwt) {
        alert("Invalid login");
        window.history.back()
    } else {
        axios.post(`http://localhost:8070/${path}`, {}, {
            withCredentials: true
        }).then((res) => {
            if (res.data.status === 404) {
                removeCookie("jwt", { path: '/' });
                window.location = '*';
            }
        })
    }

}

export default verifyUser;