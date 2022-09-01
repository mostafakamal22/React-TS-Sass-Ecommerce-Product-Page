import { useContext, useState } from "react";
import { ProductContext } from "../App/App";

export const AddToCart = (): JSX.Element => {
  const { product, setProduct } = useContext(ProductContext);
  const [count, setCount] = useState(0);
  return (
    <div className="add-to-cart">
      <div className="add-to-cart-control">
        <button
          className="btn btn-minus"
          onClick={() => setCount(count ? count - 1 : count)}
        >
          <img src="/src/assets/images/icon-minus.svg" alt="minus" />
        </button>
        <span className="product-count">{count}</span>
        <button className="btn btn-plus" onClick={() => setCount(count + 1)}>
          <img src="/src/assets/images/icon-plus.svg" alt="plus" />
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
        <img src="/src/assets/images/icon-cart-white.svg" alt="cart" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};
