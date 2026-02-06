import { apiClient } from "../../utility/apiClient";


export function getSellerList() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/sellers`, {
        method: "GET",
    });
}
export function getSellerById(id) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/user/sellers/${id}`, {
        method: "GET",
    });
}

export function getSellerProducts({ sellerId, branchId }) {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/user/sellers/products?sellerId=${sellerId}`;

    if (branchId) {
        url += `&branchId=${branchId}`;
    }

    return apiClient(url, {
        method: "GET",
    });
}