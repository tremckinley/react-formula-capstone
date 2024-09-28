import { useContext, useEffect } from "react";
import SessionContext from "contexts/SessionContext";
import { useNavigate } from "react-router-dom";

export default function SignInRedirect(props) {

    const { sessionUsername } = useContext(SessionContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (sessionUsername !== null) {
            navigate("/plants")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionUsername])

    // if signed in, redirect to plant list page
    // otherwise, render children.
    return (
        props.children
    )
};