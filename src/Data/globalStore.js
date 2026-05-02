import { create } from "zustand";
import mockUsers from "./mockData";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist((set) => ({
    userInfo: {},
    userInput: "",
    userRepoInfo: [],
    setUserInfo: (userData) => set((state) => ({ userInfo: userData })),
    setUserRepoInfo: (userRepoData) =>
      set((state) => ({ userRepoInfo: userRepoData })),
    setUserInput: (input) => set((state) => ({ userInput: input })),
  })),
);

export default useGlobalStore;
