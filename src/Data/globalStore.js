import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  (set) => ({
    userInfo: {},
    userInput: "",
    userRepoInfo: [],
    setUserInfo: (userData) => set((state) => ({ userInfo: userData })),
    setUserRepoInfo: (userRepoData) =>
      set((state) => ({ userRepoInfo: userRepoData })),
    setUserInput: (input) => set((state) => ({ userInput: input })),
  }),
);

export default useGlobalStore;
