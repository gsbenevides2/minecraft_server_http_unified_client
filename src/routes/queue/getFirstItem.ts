import { Method } from "../../core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type AllQueueItems } from "./types";

export function makeGetFirstItemQueue(api: CreateApi) {
  return async function getFirstItemQueue() {
    return await api.makeRequest<AllQueueItems>({
      method: Method.GET,
      path: "/queue/minecraft",
    });
  };
}
