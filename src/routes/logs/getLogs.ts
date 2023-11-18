import { CreateApi } from "../../core/createApiFactory";
import { Log } from "./types";

export function makeGetLogs(api: CreateApi) {
    return async function getLogs(page?: number, phoneNumber?: string) {
        const path = page ? `/logs?page=${page}` : "/logs";
        const headers: {
            [key: string]: string;
        } = {};

        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }

        return await api.makeRequest<Log[]>({
            method: "GET",
            path,
            headers,
        });
    };
}
