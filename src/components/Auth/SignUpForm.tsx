import { LoginSignupModal } from "@/atoms/atomAuthModal";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

type SignUpFormProps = {};

const SignUpForm: React.FC<SignUpFormProps> = () => {
  // Checking with Firebase
  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  //-------------------------------------------------------

  // Part: 1 ==> Creating State to capture input from User
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Part: 2 ==> Capturing input from User and Updating `signUpForm` value
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Part: 3 ==> Accessing Captured input and passing to "createUserWithEmailAndPassword()"
  const [error, setError] = useState(""); // Creating Error for
  const onSubmit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault(); // To stop it from Reloading

    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError("passwprd do not match");
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password); // sending user data to firebase
  };

  // Moving to SignUp
  // Updating the Recoil state value to `LogIn` to open LogIn Modal
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
        className="mb-3 mt-1"
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Sign Up
      </Button>
      <div className="flex justify-center text-sm">
        <div>Already have a Account? </div>
        <div
          className="cursor-pointer text-blue-400 hover:underline"
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
export default SignUpForm;
