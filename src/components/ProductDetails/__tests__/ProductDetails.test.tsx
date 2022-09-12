import { render, screen } from "@testing-library/react";
import { ProductState } from "../../../context/product/ProductState";
import { product, ProductDetails } from "../ProductDetails";

describe("ProductDetails", () => {
  it("renders section element", () => {
    render(
      <ProductState>
        <ProductDetails />
      </ProductState>
    );

    const sectionElement = screen.getByRole("region");

    expect(sectionElement).toBeInTheDocument();
  });

  it("renders product details correctly", () => {
    render(
      <ProductState>
        <ProductDetails />
      </ProductState>
    );

    const companyName = screen.getByRole("heading", {
      name: product.barnd,
    });
    const productName = screen.getByRole("heading", {
      name: product.name,
    });
    const productDescription = screen.getByText(product.description);
    const productPriceBefore = screen.getByText(product.priceBefore);
    const productPriceAfter = screen.getByText(product.priceAfter);
    const productDiscount = screen.getByText(product.discount);

    expect(companyName).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPriceBefore).toBeInTheDocument();
    expect(productPriceAfter).toBeInTheDocument();
    expect(productDiscount).toBeInTheDocument();
  });
});
