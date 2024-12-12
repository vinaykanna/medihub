type HeaderItem = {
  title: string;
  path: string;
};

const headerNav: HeaderItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Login / Sign In",
    path: "/login",
  },
];

export { headerNav, type HeaderItem };
