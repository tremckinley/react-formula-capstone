const CartModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30">
      <div className="md:max-w-xl w-full h-full bg-green-50 float-end">
        <div className="flex justify-between w-full bg-emerald-700 p-2 h-24 items-center">
            <div className="text-3xl text-center w-full text-white font-bio">
                Your Cart
            </div>
            <button
            onClick={onClick}
            className="float-end text-black/50 hover:text-black/40 text-2xl m-4"
            >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        </div>
        <div className="mx-auto mt-10 flex justify-center max-w-lg w-full border border-orange-300">
            cart items
        </div>
      </div>
    </div>
  );
};

export default CartModal;
