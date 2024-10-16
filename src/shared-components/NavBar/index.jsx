import { useContext, useState } from "react";
import SessionContext from "contexts/SessionContext";
import { Link } from "react-router-dom";
import UserMenu from "./modals/UserMenu";
import CartModal from "./modals/CartModal";
import MobileMenu from "./modals/MobileMenu";

const NavBar = () => {
  const sessionContext = useContext(SessionContext);
  const sessionUsername = sessionContext.sessionUsername;
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className="flex justify-center w-full bg-emerald-700 p-2 h-24 shadow-lg shadow-gray-400"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="w-full max-w-5xl flex justify-between">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="px-4 h-20"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
                alt="logo"
              />
              <div className="font-bio text-white text-2xl md:text-3xl">
                Rica&apos;s Plants
              </div>
            </div>
          </Link>
          <div className="md:flex items-center hidden">
            <div className="relative h-full">
              <button
                className="h-full"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <div className="px-2 flex text-lg text-emerald-300 items-center font-semibold">
                  <i className="m-2 fa-solid fa-user bg-emerald-800 rounded-full py-2 px-3 text-sm"></i>
                  <div>{sessionUsername}</div>
                </div>
              </button>
              {userMenuOpen && <UserMenu />}
            </div>
            <div className="mx-4 text-emerald-300 text-lg">
              <button
                onClick={() => setCartOpen(true)}
                className="flex items-center"
              >
                <i className="fa fa-cart-shopping mr-1"></i>
                <div className="hidden md:block">cart</div>
              </button>
            </div>
          </div>
          <div className="relative flex items-center m-4 text-2xl text-white md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
          {mobileMenuOpen && <MobileMenu setCartOpen={() => setCartOpen(!cartOpen)}/>}
        </div>
      </div>
      {cartOpen && <CartModal onClick={() => setCartOpen(!cartOpen)} />}
    </>
  );
};

export default NavBar;
