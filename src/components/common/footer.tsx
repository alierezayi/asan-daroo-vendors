import { API_BASE_URL } from "@/constants/api";
import { faNumber } from "@/lib/utils";
import { MapPinIcon, PhoneIcon, SmartphoneIcon } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      {/* banner */}
      <div>
        <img
          src={`${API_BASE_URL}/build/assets/footer-CrDnjEEn.svg`}
          className="w-full h-[400px] object-cover object-center"
          alt="footer banner"
        />
      </div>

      {/* content */}
      <div className="bg-[#edf4f6] container pb-14">
        {/* socials (icons not exist) */}
        <div className="flex items-center gap-4"></div>

        {/* links */}
        <div className="mt-4 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-14">
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl lg:text-lg font-medium mb-6 lg:mb-8">
              تماس با ما
            </h3>
            <div className="flex flex-col items-center lg:items-start gap-6 text-sm font-medium">
              <div className="flex items-center gap-2 w-fit">
                <MapPinIcon className="size-4" />
                <p className="max-w-[200px]">
                  استان کرمان، شهرستان کرمان، بلوار فردوسی خیابان وحشی بافقی
                  کوچه شمال 3 شرقی 3 پلاک 28 طبقه همکف
                </p>
              </div>

              <Link to="tel:0343640" className="flex items-center gap-2 w-fit">
                <PhoneIcon className="size-4" />
                <span>
                  {faNumber(3640)} - {faNumber(0)}
                  {faNumber(34)}
                </span>
              </Link>

              <Link to="tel:0343640" className="flex items-center gap-2 w-fit">
                <SmartphoneIcon className="size-4" />
                <span>
                  {faNumber(3640)} - {faNumber(0)}
                  {faNumber(34)}
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl lg:text-lg font-medium mb-6 lg:mb-8">
              دسترسی سریع
            </h3>
            <div className="flex flex-col items-center lg:items-start gap-6 text-sm font-medium">
              <Link
                to="/service-center"
                className="flex items-center gap-2 w-fit"
              >
                مراکز خرید
              </Link>

              <Link to="/about-us" className="flex items-center gap-2 w-fit">
                درباره ما
              </Link>

              <Link to="/rules" className="flex items-center gap-2 w-fit">
                قوانین و مقررات
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <img
              src={`${API_BASE_URL}/images/seplogo.png`}
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* copyright */}
        <div className="text-center mt-8">
          <p>تمامی حقوق این سایت متعلق به آسان دارو می‌باشد.</p>
        </div>
      </div>
    </footer>
  );
}
