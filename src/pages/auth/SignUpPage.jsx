import AuthForm from "./AuthForm";
import FormContainer from "../FormContainer";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <FormContainer>
      <AuthForm
        fields={[
          { label: "username", type: "text", autocomplete: "username" },
          { label: "password", type: "password", autocomplete:"new-password" },
          { label: "confirm password", type: "password", autocomplete:"new-password" },
        ]}
        submitMessage="Create Account"
        onSubmit={(values) => {
          console.log(values)
        }}
      />
      <Link to="/" className="text-sm text-green-500 underline hover:text-green-400">sign in to existing account</Link>
    </FormContainer>
    
  );
}
