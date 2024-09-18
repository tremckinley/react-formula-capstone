import AuthForm from "./AuthForm";

export default function SignUpPage() {
  return (
    <div className="flex justify-center">
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitMessage="Create Account"
      />
    </div>
  );
}
