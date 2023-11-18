import { CreateApi } from "../../core/createApiFactory";

export function makeBanPlayer(api: CreateApi) {
    return async function banPlayer(xuid: string, reason: string, phoneNumber?: string) {
        const headers: {
            [key: string]: string;
        } = {};
        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }

        await api.makeRequest({
            method: "POST",
            path: `/players/${xuid}/ban`,
            body: {
                reason,
            },
            headers,
        });
    };
}
