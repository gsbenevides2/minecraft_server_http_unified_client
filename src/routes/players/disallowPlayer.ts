import { CreateApi } from "../../core/createApiFactory";

export function makeDisallowPlayer(api: CreateApi) {
    return async function disallowPlayer(xuid: string, phoneNumber?: string) {
        const headers: {
            [key: string]: string;
        } = {};
        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }

        await api.makeRequest({
            method: "POST",
            path: `/players/${xuid}/disallow`,
            headers,
        });
    };
}
