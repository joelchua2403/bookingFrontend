import { createContext, useState, useEffect  } from "react";
import jwt_decode from "jwt-decode";
import { useRouter } from 'next/navigation';

 const AuthContext = createContext();

 export default AuthContext;

 export const AuthProvider = ({ children }) => {

    const router = useRouter();
    
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    let [user, setUser] = useState(localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null )
    let [authTokens, setAuthTokens] = useState(localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null ) 


    const loginUser = async (e) => {
        e.preventDefault()
        console.log("form submitted")
        setIsLoggedOut(false)

        let res = await fetch("http://localhost:8000/api/token/", {
            method: 'POST',
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await res.json()
        if (res.status === 200) {
        setAuthTokens(data)
        setUser(jwt_decode(data.access))
        localStorage.setItem('authTokens', JSON.stringify(data))
        router.push('/')
    } else {
        alert('Login failed. Please try again.')
        router.push('/login')
    }
    }

    let contextData = {
        user: user,
        loginUser: loginUser,
        isLoggedOut: isLoggedOut,
        setIsLoggedOut: setIsLoggedOut
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
    }