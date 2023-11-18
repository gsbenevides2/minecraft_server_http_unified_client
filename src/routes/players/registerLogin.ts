import { CreateApi } from "../../core/createApiFactory";
import { RegisterLogin } from "./types";

export function makeRegisterLogin(api: CreateApi) {
    return async function registerLogin(param: RegisterLogin) {
        await api.makeRequest({
            method: "POST",
            path: "/players/login",
            body: param,
        });
    };
}
