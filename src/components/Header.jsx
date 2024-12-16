import logo from "@assets/images/logo.svg";
import { headerNav } from "@constants/header.constants";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Cart from "./Cart";

function Header({ className = "", isCart }) {
  const location = useLocation();

  const headerItemsClassNames = (headerItem) => {
    return twMerge(
      "px-6 py-2 border-[1px] border-secondary-light border-solid rounded-full bg-white",
      headerItem.path === location.pathname &&
        "font-bold bg-primary-light border-primary-solid shadow-md",
      headerItem.title === "Login / Sign In" &&
        "ml-10 font-medium py-3 px-8 bg-gradient-to-tr from-primary-solid to-secondary-solid text-white border-none"
    );
  };

  return (
    <header
      className={twMerge(
        "py-6 px-24 flex justify-between align-center",
        className
      )}
    >
      <div>
        <Link to="/">
          <img src={logo} className="w-[204px] h-[54px]" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4 align-center">
          {headerNav.map((headerItem, index) => (
            <li key={index} className="mt-4">
              <Link
                className={headerItemsClassNames(headerItem)}
                to={headerItem.path}
              >
                {headerItem.title}
              </Link>
            </li>
          ))}

          {isCart && (
            <li className="mt-4">
              <Cart numOfItems={9} />
            </li>
          )}

          <li className="mt-4">
            <Link
              className={headerItemsClassNames({
                path: location.pathname,
                title: "Login / Sign in",
              })}
              to={"/login"}
            >
              {"Login / Sign in"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
