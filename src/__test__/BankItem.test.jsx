import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import BankItem from "../app/components/BankItem";

const mockBank = {
  bankName: "Bank of Example",
  url: "https://example.com/bank.png",
  description: "This is a sample bank",
  age: 10,
};

describe("BankItem", () => {
  test("renders bank name", () => {
    render(<BankItem bank={mockBank} />);
    const bankNameElement = screen.getByText(mockBank.bankName);
    expect(bankNameElement).toBeInTheDocument();
  });

  test("renders bank logo", () => {
    render(<BankItem bank={mockBank} />);
    const bankLogoElement = screen.getByAltText(`Logo ${mockBank.bankName}`);
    expect(bankLogoElement).toBeInTheDocument();
    expect(bankLogoElement).toHaveAttribute("src", mockBank.url);
  });

  test("renders bank description", () => {
    render(<BankItem bank={mockBank} />);
    const bankDescriptionElement = screen.getByText(mockBank.description);
    expect(bankDescriptionElement).toBeInTheDocument();
  });

  test("renders bank age", () => {
    render(<BankItem bank={mockBank} />);
    const bankAgeElement = screen.getByText(`Edad: ${mockBank.age}`);
    expect(bankAgeElement).toBeInTheDocument();
  });

  test("calls onRemove when remove button is clicked", () => {
    const mockOnRemove = jest.fn();
    render(<BankItem bank={mockBank} onRemove={mockOnRemove} />);
    const removeButton = screen.getByText("X");
    fireEvent.click(removeButton);
    expect(mockOnRemove).toHaveBeenCalled();
  });
});
