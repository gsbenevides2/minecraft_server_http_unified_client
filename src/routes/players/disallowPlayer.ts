import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";

export function makeDisallowPlayer(api: CreateApi) {
  return async function disallowPlayer(xuid: string, phoneNumber?: string) {
    const headers: Record<string, string> = {};
    if (phoneNumber != null) {
      headers.Authorization = phoneNumber;
    }

    await api.makeRequest({
      method: Method.POST,
      path: `/players/${xuid}/disallow`,
      headers,
    });
  };
}
