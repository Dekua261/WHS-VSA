import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Simple working test", () => {
  it('should display hello world', () => {
    render(<App />);
    expect(screen.getByText(/Hello, world!/i)).toBeInTheDocument();
  });
});