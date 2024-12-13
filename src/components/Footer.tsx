import { FooterItem, footerNav } from "@constants/footer.constants";
import logo from "@assets/images/logo.png";
import facebook from "@assets/images/facebook.svg";
import twitter from "@assets/images/twitter.svg";
import instagram from "@assets/images/instagram.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <main className="p-14 flex justify-between">
        <aside>
          <img src={logo} alt="" className="w-[109px] h-[28px]" />
          <ul className="mt-2">
            {footerNav[0].elements.map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="text-[#737373] text-sm">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLogos />
        </aside>
        <aside>
          <FooterNavSection footerItem={footerNav[1]} />
        </aside>
        <aside>
          <FooterNavSection footerItem={footerNav[2]} />
          <FooterNavSection footerItem={footerNav[3]} className="mt-4" />
        </aside>
        <aside>
          <FooterNavSection footerItem={footerNav[4]} />
          <FooterNavSection footerItem={footerNav[5]} className="mt-4" />
        </aside>
        <aside>
          <FooterNavSection footerItem={footerNav[6]} />
        </aside>
      </main>
      <article className="bg-secondary-light py-6 text-center">
        <p className="text-grey">
          Copyright © {new Date().getFullYear()}, Medihub. All rights reserved.
        </p>
      </article>
    </footer>
  );
}

const SocialLogos = () => {
  return (
    <div className="mt-4">
      <h4 className="font-medium font-nunito-medium">Follow us on:</h4>
      <div className="flex gap-4 mt-2">
        <a href="http://">
          <img src={facebook} alt="" className="w-6 h-6" />
        </a>
        <a href="http://">
          <img src={instagram} alt="" className="w-6 h-6" />
        </a>
        <a href="http://">
          <img src={twitter} alt="" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

const FooterNavSection = ({
  className = "",
  footerItem,
}: {
  className?: string;
  footerItem: FooterItem;
}) => {
  return (
    <div className={className}>
      <h4 className="font-medium text-lg font-nunito-bold">
        {footerNav[1].title}
      </h4>
      <ul className="mt-1">
        {footerItem.elements.map((item, index) => (
          <li key={index}>
            <Link className="text-[#737373] text-sm" to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Footer;
