// Images
import LogoWhite from "../assets/logos/logo-white.svg";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 text-primary-content bg-light-blue-700">
      <aside>
        <img src={LogoWhite} className="w-56" />
        <p className="font-bold text-light-blue-50">
          Pixel Paradise Ltd. <br />
          Providing reliable tech since 2003
        </p>
        <p className="text-light-blue-50">
          Copyright © 2024 - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
