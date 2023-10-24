export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(token === null) {
        return null;
    }
    return token
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}