import VendorBanner from "@/components/vendors/banner";
import VendorList from "@/components/vendors/list";

export default function VendorsPage() {
  return (
    <div className="flex flex-col">
      <VendorBanner />
      <VendorList />
    </div>
  );
}
