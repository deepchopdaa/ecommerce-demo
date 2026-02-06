import { apiClient } from "../../utility/apiClient";

export function createOrder({ submitdata }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/orders/createOrder`, {
        method: "POST",
        body: JSON.stringify(submitdata),
    });
}