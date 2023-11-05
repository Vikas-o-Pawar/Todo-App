export function getAuthToken() {
    const token = localStorage.getItem('token');

    if(token === null) {
        return null;
    }
    const duration = getTokenDuration();
    if(duration < 0) {
        return "EXPIRED"
    }
    return token
}

export function tokenLoader() {
    const token = getAuthToken();
    return token;
}

export function getTokenDuration() {
    // to get the remaining time in milliseconds after which the token will expire
    const storedExpirationDate = localStorage.getItem("expiration");

    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration
}