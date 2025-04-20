import { create } from "zustand"
import { userData } from "./userData"

interface UserState {
  users: typeof userData
  activeTab: string
  setActiveTab: (tab: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  users: userData,
  activeTab: "general",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
