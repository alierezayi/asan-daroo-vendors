import { API_BASE_URL } from "@/constants/api";
import type { IResponse } from "@/interfaces/IResponse";
import type { IVendor } from "@/interfaces/IVendor";

export default async function getVendors(args?: {
  page?: number;
}): Promise<{ vendors: IResponse<IVendor[]> } | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/get-vendor-list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: args?.page || 1 }),
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
