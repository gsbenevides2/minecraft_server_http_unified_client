import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type Player } from "./types";

export function makeListPlayers(api: CreateApi) {
  return async function listPlayers() {
    return await api.makeRequest<Player[]>({
      method: Method.GET,
      path: "/players",
    });
  };
}
