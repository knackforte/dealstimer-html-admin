class Auth {
    isAuthenticated() {
        return localStorage.getItem("isAuth");
    }
}

export default new Auth();