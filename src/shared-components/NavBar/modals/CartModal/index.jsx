import { RemoveScroll } from "react-remove-scroll";
import { useContext, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion"
import SessionContext from "contexts/SessionContext";
import CartItem from "./CartItem";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";

const CartModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  const { sessionUsername } = useContext(SessionContext);
  const [cart, setCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  const removeCartItem = (plantID) => {
    cartService.removeFromCart(plantID);
    fetchCart();
  };

  const fetchCart = useCallback(async () => {
    setCartLoading(true);
    const response = await cartService.getCart();
    const data = await response.json();
    //console.log(data)
    setCart(data);
    setCartLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  let totalQuantity = 0;
  let subtotal = 0;
  for (let item of cart) {
    totalQuantity += item.quantity;
    subtotal += item.quantity * item.price_per_unit;
  }

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 w-full h-screen bg-black/30 backdrop-blur-sm">
        <motion.div 
          className="md:max-w-xl w-full h-screen bg-green-50 float-end flex flex-col"
          initial={{opacity: 0, translateX: "100%"}} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between w-full bg-emerald-700 p-2 h-24 items-center">
            <div className="text-3xl text-center w-full text-white font-bio">
              {`${sessionUsername}'s Cart`}
            </div>
            <button
              onClick={onClick}
              className="text-black/50 hover:text-black/40 text-2xl m-4"
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="mx-auto mt-10 flex flex-col flex-1 items-center max-w-lg w-full">
              {cartLoading ? (
                <LoadingSpinner />
              ) : (
                cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    removeCartItem={removeCartItem}
                  />
                ))
              )}
            </div>
            <div className="flex flex-col h-28 p-4 text-stone-500 border border-slate-300">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold text-lg">{totalQuantity}</span>
                  {totalQuantity == 1 ? " item" : " items"}
                </div>
                <div>
                  {"subtotal: "}
                  <span className="font-bold text-lg">{`$${subtotal}`}</span>
                </div>
              </div>
              <button className="bg-emerald-700 px-4 py-2 mt-4 rounded-full text-white text-lg flex items-center justify-center" 
                onClick={() =>{
                  alert("Thank you for exploring my capstone project. \nNo plants were sold in the making of it :)\n -Tremaine")}
                }>
                Checkout <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </RemoveScroll>
  );
};

export default CartModal;
