import { Link } from "react-router";
import { Button } from "../ui/button";
import { ChevronDownIcon } from "lucide-react";
import { NAV_LINKS } from "@/constants/links";

export default function DesktopNavLinks() {
  return (
    <div className="hidden lg:flex gap-2 text-sm">
      {NAV_LINKS.map((link) => {
        if (link.to) {
          return (
            <Button asChild variant="ghost" className="px-2">
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            </Button>
          );
        }
        return (
          <Button key={link.label} variant="ghost" className="px-2">
            {link.label}
            <ChevronDownIcon />
          </Button>
        );
      })}
    </div>
  );
}
