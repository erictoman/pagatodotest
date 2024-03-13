/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders heading", async () => {
    await act(async () => render(<Page />));

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });
});
