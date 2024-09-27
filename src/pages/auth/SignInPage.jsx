import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userServices from "services/users"
import { useState } from "react";

//<button onClick={() => {apiFetch("GET","/users")}}>find out</button>

export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation()

  return( 

    <FormContainer>
      <div className="text-red-600 max-w-72 text-center text-sm">{errorMessage}</div>
      {
        location.state?.newAccount &&
        <div className="text-emerald-800 bg-green-200 border border-emerald-800 font-bold p-4 rounded-lg text-center text-sm">
        User account created successfully! Sign in below.
      </div>}
        <AuthForm 
          submitMessage="Sign In"
          onSubmit={async (values) => {
            const response = await userServices.signInUser({username: values.username, password: values.password,})
            const data = await response.json()
            if (response.status == 201) {
              console.log("Sign-in successful!")
            } else {
              setErrorMessage(data.error);
            }
          }}
        
        />
        <Link to="/sign-up" className="text-sm text-green-500 underline hover:text-green-400">create a new account</Link>
    </FormContainer>

    )
}
