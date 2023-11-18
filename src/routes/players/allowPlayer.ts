import { CreateApi } from "../../core/createApiFactory";

export function makeAllowPlayer(api: CreateApi) {
    return async function allowPlayer(xuid: string, phoneNumber?: string) {
        const headers: {
            [key: string]: string;
        } = {};
        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }

        await api.makeRequest({
            method: "POST",
            path: `/players/${xuid}/allow`,
            headers,
        });
    };
}
