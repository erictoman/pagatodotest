import React, { createContext, use, useEffect, useState } from "react";
import cliente from "../client";
import { Bank } from "../types";

const appLocalStorageName = "appLocal";

const AppState = {
  banks: [] as Bank[] | null,
  getBanks: async () => {},
  setBanks: (banks: Bank[]) => {},
};

const getLocalBanks = (): Bank[] | null => {
  try {
    let localStorageBanks = localStorage.getItem(appLocalStorageName);
    if (!localStorageBanks) {
      return null;
    }
    return JSON.parse(localStorageBanks);
  } catch {
    return null;
  }
};

const getOnlineBanks = async (): Promise<Bank[] | null> => {
  try {
    let { data } = await cliente.get<Bank[]>("/catom/api/challenge/banks");
    return data;
  } catch {
    return null;
  }
};

export const AppContext = createContext(AppState);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [banks, setBanks] = useState<Bank[] | null>(null);

  useEffect(() => {
    getBanks();
  }, []);

  const getBanks = async () => {
    let localBanks = getLocalBanks();
    if (localBanks) {
      console.log("local");
      setBanks(localBanks);
      return;
    }
    let onlineBanks = await getOnlineBanks();
    if (onlineBanks) {
      console.log("online");
      setBanks(onlineBanks);
      localStorage.setItem(appLocalStorageName, JSON.stringify(onlineBanks));
    }
  };

  const value = {
    banks,
    getBanks,
    setBanks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
