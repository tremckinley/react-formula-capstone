import AuthForm from "./AuthForm"

export default function SignInPage() {
    return (<div className="flex justify-center">
        <AuthForm 
            submitMessage="Sign In"
        />
        </div>
    )
}