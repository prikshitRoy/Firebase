import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRecoilState } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import AuthInputs from "@/components/Auth/AuthButtons/AuthInputs";
import OAuthButton from "@/components/Auth/OAuthButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/clientApp";
import { useEffect } from "react";
import ResetPassword from "@/components/Auth/ResetPassword";

export default function AuthModal() {
  // Using User assigned `State Value` in NavbarRightButton
  const [modalState, setModalState] = useRecoilState(LoginSignupModal);

  // Using User assigned `State Value` in NavbarRightButton
  // If user has Clicked in `Login` or `SignUp` button, PopUpModal will open
  // Now to close it we are using `useRecoilState` and converting open:true ==> open:false
  // So PopUpModal get closed
  const handalClose = () => {
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));
  };

  //Closing "AuthPopUpModal" using useAuthState()
  //If the user Object is not null it will close the Modal
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) handalClose();
    /*     console.log("User Login Data ( AuthPopUpModal ) :", user); */
  }, [user]);

  return (
    <Dialog open={modalState.open} onOpenChange={handalClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="items-center">
          <DialogTitle>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset password"}
          </DialogTitle>
        </DialogHeader>
        <div className="items-center space-y-4">
          {modalState.view === "login" || modalState.view === "signup" ? (
            <>
              <OAuthButton />
              <div className="ml-44">OR</div>
              <AuthInputs />
            </>
          ) : (
            <ResetPassword />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
