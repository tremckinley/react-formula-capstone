import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link } from "react-router-dom";

export default function SignInPage() {
  return( 

    <FormContainer>
        <AuthForm submitMessage="Sign In" />
    </FormContainer>

    )
}
