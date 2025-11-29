import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
  <div className="login">
    <SignIn path="/sign-in" routing="path" appearance={{ baseTheme: "dark" }} />
  </div>
  )
}