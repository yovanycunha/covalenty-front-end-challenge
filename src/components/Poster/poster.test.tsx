import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Poster } from "./Poster";

const poster: { src: string; alt: string } = {
  src: "https://i.imgur.com/Y54Bt8J.jpeg",
  alt: "classic-white-tee-timeless-style-and-comfort",
};

describe("Poster Component test", () => {
  it("should render Poster component", () => {
    // render component
    render(<Poster src={poster.src} alt={poster.alt} />);

    // Validate default render
    const imgPoster = screen.queryByRole("img");
    expect(imgPoster).toBeInTheDocument();

    // Validate alt text
    const altText = screen.queryByAltText(poster.alt);
    expect(altText).toBeInTheDocument();
  });
});
