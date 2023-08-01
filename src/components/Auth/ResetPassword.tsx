import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/clientApp";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Icons } from "@/components/ui/icons";

type ResetPasswordProps = {};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [SendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await SendPasswordResetEmail(email);
    if (!error) {
      setSuccess(true);
    }
  };

  return (
    <form onSubmit={onSubmit} className="text-center">
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        className="mb-2 text-black"
        onChange={(event) => setEmail(event.target.value)}
      />

      <Button
        type="submit"
        variant={"outline"}
        className="m-3"
        disabled={sending}
      >
        {sending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Submit
      </Button>
      <div className={error ? "text-red-700" : ""}>
        {error ? "Invalid email" : success && "Please check Email"}
      </div>
    </form>
  );
};
export default ResetPassword;
