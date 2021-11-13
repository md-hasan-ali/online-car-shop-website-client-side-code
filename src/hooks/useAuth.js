// Import Necessary file 
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

// User Auth Hooks
const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
}
export default useAuth;