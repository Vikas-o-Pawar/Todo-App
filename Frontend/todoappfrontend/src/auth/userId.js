export function getUserID() {
    const userID = localStorage.getItem("userId");

    if(userID != null) {
        return userID
    }

    return null
}