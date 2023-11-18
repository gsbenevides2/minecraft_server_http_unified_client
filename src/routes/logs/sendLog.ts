import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type CreateLog } from "./types";

export function makeSendLog(api: CreateApi) {
  return async function sendLog(param: CreateLog) {
    const { type, message, timestamp } = param;
    const body: any = {
      type,
      message,
    };
    if (timestamp != null) {
      body.timestamp = timestamp.toISOString();
    }
    await api.makeRequest({
      method: Method.POST,
      path: "/logs",
      body,
    });
  };
}
