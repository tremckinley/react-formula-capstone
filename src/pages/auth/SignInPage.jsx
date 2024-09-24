import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link } from "react-router-dom";
import apiFetch from "../../services/apiFetch";

//<button onClick={() => {apiFetch("GET","/users")}}>find out</button>

export default function SignInPage() {
  return( 

    <FormContainer>
        <AuthForm submitMessage="Sign In" />
        <Link to="/sign-up" className="text-sm text-green-500 underline hover:text-green-400">create a new account</Link>
    </FormContainer>

    )
}
