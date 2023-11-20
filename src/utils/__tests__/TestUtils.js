import { act } from "react-dom/test-utils";

const clickButton = (buttonText, screen) => {
  const button = screen.getByText(buttonText);
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
};

export { clickButton };
