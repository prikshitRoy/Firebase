import { atom } from "recoil";

export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const LoginSignupModal = atom<AuthModalState>({
  key: "LoginSignupModal",
  default: defaultModalState,
});

//----------------------------
