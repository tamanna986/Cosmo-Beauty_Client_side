import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // createing user

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // login user
const signIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email, password)
}

// // sign in with google

const signInWithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth , googleProvider)
}

// // observe user
// useEffect(() =>{
//     const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
//         setUser(currentUser)
//         setLoading(false);
//         console.log('setted new user is ' , currentUser)
//        })
//        return () =>{
//         unSubscribe();
//        }
// } ,[])

     useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth , currentUser =>{
    setUser(currentUser)
    setLoading(false);
    console.log('setted user is' , currentUser)
     })
     return () =>{
        unSubscribe();
     }

},[])

    // log out
    const logOut = () =>{
        
        return signOut(auth)
      }

    const userInfo = {
        user,
        createUser,
        loading,
        signIn,
        signInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;