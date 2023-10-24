import { tokenLoader } from "./token";

export default function useCheckLoggedIn() {
    // if the user is not logged in,then false will be returend
    const token = tokenLoader();

    if(token !== null) {
        return true
    }

    return false;
}

