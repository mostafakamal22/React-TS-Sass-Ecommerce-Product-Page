import { FC, useContext, useState } from "react";
import {
  ProductContext,
  ProductContextTypes,
} from "../../context/product/productContext";

export const AddToCart: FC = (): JSX.Element => {
  const { product, setProduct } = useContext(
    ProductContext
  ) as ProductContextTypes;
  const [count, setCount] = useState(0);
  return (
    <div className="add-to-cart">
      <div className="add-to-cart-control">
        <button
          title="remove one piece"
          className="btn btn-minus"
          onClick={() => setCount(count ? count - 1 : count)}
        >
          <img
            src="/ecommerce-product-page/images/icon-minus.svg"
            alt="minus"
          />
        </button>
        <span className="product-count" title="product-count">
          {count}
        </span>

        <button
          title="add one piece"
          className="btn btn-plus"
          onClick={() => setCount(count + 1)}
        >
          <img src="/ecommerce-product-page/images/icon-plus.svg" alt="plus" />
        </button>
      </div>

      <button
        disabled={count <= 0}
        className="btn btn-add"
        onClick={() =>
          setProduct({
            ...product,
            count,
          })
        }
      >
        <img
          src="/ecommerce-product-page/images/icon-cart-white.svg"
          alt="cart"
        />
        <span>Add to cart</span>
      </button>
    </div>
  );
};
