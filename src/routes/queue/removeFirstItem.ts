import { CreateApi } from "../../core/createApiFactory";

export function makeRemoveFirstItemQueue(api: CreateApi) {
    return async function removeFirstItemQueue() {
        await api.makeRequest({
            method: "DELETE",
            path: "/queue/minecraft",
        });
    };
}
