import { AddToCart } from "../AddToCart/AddToCart";

export const ProductDetails = (): JSX.Element => {
  return (
    <section>
      <h3>Sneaker Company</h3>

      <h2>Fall Limited Edition Sneakers</h2>

      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="prices-container">
        <span className="price-after">$125.00</span>
        <span className="price-discount">50%</span>
        <span className="price-before">$250.00</span>
      </div>

      <AddToCart />
    </section>
  );
};
