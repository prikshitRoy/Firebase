import { LoginSignupModal } from "@/atoms/atomAuthModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import SignUp from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/SignUp";
import { useSetRecoilState } from "recoil";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const onSubmit = () => {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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

      <Button type="submit" variant={"outline"} className="mt-1 mb-3">
        Log In
      </Button>
      <div className="text-sm justify-center bg-center">
        <text>New here? </text>
        <text
          className="cursor-pointer hover:underline"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "signup",
            }))
          }
        >
          SignUp
        </text>
      </div>
    </form>
  );
};
export default Login;
