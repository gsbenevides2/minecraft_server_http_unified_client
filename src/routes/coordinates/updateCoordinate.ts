import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type Coordinate } from "./types";

export function makeUpdateCoordinate(api: CreateApi) {
  return async function updateCoordinate(params: Coordinate) {
    const { id, name, x, y, z } = params;
    await api.makeRequest({
      method: Method.PUT,
      path: `/coordinates/${id}`,
      body: {
        name,
        x,
        y,
        z,
      },
    });
  };
}
