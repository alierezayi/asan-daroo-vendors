import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="h-svh flex items-center justify-center">
      <Button variant="outline" asChild>
        <Link to="/vendors">مراکز فروش</Link>
      </Button>
    </div>
  );
}
