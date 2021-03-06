import firebaseInitialization from "../Pages/firebase/initializeFirebase";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// firebase initialize
firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoadding] = useState(true)
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    // Register User 
    const registerUser = (email, password, name, history) => {
        setIsLoadding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // update name and send to firebase 
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    history.push('/home')
                    savedUser(email, name)
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

    //admin 
    useEffect(() => {
        fetch(`https://afternoon-oasis-56615.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // sign out user 
    const logout = (history) => {
        // setIsLoadding(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            history.push('/home')
        })
            .catch((error) => {
                // An error happened.
                setError(error.message)
            })
            .finally(() => setIsLoadding(false));
    }
    const savedUser = (email, displayName) => {
        const user = { email, displayName }
        fetch('https://afternoon-oasis-56615.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return {
        registerUser, user, error, logout, loginUser, isLoading, admin
    }

};

export default useFirebase;