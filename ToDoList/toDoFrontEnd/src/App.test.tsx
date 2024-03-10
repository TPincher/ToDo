import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("Setup test", () => {
  it("checks true", () => {
    expect(true).toBe(true);
  });
});

describe("App", () => {
  it("Should render a heading", () => {
    render(<App />);
    const heading = screen.getByText("word");
    expect(heading).toBeInTheDocument();
  });
});
