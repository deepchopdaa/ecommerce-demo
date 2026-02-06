import { apiClient } from "@/app/utility/apiClient";
export function getCategory() {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/category`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export function createCategory({ data }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/category`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export function updateCategory({ editId, data }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/category/${editId}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        }
    });
}

export function deleteCategory({ id }) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/admin/category/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    });
}