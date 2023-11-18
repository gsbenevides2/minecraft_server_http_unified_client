import { CreateApi } from "../../core/createApiFactory";

export function makeUnbanPlayer(api: CreateApi) {
    return async function unbanPlayer(xuid: string, phoneNumber?: string) {
        const headers: {
            [key: string]: string;
        } = {};
        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }

        await api.makeRequest({
            method: "POST",
            path: `/players/${xuid}/unban`,
            headers,
        });
    };
}
