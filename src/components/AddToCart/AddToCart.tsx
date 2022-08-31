export const AddToCart = (): JSX.Element => {
  return (
    <div className="add-to-cart">
      <div className="add-to-cart-control">
        <button className="btn btn-minus">
          <img src="/src/assets/images/icon-minus.svg" alt="minus" />
        </button>
        <span className="product-count">0</span>
        <button className="btn btn-plus">
          <img src="/src/assets/images/icon-plus.svg" alt="plus" />
        </button>
      </div>

      <button className="btn btn-add">
        <img src="/src/assets/images/icon-cart-white.svg" alt="cart" />
        <span>Add to cart</span>
      </button>
    </div>
  );
};
