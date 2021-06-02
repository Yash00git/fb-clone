import { Button } from '@material-ui/core';
import React from 'react'
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer"
import { useStateValue } from './StateProvider';

function Login() {
    const[state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {

            dispatch({
                type:actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result);
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
            <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />

                <img
                    src="http://www.lytics.com/wp-content/uploads/2021/01/Facebook-Logo.png"
                    alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>Sign In </Button>

        </div>
    )
}

export default Login
