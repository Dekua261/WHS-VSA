import { render } from "@testing-library/react";
import App from "./App";

describe("simple working test", () => {
  it('should display navbar items', () => {
    const { container } = render(<App />);
    const navbarItems = container.getElementsByClassName("navbar-item");
    for (let i = 0; i < navbarItems.length; i++) {
      expect(navbarItems.item(i)).toBeVisible();
    }
  });
});