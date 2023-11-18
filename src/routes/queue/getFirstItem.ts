import { CreateApi } from "../../core/createApiFactory";
import { AllQueueItems } from "./types";

export function makeGetFirstItemQueue(api: CreateApi) {
    return async function getFirstItemQueue() {
        return await api.makeRequest<AllQueueItems>({
            method: "GET",
            path: "/queue/minecraft",
        });
    };
}
