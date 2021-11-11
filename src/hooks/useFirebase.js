import firebaseInitialization from "../Pages/firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initialize
firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoadding] = useState(true)

    const auth = getAuth();
    // Register User 
    const registerUser = (email, password, name) => {
        setIsLoadding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // update name and send to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })

            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));
    }
    // Login User 
    const loginUser = (email, password, location, history) => {
        setIsLoadding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                console.log(destination)
                history.replace(destination)
                const user = result.user;
                console.log(user)
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoadding(false));

    }
    // observer user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoadding(false)
        });
        return () => unSubscribe;
    }, [])

    // sign out user 
    const logout = () => {
        // setIsLoadding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        })
            .finally(() => setIsLoadding(false));
    }


    return {
        registerUser, user, error, logout, loginUser, isLoading
    }

};

export default useFirebase;