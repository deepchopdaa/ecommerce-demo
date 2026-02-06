import { apiClient } from "@/app/utility/apiClient";

export function getMyorders() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/myorders`, {
        method: "GET",
    });
}

export function updateOrderStatus({ selectedOrder, orderStatus }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/myorders/${selectedOrder?._id}`, {
        method: "PUT",
        body: JSON.stringify({ orderStatus: orderStatus }),
    });
}