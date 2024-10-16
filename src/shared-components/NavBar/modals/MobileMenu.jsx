/* eslint-disable react/prop-types */
import SessionContext from "contexts/SessionContext";
import { useContext } from "react";

export default function MobileMenu(props) {
    const sessionContext = useContext(SessionContext)
    const sessionUsername = sessionContext.sessionUsername;
    const {setCartOpen} = props;

    return (
        <div className="md:hidden absolute flex flex-col justify-between top-16 right-0 h-36 w-36 text-emerald-300 bg-emerald-800 rounded-l-lg">
              <div className="flex text-lg text-emerald-800 items-center font-semibold p-2 bg-emerald-300">
                <i className="fa-solid fa-user text-emerald-300 bg-emerald-800 rounded-full px-2 py-1 mr-2 text-sm"></i>
                <div>{sessionUsername}</div>
              </div>
              <div className="flex-1 flex flex-col py-2">
                <button
                  className="flex items-center m-2"
                  onClick={() => {
                    sessionContext.signOut();
                  }}
                >
                  <i className="fa fa-sign-out mr-2"></i>
                  Sign-out
                </button>
                <div className="m-2 flex items-center text-emerald-300">
                  <button
                    onClick={setCartOpen}
                    className="flex items-center"
                  >
                    <i className="fa fa-cart-shopping mr-2"></i>
                    <div className="">cart</div>
                  </button>
                </div>
              </div>
            </div>
    )
}