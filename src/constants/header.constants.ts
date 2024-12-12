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
    path: "/about-us",
  },
  {
    title: "Contact",
    path: "/contact-us",
  },
  {
    title: "Login / Sign In",
    path: "/login",
  },
];

export { headerNav, type HeaderItem };
