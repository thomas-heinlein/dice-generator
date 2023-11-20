import { act } from "react-dom/test-utils";
import { render, screen, waitFor } from "@testing-library/react";
import DiceComponent from "../DiceComponent";
import { clickButton } from "../../utils/__tests__/TestUtils";

it("renders", () => {
  act(() => {
    render(<DiceComponent />);
  });
  const d20 = screen.getByText("D20");
  expect(d20).toBeInTheDocument();
});

it("renders die result after throw", async () => {
  act(() => {
    render(<DiceComponent />);
  });

  clickButton("D2", screen);
  clickButton("1x", screen);
  clickButton("Throw Dice", screen);

  await waitFor(
    async () => expect(screen.getByText(/^(1|2)$/)).toBeInTheDocument(),
    {
      timeout: 2000,
    },
  );
});
