import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRecoilState } from "recoil";
import { LoginSignupModal } from "@/atoms/atomAuthModal";
import AuthInputs from "@/Navbar/NavbarRightSide/NavbarRightButton/AuthPopUpModal/AuthInputs";

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
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <AuthInputs />
            {/* 
            <OAuthButtons/>
            <ResetPassword /> 
            */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
