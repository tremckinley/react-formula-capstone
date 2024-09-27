import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userServices from "services/users"
import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext";

//<button onClick={() => {apiFetch("GET","/users")}}>find out</button>

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation()
  const sessionContext = useContext(SessionContext);
  const sessionUsername = sessionContext.sessionUsername;
  return( 

    <FormContainer>
      <div className="text-red-600 max-w-72 text-center text-sm">{errorMessage}</div>
      {
        location.state?.newAccount &&
        <div className="text-emerald-800 bg-green-200 border border-emerald-800 font-bold p-4 rounded-lg text-center text-sm">
        User account created successfully! Sign in below.
        </div>
      }
      {
        sessionUsername &&
        <div className="text-blue-800 bg-blue-200 border border-blue-800 font-bold p-4 rounded-lg text-center text-sm">{`${sessionUsername}, you are signed in!`}</div>
      }
        <AuthForm 
          submitMessage="Sign In"
          onSubmit={async (values) => {
            const response = await userServices.signInUser({username: values.username, password: values.password,})
            const data = await response.json()
            if (response.status == 201) {
              setErrorMessage('')
              console.log("Sign-in successful!")
              console.log(data)
              sessionContext.signIn(data.capstone_session_token);
              console.log(sessionContext.sessionUsername)
            } else {
              setErrorMessage(data.error);
            }
          }}
        
        />
        <Link to="/sign-up" className="text-sm text-green-500 underline hover:text-green-400">create a new account</Link>
    </FormContainer>

    )
}
