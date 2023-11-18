import { Method } from "core/types";
import { type CreateApi } from "../../core/createApiFactory";
import { type RegisterLogin } from "./types";

export function makeRegisterLogin(api: CreateApi) {
  return async function registerLogin(param: RegisterLogin) {
    await api.makeRequest({
      method: Method.POST,
      path: "/players/login",
      body: param,
    });
  };
}
