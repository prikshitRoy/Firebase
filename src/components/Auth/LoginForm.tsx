import React, { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSetRecoilState } from "recoil";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  // Ckecking with firebase
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //-----------------------------------------------------------------

  // Part: 1 ==> Creating State to capture input from User
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  // Part: 2 ==> Capturing input from User and Updating `loginForm` value
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Part: 3 ==> Accessing Captured input and passing to `signInWithEmailAndPassword()`
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault(); // To stop it from Reloading

    signInWithEmailAndPassword(loginForm.email, loginForm.password); // sending data to firebase
  };

  // Moving to SignUp
  // Updating the Recoil state value to `SignUp` to open SignUp Modal
  const setAuthModalState = useSetRecoilState(LoginSignupModal);

  return (
    <form onSubmit={onSubmit} className="content-center">
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
        className="mb-3 mt-1 flex justify-center"
        disabled={loading}
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Log In
      </Button>
      <div className="flex justify-center text-sm">
        <div>Forget your password ? </div>
        <div
          className="cursor-pointer text-blue-400 hover:underline"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "resetPassword",
            }))
          }
        >
          Reset
        </div>
      </div>
      <div className="flex justify-center text-sm">
        <div>New here?</div>
        <div
          className="cursor-pointer text-blue-400 hover:underline"
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
export default LoginForm;
