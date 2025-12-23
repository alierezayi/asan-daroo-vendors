import { Link } from "react-router";
import { Button } from "../ui/button";
import { LogInIcon, PhoneIcon, ShoppingCartIcon } from "lucide-react";
import { faNumber } from "@/lib/utils";
import DesktopNavLinks from "./desktopNavLinks";
import MobileNavLinks from "./mobileNavLinks";

export default function Header() {
  return (
    <header className="container h-16 flex items-center justify-between gap-10 fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-white/5">
      <div className="flex items-center gap-4">
        {/* mobile nav links */}
        <MobileNavLinks />

        {/* logo */}
        <Link to="/">
          <img
            src="https://asandaroo.com/images/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
        </Link>

        {/* desktop nav links */}
        <DesktopNavLinks />
      </div>

      {/* actions buttons */}
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="icon-lg"
          className="rounded-full hidden lg:flex"
          asChild
        >
          <Link to="/cart">
            <ShoppingCartIcon className="size-5" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link to="tel:0343640">
            <span className="hidden lg:inline">پشتیبانی</span>
            <span className="lg:hidden">
              {faNumber(3640)} - {faNumber(0)}
              {faNumber(34)}
            </span>
            <PhoneIcon />
          </Link>
        </Button>
        <Button size="lg" asChild className="hidden lg:flex">
          <Link to="/login">
            ورود یا عضویت <LogInIcon />
          </Link>
        </Button>
      </div>
    </header>
  );
}
