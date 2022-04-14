import axios from 'axios';

class AuthService {
    static register(body){
        return axios.post('/register', body);
    }

    static login(body){
        return axios.post('/login', body);
    }

    static loadingUsers(users) {
        return axios.get('/users', users);
    }

    static logout(navigate) {
        localStorage.removeItem('app_user_data');
        navigate('/homepage')
    }

    static delete(navigate, id) {
        axios.delete('/user', {data: { userId: id}})
        navigate('/homepage')
    }

    static storeUserData(user_data) {
        localStorage.setItem('app_user_data',JSON.stringify(user_data))
    }

    static getUserData() {
        let userData = localStorage.getItem('app_user_data');
        return userData ? JSON.parse(userData) : null;
    }
}

export default AuthService;