"use client";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import AuthFormBtn from "./auth-form-btn";
import { useActionState } from "react";
import { logIn, signUp } from "@/actions/actions";

type AuthFormProps = {
  type: "signUp" | "logIn";
};

export default function AuthForm({ type }: AuthFormProps) {
  const [signUpError, dispatchSignUp] = useActionState(signUp, undefined);
  const [logInError, dispatchLogIn] = useActionState(logIn, undefined);

  return (
    <form action={type === "logIn" ? dispatchLogIn : dispatchSignUp}>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div className="mt-2 mb-4 space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required />
      </div>

      <AuthFormBtn type={type} />
      {signUpError && (
        <p className="text-sm text-red-500">{signUpError.message}</p>
      )}
      {logInError && (
        <p className="text-sm text-red-500">{logInError.message}</p>
      )}
    </form>
  );
}
