import { RemoveScroll } from "react-remove-scroll";
import { useContext, useEffect, useState, useCallback } from "react";
import SessionContext from "contexts/SessionContext";
import CartItem from "./CartItem";
import LoadingSpinner from "shared-components/LoadingSpinner";
import * as cartService from "services/cart";

const CartModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  const { sessionUsername } = useContext(SessionContext)
  const [cart, setCart] = useState([])
  const [cartLoading, setCartLoading] = useState(false)

  const fetchCart = useCallback(async () => {
      setCartLoading(true)
      const response = await cartService.getCart();
      const data = await response.json()
      setCart(data)
      setCartLoading(false)
  }, [])

  useEffect(() => {
    fetchCart()
    }, [fetchCart])

    return (
      <RemoveScroll>
        <div className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm">
          <div className="md:max-w-xl w-full h-full bg-green-50 float-end">
            <div className="flex justify-between w-full bg-emerald-700 p-2 h-24 items-center">
              <div className="text-3xl text-center w-full text-white font-bio">
                {`${sessionUsername}'s Cart`}
              </div>
              <button
                onClick={onClick}
                className="float-end text-black/50 hover:text-black/40 text-2xl m-4"
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
            <div className="mx-auto mt-10 flex flex-col items-center max-w-lg w-full">
              {
                cartLoading ? <LoadingSpinner /> : cart.map((item) => <CartItem key={item.id} item={item} />)
              }
            </div>
          </div>
        </div>
      </RemoveScroll>
    );
  };

  export default CartModal;
