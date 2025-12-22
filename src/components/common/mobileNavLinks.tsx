import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDownIcon, LogInIcon, MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { NAV_LINKS } from "@/constants/links";
import { Link } from "react-router";

export default function MobileNavLinks() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon-lg"
          className="rounded-full lg:hidden"
        >
          <MenuIcon className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-2">
        <div className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            if (link.to) {
              return (
                <Button asChild variant="ghost" className="px-2 justify-start">
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                </Button>
              );
            }
            return (
              <Button
                key={link.label}
                variant="ghost"
                className="px-2 justify-start"
              >
                {link.label}
                <ChevronDownIcon />
              </Button>
            );
          })}
          <Button size="lg" asChild className="">
            <Link to="/login">
              ورود یا عضویت <LogInIcon />
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
