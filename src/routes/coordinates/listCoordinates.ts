import { type CreateApi } from "../../core/createApiFactory";
import { type Coordinate } from "./types";

export function makeListCoordinates(api: CreateApi) {
  return async function listCoordinates() {
    return await api.makeRequest<Coordinate[]>({
      method: "GET",
      path: "/coordinates",
    });
  };
}
