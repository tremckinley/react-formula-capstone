import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const SignOutRedirect = (props) => {
    const {sessionUsername} = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionUsername == null) {
            navigate("/", {
                state: {
                    signedOut: true
                }
            });
        }
    }, [sessionUsername])

    return props.children;
};

export default SignOutRedirect;