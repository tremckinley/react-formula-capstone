import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userServices from "services/users"


export default function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  return (
    <FormContainer>
      <div className="text-red-600 max-w-72 text-center text-sm">{errorMessage}</div>
      <AuthForm
        fields={[
          { label: "username", type: "text", autocomplete: "username" },
          { label: "password", type: "password", autocomplete:"new-password" },
          { label: "confirm password", type: "password", autocomplete:"new-password" },
        ]}
        submitMessage="Create Account"
        onSubmit={ async (values) => {
          if (values.password.length < 4) {
            setErrorMessage(`Password too short.
              Passwords must have at least 4 characters.`)
              return
          } 
          if (values.username.length < 4) {
            setErrorMessage(`Username too short. Usernames must have at least 4 characters.`)
            return

          }
          if (values.password !== values["confirm password"]){
            setErrorMessage("passwords do not match.")
            return 
          } 
          const response = await userServices.addUser({username: values.username, password: values.password});
          const data = await response.json();
          
          if(response.status !== 201)  {
            console.log(data.error)
            setErrorMessage(data.error)
          } else {
            setErrorMessage('');
            // navigate to sign-in page with location state
            navigate("/", {
              state: {
                newAccount: true,
              },
            });
          }
        }}
      />
      <Link to="/" className="text-sm text-green-500 underline hover:text-green-400">sign in to existing account</Link>
    </FormContainer>
    
  );
}
