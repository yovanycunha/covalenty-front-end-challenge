import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Container } from "./Container";

describe("Container Component test", () => {
  it("should render Container component", () => {
    render(
      <Container>
        <div>Testing component</div>
      </Container>
    );

    const container = screen.queryByRole("container");
    expect(container).toBeInTheDocument();
  });
});
