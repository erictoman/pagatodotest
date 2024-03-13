import { create } from "zustand";
import { persist } from "zustand/middleware";
import cliente from "@/app/client";

import { AppStoreState, Bank } from "../types";

/**
 * Custom hook for managing the application store state.
 *
 * @returns An object containing state variables and functions to manipulate the state.
 */
const useAppStore = create<AppStoreState>()(
  persist(
    (set, get) => ({
      banks: [],
      filteredByName: (text: string) => {
        let filteredBanks: Bank[] | null = null;
        if (text) {
          filteredBanks =
            get().banks?.filter((bank) =>
              bank.bankName.toLowerCase().includes(text.toLowerCase())
            ) || null;
        }
        return filteredBanks;
      },
      deleteByBankName: (name: string) =>
        set((state: AppStoreState) => {
          if (state.banks) {
            let index = state.banks?.findIndex((elem) => {
              return elem.bankName === name;
            });
            if (index !== -1) {
              state.banks?.splice(index, 1);
            }
          }
          return {
            banks: state.banks,
          };
        }),
      sortByName: () =>
        set((state: AppStoreState) => {
          return {
            banks: state.banks?.sort((a, b) =>
              a.bankName.localeCompare(b.bankName)
            ),
          };
        }),
      setBanks: (banks: Bank[]) =>
        set((_: AppStoreState) => {
          return {
            banks: banks,
          };
        }),
      fetchBanks: async () => {
        let fetchedBanks: Bank[] | null = null;
        try {
          let { data } = await cliente.get<Bank[]>("/api/banks");
          fetchedBanks = data;
        } catch {
          fetchedBanks = null;
        }
        set((_) => {
          return {
            banks: fetchedBanks,
          };
        });
      },
    }),
    {
      name: "banks-store",
      onRehydrateStorage: () => {
        return () => {
          const state = useAppStore.getState();
          if (state.banks?.length === 0) {
            console.log("rehydrating banks");
            state.fetchBanks();
          }
        };
      },
      skipHydration: true,
    }
  )
);

export default useAppStore;
