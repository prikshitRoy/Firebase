import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

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

  return (
    <form onSubmit={onSubmit} className="col-span-3">
      <Input
        name="email"
        placeholder="email"
        type="email"
        className="mb-2 text-black"
        onChange={onChange}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        className="mb-2 text-black"
        onChange={onChange}
      />

      <Button type="submit" variant={"outline"}>
        Log In
      </Button>
    </form>
  );
};
export default Login;
