import { apiClient } from "@/app/utility/apiClient";

/* UserDetail */
export function getUserDetail() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
        method: "GET",
    });
}

/* products Category / Brands */
export function getCategory() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/category`, {
        method: "GET"
    });
}
export function getBrands() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/brand`, {
        method: "GET",
    });
}

/* Product Crud */
export function getProducts() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/product`, {
        method: "GET",
    });
}

export async function createAndUpdateProducts({ url, method, formData, token }) {
    const response = await fetch(url, {
        method,
        body: formData,
        credentials: "include", // if auth/cookies used
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Request failed");
    }

    return response.json();
}


export function deleteProducts({ deleteId }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/product/${deleteId}`, {
        method: "DELETE",
    });
}
