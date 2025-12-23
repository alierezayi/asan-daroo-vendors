export interface IVendor {
  id: number;
  city_id: number;
  province_id: number;
  name: string;
  address: string;
  context: string | null;
  image: string;
  telephone: string | number | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  service_center_category_id: number;
  mobile: string | number | null;
  instagram: string | null;
  telegram: string | null;
  website: string | null;
  lat: string | number | null;
  lng: string | number | null;
  weight: string | number | null;
  viewer: number;
  status: number;
  salability: number;
}
