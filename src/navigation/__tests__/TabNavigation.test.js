import { render, screen } from "@testing-library/react";
import TabNavigation from "../TabNavigation";
import { act } from "react-dom/test-utils";

it("renders", () => {
  act(() => {
    render(<TabNavigation setPageTitle={(_) => {}} />);
  });
  const throwDiceTab = screen.getByTestId("CasinoIcon");
  expect(throwDiceTab).toBeInTheDocument();
});

it("change tab to character sheet", () => {
  const setPageTitle = jest.fn();
  act(() => {
    render(<TabNavigation setPageTitle={setPageTitle} />);
  });
  const characterSheetTab = screen.getByTestId("PersonIcon");
  act(() => {
    characterSheetTab.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(setPageTitle).toHaveBeenCalled();
  const heading = screen.getByRole("heading", {
    name: "Strength",
  });
  expect(heading).toBeInTheDocument();
});
