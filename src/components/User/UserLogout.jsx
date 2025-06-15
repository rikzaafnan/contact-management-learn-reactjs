import { useEffectOnce, useLocalStorage } from "react-use"
import {useNavigate} from "react-router"
import {userLogout} from "../../lib/api/UserApi"
import { useState } from "react";
export default function UserLogout () {
    
    const [token, setToken] = useLocalStorage("token", "")
    const navigate = useNavigate();

    async function handleLogout() {
    
        const response = await userLogout(token);
        const responseBody = await response.json();
        console.log(responseBody);

        if (response.status == 200) {

            setToken("")
            await navigate({
                pathname: "/login"
            })

        } else {
            await alertError(responseBody.errors);
            return;
        }

    }

    useEffectOnce(() => {
        handleLogout()
        .then(() => console.log("User logout successfully"))
    })

    return (
        <>
        
        </>
    )
}