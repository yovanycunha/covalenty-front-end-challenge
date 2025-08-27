import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ErrorMsg } from "./ErrorMsg";

const msgError = `Error mock test`;

describe("ErrorMsg component test", () => {
  it("should render ErrorMsg component", () => {
    render(<ErrorMsg msg={msgError} />);

    const err = screen.queryByText(msgError);
    expect(err).toBeInTheDocument();
  });
});
