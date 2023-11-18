import { CreateApi } from "../../core/createApiFactory";
import { RunCommand } from "./types";

export function makeRunCommand(api: CreateApi) {
    return async function sendLog(param: RunCommand, phoneNumber?: string) {
        const headers: {
            [key: string]: string;
        } = {};
        if (phoneNumber) {
            headers["Authorization"] = phoneNumber;
        }
        await api.makeRequest({
            method: "POST",
            path: "/server/runCommand",
            body: param,
            headers,
        });
    };
}
