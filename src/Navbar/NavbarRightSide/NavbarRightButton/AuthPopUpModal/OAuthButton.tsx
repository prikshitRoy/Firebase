import React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OAuthButton: React.FC = () => {
  // Using `react-firebase-hooks` for login with GOOGLE
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);

  return (
    <div className="mb-4 flex w-[100%]">
      <Button
        variant={"outline"}
        className="mb-2 mt-2 p-5"
        onClick={() => signInWithGoogle()}
        disabled={loading}
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Continue with Google
      </Button>
      <Button variant={"outline"} className="mb-2 mt-2 p-5">
        Some Other Provider
      </Button>

      {googleError && (
        <div className="text-red-700">
          {[
            FIREBASE_ERRORS[
              googleError?.message as keyof typeof FIREBASE_ERRORS
            ],
          ]}
        </div>
      )}
    </div>
  );
};
export default OAuthButton;
