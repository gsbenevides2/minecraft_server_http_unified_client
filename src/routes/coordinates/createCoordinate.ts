import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type CreateCoordinate } from "./types";

export function makeCreateCoordinate(api: CreateApi) {
  return async function createCoordinate(param: CreateCoordinate) {
    const { name, x, y, z } = param;
    const body: any = {
      name,
      x,
      y,
      z,
    };
    await api.makeRequest({
      method: Method.POST,
      path: "/coordinates",
      body,
    });
  };
}
