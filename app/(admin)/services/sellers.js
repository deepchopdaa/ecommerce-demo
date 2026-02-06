import { apiClient } from "@/app/utility/apiClient";

export function getsellerList() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/sellerList`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",

        }
    });
}