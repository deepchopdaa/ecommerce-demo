import { apiClient } from "../../utility/apiClient";

export function registerUser(payload) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify(payload),
    });
}

export function loginUser(payload) {
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(payload),
    });
}
