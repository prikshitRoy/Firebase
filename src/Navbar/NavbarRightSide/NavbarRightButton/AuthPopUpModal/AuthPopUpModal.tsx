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
  const [modalState, setModalState] = useRecoilState(LoginSignupModal);

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
          <div className="align-middle justify-center w-[70%] col-auto">
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
