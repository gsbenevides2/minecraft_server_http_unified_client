import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";

export function makeUnbanPlayer(api: CreateApi) {
  return async function unbanPlayer(xuid: string, phoneNumber?: string) {
    const headers: Record<string, string> = {};
    if (phoneNumber != null) {
      headers.Authorization = phoneNumber;
    }

    await api.makeRequest({
      method: Method.POST,
      path: `/players/${xuid}/unban`,
      headers,
    });
  };
}
