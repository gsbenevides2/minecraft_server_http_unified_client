import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type Log } from "./types";

export function makeGetLogs(api: CreateApi) {
  return async function getLogs(page?: number, phoneNumber?: string) {
    const path = page != null ? `/logs?page=${page}` : "/logs";
    const headers: Record<string, string> = {};

    if (phoneNumber != null) {
      headers.Authorization = phoneNumber;
    }

    return await api.makeRequest<Log[]>({
      method: Method.GET,
      path,
      headers,
    });
  };
}
