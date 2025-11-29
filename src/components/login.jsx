import { SignIn, useSignIn } from "@clerk/clerk-react";

export default function CustomLogin() {
  return (
  <div className="login">
    <SignIn path="/sign-in" routing="path" appearance={{ baseTheme: "dark" }} />
  </div>
  )
}