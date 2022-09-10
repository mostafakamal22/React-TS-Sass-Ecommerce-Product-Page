import { fireEvent, render, screen, within } from "@testing-library/react";
import { ProductState } from "../../../context/product/ProductState";
import { AddToCart } from "../AddToCart";

describe("AddToCart", () => {
  it("Renders three Buttons", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const btnList = screen.getAllByRole("button");
    expect(btnList).toHaveLength(3);
  });

  it("Renders Add to cart text on the third button and the button is initially disabled", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const addToCartBtn = screen.getByRole("button", {
      name: "cart Add to cart",
    });
    const addToCartText = screen.getByText(/add to cart/i);

    expect(addToCartText).toBeInTheDocument();
    expect(addToCartBtn).toBeDisabled();
  });

  it("Renders plus icon inside the plus button", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const plusBtn = screen.getByTitle("add one piece");
    const plusIcon = within(plusBtn).getByAltText("plus");
    expect(plusIcon).toBeInTheDocument();
  });

  it("the plus button changes the count state to be >= 0 after click", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const plusBtn = screen.getByTitle("add one piece");
    const count = screen.getByTitle("product-count");

    expect(parseInt(count.textContent!)).toEqual(0);

    fireEvent.click(plusBtn);

    expect(parseInt(count.textContent!)).toBeGreaterThanOrEqual(0);
  });

  it("Renders minus icon inside the minus button", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const minusBtn = screen.getByTitle("remove one piece");
    const minusIcon = within(minusBtn).getByAltText("minus");
    expect(minusIcon).toBeInTheDocument();
  });

  it("the minus button changes the count state to be >= 0 after click", () => {
    render(
      <ProductState>
        <AddToCart />
      </ProductState>
    );
    const minusBtn = screen.getByTitle("remove one piece");
    const count = screen.getByTitle("product-count");

    expect(parseInt(count.textContent!)).toEqual(0);

    fireEvent.click(minusBtn);

    expect(parseInt(count.textContent!)).toBeGreaterThanOrEqual(0);
  });
});
