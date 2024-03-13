interface Bank {
  description: string;
  age: number;
  url: string;
  bankName: string;
}

interface AppStoreState {
  banks: Bank[] | null;
  filteredByName: (text: string) => Bank[] | null;
  deleteByBankName: (name: string) => void;
  sortByName: () => void;
  setBanks: (banks: Bank[]) => void;
  fetchBanks: () => void;
}

export type { AppStoreState, Bank };
