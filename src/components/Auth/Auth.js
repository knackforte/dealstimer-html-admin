export const isAuthenticated = () => {
    if (localStorage.getItem('isAuth') === null) {
        localStorage.setItem('isAuth', false);
    }
    return localStorage.getItem('isAuth');
};