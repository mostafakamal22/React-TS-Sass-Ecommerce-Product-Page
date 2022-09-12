import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductState } from "../../../context/product/ProductState";
import { Navbar, navLinks } from "../Navbar";

describe("Navbar", () => {
  it("Renders header element", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("contains tree Buttons with proper icons inside them", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const btnList = screen.getAllByRole("button");
    expect(btnList).toHaveLength(3);

    expect(btnList[0].children[0]).toHaveAttribute("alt", "menu");
    expect(btnList[1].children[0]).toHaveAttribute("alt", "close");
    expect(btnList[2].children[1]).toHaveAttribute("alt", "cart");
  });

  it("contains two navs [nav-mobile, nav-desktop]", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const navList = screen.getAllByRole("navigation");

    expect(navList).toHaveLength(2);

    expect(navList[0]).toBeInTheDocument();
    expect(navList[0]).toHaveClass("nav nav-desktop");
    expect(navList[1]).toBeInTheDocument();
    expect(navList[1]).toHaveClass("nav nav-mobile");
  });

  it("contains two lists [nav-list-mobile, nav-list] and four links inside each of them", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const lists = screen.getAllByRole("list");

    expect(lists).toHaveLength(2);

    expect(lists[0]).toBeInTheDocument();
    expect(lists[0]).toHaveClass("nav-list");

    expect(lists[1]).toBeInTheDocument();
    expect(lists[1]).toHaveClass("nav-list-mobile");

    navLinks.map((text) => {
      const links = screen.getAllByText(text);

      expect(links).toHaveLength(2);
      expect(links[0]).toHaveClass("nav-link");
      expect(links[1]).toHaveClass("nav-link-mobile");
    });
  });

  it("renders brand logo/link", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const brand = screen.getByRole("link", {
      name: "sneakers",
    });

    expect(brand).toBeInTheDocument();
  });

  it("contains card component with[cart-title, cart-message] and it is initially not visible", () => {
    render(
      <ProductState>
        <Navbar />
      </ProductState>
    );
    const cart = screen.getByTitle("cart");

    expect(cart).toBeInTheDocument();
    expect(cart).not.toBeVisible();

    const cartTitle = screen.getByText("Cart");
    const cartmessage = screen.getByText("Your Cart is empty.");

    expect(cartTitle).toBeInTheDocument();
    expect(cartmessage).toBeInTheDocument();
  });
});
