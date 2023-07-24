import { LoginSignupModal } from "@/atoms/atomAuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import SignUp from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/SignUp";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/clientApp";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FirebaseError } from "firebase/app";
import { FIREBASE_ERRORS } from "@/firebase/error";
import { Icons } from "@/components/ui/icons";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Moving to SignUp
  const setAuthModalState = useSetRecoilState(LoginSignupModal);

  //
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

  return (
    <form onSubmit={onSubmit} className="col-span-3">
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        className="mb-2 text-black"
        onChange={onChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        className="mb-2 text-black"
        onChange={onChange}
      />
      {error && (
        <div className="text-red-700">
          {[FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]]}
        </div>
      )}

      <Button
        type="submit"
        variant={"outline"}
        className="mt-1 mb-3"
        disabled={loading}
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Log In
      </Button>
      <div className="text-sm justify-center bg-center">
        <div>New here? </div>
        <div
          className="cursor-pointer hover:underline"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SignUp
        </div>
      </div>
    </form>
  );
};
export default Login;
