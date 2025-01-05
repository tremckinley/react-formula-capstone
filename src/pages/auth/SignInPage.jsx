import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link, useLocation } from "react-router-dom";
import * as userServices from "services/users"
import SignInRedirect from "shared-components/SignInRedirect";
import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext";


export default function SignInPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const location = useLocation()
  const sessionContext = useContext(SessionContext);

  return (
    <SignInRedirect>
      <FormContainer>
        <div className="text-red-600 max-w-72 text-center text-sm">{errorMessage}</div>
        {
          location.state?.newAccount &&
          <div className="text-emerald-800 bg-green-200 border border-emerald-800 font-bold p-4 rounded-lg text-center text-sm">
            User account created successfully! Sign in below.
          </div>
        }
        {
          location.state?.signedOut &&
          <div className="text-orange-800 bg-orange-200 border border-emerald-800 px-4 py-1 rounded-lg text-center text-sm">sign-out successfull!</div>
        }
        <div className="flex flex-wrap items-center justify-center">
        <AuthForm
          submitMessage="Sign In"
          onSubmit={async (values) => {
            const response = await userServices.signInUser({ username: values.username, password: values.password, })
            const data = await response.json()
            if (response.status == 201) {
              setErrorMessage('')
              console.log("Sign-in successful!")
              sessionContext.signIn(data.capstone_session_token);
            } else {
              setErrorMessage(data.error);
            }
          }}

        />
        <div className="flex flex-col">
        <video src="../../demo_vid.mp4" width={200} controls title="demo video" className="border-2 border-emerald-800"></video>
        <caption className="w-full text-sm text-green-800">Demo Video</caption>
        </div>
        </div>
        <Link to="/sign-up" className="text-sm text-green-500 underline hover:text-green-400">create a new account</Link>
      </FormContainer>
    </SignInRedirect>
  )
}
