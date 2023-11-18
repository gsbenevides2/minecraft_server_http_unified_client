import { CreateApi } from "../../core/createApiFactory";
import { CreateLog } from "./types";

export function makeSendLog(api: CreateApi) {
    return async function sendLog(param: CreateLog) {
        const { type, message, timestamp } = param;
        const body: any = {
            type,
            message,
        };
        if (timestamp) {
            body["timestamp"] = timestamp.toISOString();
        }
        await api.makeRequest({
            method: "POST",
            path: "/logs",
            body,
        });
    };
}
