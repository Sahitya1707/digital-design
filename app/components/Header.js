import React from "react";
import Link from "next/link";
const LinkList = (props) => {
  return (
    <Link href={`${props.link}`}>
      <li className="hover:text-[#2a2020] transition-all duration-75 cursor-pointer">
        {props.name}
      </li>
    </Link>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="bg-[#157F7F] w-[100%] h-12 px-4  ">
        <div className="flex sm:max-w-4xl sm:mx-auto items-center justify-between h-[100%]">
          <Link href="/">
            <img src="images/logo-1.png" alt="" className="w-16 h-7 " />
          </Link>
          <ul className="flex items-center gap-x-6 uppercase text-xs">
            <LinkList name="Home" link="/" />
            <LinkList name="About" link="/about" />
            <LinkList name="Contact Us" link="/contact" />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
