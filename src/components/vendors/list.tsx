// import { useSearchParams } from "react-router";
// import { useQuery } from "@tanstack/react-query";
// import getVendors from "@/api/vendors";
import { vendorsMockData } from "@/mock/vendors";
import VendorSearchbar from "./searchbar";
import VendorItem from "./item";

export default function VendorList() {
  // const [searchParams] = useSearchParams();

  // const page = Number(searchParams.get("page") ?? 1);

  // const query = useQuery({
  //   queryKey: ["vendors", page],
  //   queryFn: () => getVendors({ page }),
  // });

  // if (query.isLoading) {
  //   return <div className="my-16">loading...</div>;
  // }

  // if (query.error) {
  //   return <div className="my-16">خطا در دریافت داروخانه ها</div>;
  // }

  // if (!query.data || !query.data.vendors.data.length) {
  //   return <div className="my-16">داروخانه ای یافت نشد</div>;
  // }

  return (
    <div className="my-16 container">
      {/* searchbar */}
      <VendorSearchbar />

      {/* list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {vendorsMockData.map((vendor) => (
          <VendorItem key={vendor.id} vendor={vendor} />
        ))}
      </div>

      {/* pagination (needed api) */}
    </div>
  );
}
