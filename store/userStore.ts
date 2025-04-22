import { create } from "zustand"


interface UserState {

  activeTab: string
  setActiveTab: (tab: string) => void
}

export const useUserStore = create<UserState>((set) => ({

  activeTab: "general",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))
