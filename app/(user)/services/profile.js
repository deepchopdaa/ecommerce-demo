import { apiClient } from "../../utility/apiClient";


export function getMyOrders() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/orders/getmyOrders`, {
        method: "GET",
    });
}
export function getUserDetail() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: "GET",
    });
}
export function updateUserDetail({ formData, userId }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/profile"`, {
        method: "PUT",
        body: JSON.stringify({ ...formData, userId }),
    });
}

