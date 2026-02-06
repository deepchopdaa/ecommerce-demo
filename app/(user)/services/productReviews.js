import { apiClient } from "../../utility/apiClient";

export function addReview({ values, productId }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/addReview`, {
        method: "POST",
        body: JSON.stringify({ ...values, productId })
    });
}

