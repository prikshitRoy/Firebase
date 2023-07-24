import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { auth } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const OAuthButton: React.FC = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);

  return (
    <div className="flex w-[100%] mb-4">
      <Button
        variant={"outline"}
        className="p-5 mb-2 mt-2"
        onClick={() => signInWithGoogle()}
        disabled={loading}
      >
        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Continue with Google
      </Button>
      <Button variant={"outline"} className="p-5 mb-2 mt-2">
        Some Other Provider
      </Button>

      {googleError && (
        <div>
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
