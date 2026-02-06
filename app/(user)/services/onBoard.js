import { apiClient } from "../../utility/apiClient";

export function onBoardUser({ data, userId }) {
    console.log(userId, "userId , service file log")
    return apiClient(`${process.env.NEXT_PUBLIC_API_URL}/auth/onBoard`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            Authorization: userId,
        }
    });
}