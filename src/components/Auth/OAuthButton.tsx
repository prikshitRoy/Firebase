import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { auth, firestore } from "@/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/firebase/error";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const OAuthButton: React.FC = () => {
  // Using `react-firebase-hooks` for login with GOOGLE
  const [signInWithGoogle, userCred, loading, googleError] =
    useSignInWithGoogle(auth);

  // Adding User to Firestore Database: PART - 1
  const createUserDocument = async (user: User) => {
    const userDocRef = doc(firestore, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return;
    }
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };
  // Adding User to Firestore Database: PART - 2
  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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
