import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { STORAGE_URL } from "@/constants/api";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Link } from "react-router";
import type { IVendor } from "@/interfaces/IVendor";

interface IVendorItemProps {
  vendor: IVendor;
}

export default function VendorItem({ vendor }: IVendorItemProps) {
  return (
    <Link to={`/vendors/${vendor.id}`}>
      <Card key={vendor.id} className="py-4 rounded-2xl gap-2 group">
        <CardHeader className="px-4">
          <div className="relative aspect-3/4 rounded-xl overflow-hidden">
            <img
              src={`${STORAGE_URL}/${vendor.image}`}
              alt={vendor.name}
              loading="lazy"
              className="object-cover size-full group-hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </CardHeader>
        <CardContent className="text-center px-4">
          <CardTitle className="text-sm font-bold">{vendor.name}</CardTitle>
          <CardDescription className="mt-1 text-xs font-semibold line-clamp-2 h-8">
            {vendor.address}
          </CardDescription>
        </CardContent>
        <CardFooter className="px-4">
          <Button className="w-full" variant="ghost">
            مشاهده محصولات
            <ArrowLeftIcon className="size-5" />
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
