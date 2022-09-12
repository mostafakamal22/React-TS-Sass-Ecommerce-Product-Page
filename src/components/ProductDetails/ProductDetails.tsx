import { FC } from "react";
import { AddToCart } from "../AddToCart/AddToCart";

interface Product {
  barnd: string;
  name: string;
  description: string;
  priceBefore: string;
  discount: string;
  priceAfter: string;
}

export const product: Product = {
  barnd: "Sneaker Company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
  priceBefore: "$250.00",
  discount: "%50",
  priceAfter: "$125.00",
};

export const ProductDetails: FC = (): JSX.Element => {
  const { barnd, name, discount, description, priceAfter, priceBefore } =
    product;
  return (
    <section aria-label="product details">
      <h3>{barnd}</h3>

      <h2>{name}</h2>

      <p>{description}</p>
      <div className="prices-container">
        <span className="price-after">{priceAfter}</span>
        <span className="price-discount">{discount}</span>
        <span className="price-before">{priceBefore}</span>
      </div>

      <AddToCart />
    </section>
  );
};
