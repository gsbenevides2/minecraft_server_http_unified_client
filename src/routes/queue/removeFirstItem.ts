import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";

export function makeRemoveFirstItemQueue(api: CreateApi) {
  return async function removeFirstItemQueue() {
    await api.makeRequest({
      method: Method.DELETE,
      path: "/queue/minecraft",
    });
  };
}
