import { useState, useEffect } from "react";

export default function useToken() {
    function getToken() {
        let userToken; 

        useEffect(() => {
            userToken = localStorage.getItem("token") || "";
        }, []);
        return userToken
    }

    const [token, setToken] = useState(getToken());

    function saveToken(userToken) {
        localStorage.setItem("token", userToken);
        setToken(userToken);
    }

    function removeToken() {
        localStorage.removeItem("token");
        setToken(null);
    }

    return {
        setToken: saveToken,
        token,
        removeToken,
    };
}
