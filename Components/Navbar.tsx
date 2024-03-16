import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";
const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key}
          className="cursor-pointer hover:font-bold flex-center transition-all">
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
        type="button"
        title="log in"
        icon="/user.svg"
        varient="btn_dark_green"
        />
      </div>
      <Image
      src='menu.svg'
      alt="menu"
      width={24}
      height={24}
      className=" inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
