import { useLocalStorage } from "react-use"
import {useNavigate} from "react-router"
import {userLogout} from "../../lib/api/UserApi"
import { useState } from "react";
export default function UserLogout () {
    
    const [token, setToken] = useLocalStorage("token", "")
    const navigate = useNavigate();
    const [isSuccess, setIsSuccess] = useState(false)


    // console.log(token)

    async function handleUserLogout() {
        // console.log(token)
        alert()
    
        // const response = await userLogout(token);
        // const responseBody = await response.json();
        // console.log(responseBody);

        // if (response.status == 200) {
        //     setName(responseBody.data.name);
        // } else {
        //     await alertError(responseBody.errors);
        //     return;
        // }

    }

    handleUserLogout()

    return (
        <>
        
        </>
    )
}