import { useEffect, useRef } from "react";

type CartProps = {
  showCart: boolean;
};

export const Cart = ({ showCart }: CartProps): JSX.Element => {
  const cardRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (showCart) {
      cardRef.current!.style.display = "none";
    } else {
      cardRef.current!.style.display = "flex";
    }
  }, [showCart]);

  return (
    <div ref={cardRef} className="cart">
      <p className="cart-title">Cart</p>
      <p className="cart-message">Your Cart is empty.</p>
    </div>
  );
};
