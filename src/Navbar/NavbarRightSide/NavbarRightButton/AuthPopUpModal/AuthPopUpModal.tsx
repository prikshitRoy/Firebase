import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRecoilState } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import AuthInputs from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/AuthInputs";
import OAuthButton from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/OAuthButton";

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

  return (
    <Dialog open={modalState.open} onOpenChange={handalClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {modalState.view === "login" && "Login"}
            {modalState.view === "signup" && "Sign Up"}
            {modalState.view === "resetPassword" && "Reset password"}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="col-auto w-[70%] justify-center align-middle">
            <OAuthButton />
            <div className="ml-44">OR</div>
            <AuthInputs />
            {/* 
            <ResetPassword /> 
            */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
