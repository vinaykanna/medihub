import logo from "@assets/images/logo.png";
import { HeaderItem, headerNav } from "@constants/header.constants";
import { useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Header() {
  const location = useLocation();

  const headerItemsClassNames = (headerItem: HeaderItem) => {
    return twMerge(
      "px-6 py-2 border-[1px] border-secondary-light border-solid rounded-full bg-white",
      headerItem.path === location.pathname &&
        "font-medium bg-primary-light border-primary-solid shadow-md",
      headerItem.title === "Login / Sign In" &&
        "ml-10 font-medium py-3 px-8 bg-gradient-to-tr from-primary-solid to-secondary-solid text-white border-none"
    );
  };

  return (
    <header className="py-6 px-24 flex justify-between align-center">
      <div>
        <img src={logo} className="w-[204px] h-[54px]" />
      </div>
      <nav>
        <ul className="flex gap-4 align-center">
          {headerNav.map((headerItem, index) => (
            <li key={index} className="mt-4">
              <a
                className={headerItemsClassNames(headerItem)}
                href={headerItem.path}
              >
                {headerItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
