import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="register flex justify-center items-center h-screen">
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}