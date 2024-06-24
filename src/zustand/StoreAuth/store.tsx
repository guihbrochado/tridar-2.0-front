import { create } from "zustand";
import { User } from "../../@types/types";

interface LoginState {
    userInfo: User | null;
    setUserInfo: (userInfo: User | null) => void;
}
  
export const useLoginStore = create<LoginState>((set) => ({
    userInfo: null,
    setUserInfo: (userInfo) => set({ userInfo }),
}));
