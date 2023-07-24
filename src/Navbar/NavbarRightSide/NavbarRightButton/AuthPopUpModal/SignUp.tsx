import { LoginSignupModal } from "@/atoms/atomAuthModal";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

type SignUpProps = {};

const SignUp: React.FC<SignUpProps> = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [error, setError] = useState("");

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  // Firebase logic
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("passwprd do not match");
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  // Moving to SignUp
  const setAuthModalState = useSetRecoilState(LoginSignupModal);

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
      <Input
        required
        name="confirmPassword"
        placeholder="confirm password"
        type="password"
        className="mb-2 text-black"
        onChange={onChange}
      />
      <div className="text-red-700">
        {error ||
          FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
      </div>

      <Button
        type="submit"
        variant={"outline"}
        disabled={loading}
        className="mt-1 mb-3"
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Sign Up
      </Button>
      <div className="text-sm justify-center bg-center">
        <div>Already have a Account? </div>
        <div
          className="cursor-pointer hover:underline"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LogIn
        </div>
      </div>
    </form>
  );
};
export default SignUp;
