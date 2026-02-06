import { apiClient } from "@/app/utility/apiClient";

/* profile */
export function getSellerProfile() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/profile`, {
        method: "GET",
    });
}

/* branches */
export function createSellerBranch({ form, sellerId }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/branch`, {
        method: "POST",
        body: JSON.stringify({
            ...form,
            sellerId,
        })
    });
}

export function updateSellerProfile({ data, seller }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/profile/${seller._id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
}

export function deleteSellerBranch({ id }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/branch/${id}`, {
        method: "DELETE"
    });
}


export function primarySellerBranch({ payload }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/seller/branch`, {
        method: "PUT",
        body: JSON.stringify(payload),
    });
}