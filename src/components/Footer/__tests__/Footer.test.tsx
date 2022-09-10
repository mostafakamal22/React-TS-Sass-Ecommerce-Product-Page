import { render, screen } from "@testing-library/react";

import { Footer } from "../Footer";

describe("Footer", () => {
  it("Renders footer element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it("Renders two Links with proper text on them", () => {
    render(<Footer />);
    const linkList = screen.getAllByRole("link");
    expect(linkList).toHaveLength(2);

    expect(linkList[0]).toHaveTextContent("Frontend Mentor");
    expect(linkList[1]).toHaveTextContent("Mostafa Kamal");
  });
});
