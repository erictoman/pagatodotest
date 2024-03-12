import { render, screen } from "@testing-library/react";
import { AppContext } from "@/app/context/AppContext";
import BankList from "@/app/components/BankList";
import { expect, test } from "@jest/globals";
import { Bank } from "@/app/types";

// Mock the AppContext value
const mockContextValue = {
  banks: [
    { bankName: "Bank A" },
    { bankName: "Bank B" },
    { bankName: "Bank C" },
  ] as Bank[] | null,
  getBanks: async () => {},
  setBanks: (banks: Bank[]) => {},
};

test("renders bank list correctly", () => {
  render(
    <AppContext.Provider value={mockContextValue}>
      <BankList />
    </AppContext.Provider>
  );

  // Check if the banks are rendered correctly
  const bankItems = screen.getAllByTestId("bankItem");
  expect(bankItems).toHaveLength(mockContextValue.banks?.length as number);

  // Check if the bank names are displayed correctly
  mockContextValue.banks?.forEach((bank) => {
    expect(screen.getByText(bank.bankName)).toBe(
      screen.getByText(bank.bankName)
    );
  });
});
