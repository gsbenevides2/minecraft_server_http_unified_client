import { CreateApi } from "../../core/createApiFactory";
import { Player } from "./types";

export function makeGetPlayer(api: CreateApi) {
    return async function getPlayer(xuid: string) {
        return await api.makeRequest<Player>({
            method: "GET",
            path: `/players/${xuid}`,
        });
    };
}
