import { useContext, useEffect, useRef } from "react";
import { ProductContext } from "../../../context/product/productContext";

type CartProps = {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Cart = ({ showCart, setShowCart }: CartProps): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { product, setProduct } = useContext(ProductContext);

  const closeCartHandler = (e: any): void => {
    if (
      !cardRef?.current!.contains(e.target) &&
      !document.getElementById("btn-cart")?.contains(e.target)
    ) {
      setShowCart(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", (e) => closeCartHandler(e));
    if (showCart) {
      cardRef.current!.style.display = "none";
    } else {
      cardRef.current!.style.display = "flex";
    }

    return () => {
      window.removeEventListener("click", (e) => closeCartHandler(e));
    };
  }, [showCart]);

  return (
    <div ref={cardRef} className="cart">
      <p className="cart-title">Cart</p>
      {/* Empty Cart */}
      {!product?.count && <p className="cart-message">Your Cart is empty.</p>}

      {/* Filled Cart */}
      {product?.count > 0 && (
        <div className="cart-product">
          <div className="cart-product-info">
            <img
              className="cart-product-thumbnail"
              src="/src/assets/images/image-product-1-thumbnail.jpg"
            />
            <span className="cart-product-title">{product.title}</span>
            <span className="cart-product-price">${product.price}</span>
            <span className="cart-product-count"> X {product.count}</span>
            <span className="cart-product-total">
              ${product.count * product.price}.00
            </span>
            <button
              className="btn btn-remove"
              onClick={() => setProduct({ ...product, count: 0 })}
            >
              <img
                src="/src/assets/images/icon-delete.svg"
                alt="remove product"
              />
            </button>
          </div>

          <button className="btn btn-checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};
