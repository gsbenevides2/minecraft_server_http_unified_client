import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";

export function makeBanPlayer(api: CreateApi) {
  return async function banPlayer(
    xuid: string,
    reason: string,
    phoneNumber?: string,
  ) {
    const headers: Record<string, string> = {};
    if (phoneNumber != null) {
      headers.Authorization = phoneNumber;
    }

    await api.makeRequest({
      method: Method.POST,
      path: `/players/${xuid}/ban`,
      body: {
        reason,
      },
      headers,
    });
  };
}
