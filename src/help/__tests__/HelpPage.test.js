import { render, screen } from "@testing-library/react";
import HelpPage from "../HelpPage";
import { act } from "react-dom/test-utils";

it("renders", async () => {
  act(() => {
    render(<HelpPage />);
  });
  const heading = await screen.getByRole("heading", {
    name: "1. Tab: Throw dice",
  });
  expect(heading).toBeInTheDocument();
});
