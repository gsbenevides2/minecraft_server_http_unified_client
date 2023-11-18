import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";

export function makeAllowPlayer(api: CreateApi) {
    return async function allowPlayer(xuid: string, phoneNumber?: string) {
        const headers: Record<string, string> = {};
        if (phoneNumber != null) {
            headers.Authorization = phoneNumber;
        }

        await api.makeRequest({
            method: Method.POST,
            path: `/players/${xuid}/allow`,
            headers,
        });
    };
}
