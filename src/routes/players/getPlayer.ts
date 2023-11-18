import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type Player } from "./types";

export function makeGetPlayer(api: CreateApi) {
  return async function getPlayer(xuid: string) {
    return await api.makeRequest<Player>({
      method: Method.GET,
      path: `/players/${xuid}`,
    });
  };
}
