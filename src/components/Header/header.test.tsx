import { describe, expect, it } from "vitest";
import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header Component test - Render", () => {
  it("should render Header component", () => {
    render(<Header />);

    expect(screen.queryByText(/Products List/i)).toBeInTheDocument();
  });
});
