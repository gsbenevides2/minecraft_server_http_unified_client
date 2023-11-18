import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type RunCommand } from "./types";

export function makeRunCommand(api: CreateApi) {
  return async function sendLog(param: RunCommand, phoneNumber?: string) {
    const headers: Record<string, string> = {};
    if (phoneNumber != null) {
      headers.Authorization = phoneNumber;
    }
    await api.makeRequest({
      method: Method.POST,
      path: "/server/runCommand",
      body: param,
      headers,
    });
  };
}
