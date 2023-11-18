import { CreateApi } from "../../core/createApiFactory";
import { Player } from "./types";

export function makeListPlayers(api: CreateApi) {
    return async function listPlayers() {
        return await api.makeRequest<Player[]>({
            method: "GET",
            path: "/players",
        });
    };
}
