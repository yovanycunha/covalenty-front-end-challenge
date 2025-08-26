import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Spinner } from "./Spinner";

describe("Spinner Component test", () => {
  it("should render Spinner component", () => {
    render(<Spinner />);

    const spinner = screen.queryByRole("status");
    expect(spinner).toBeInTheDocument();
  });
});
