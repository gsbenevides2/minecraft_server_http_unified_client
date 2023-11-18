import { CreateApi } from "./core/createApiFactory";
import { makeUpdateCoordinate } from "./routes/coordinates/updateCoordinate";
import { makeGetLogs } from "./routes/logs/getLogs";
import { makeSendLog } from "./routes/logs/sendLog";

import { makeGetFirstItemQueue } from "./routes/queue/getFirstItem";
import { makeRemoveFirstItemQueue } from "./routes/queue/removeFirstItem";
import { makeListCoordinates } from "./routes/coordinates/listCoordinates";
import { makeCreateCoordinate } from "./routes/coordinates/createCoordinate";
import { makeRunCommand } from "./routes/server/runCommand";
import { makeGetPlayer } from "./routes/players/getPlayer";
import { makeListPlayers } from "./routes/players/listPlayers";
import { makeRegisterLogin } from "./routes/players/registerLogin";
import { makeAllowPlayer } from "./routes/players/allowPlayer";
import { makeDisallowPlayer } from "./routes/players/disallowPlayer";
import { makeBanPlayer } from "./routes/players/banPlayer";
import { makeUnbanPlayer } from "./routes/players/unbanPlayer";
import { type RequestMaker } from "./core/types";

export class Api extends CreateApi {
  constructor(requestMaker: RequestMaker, phoneNumberOrGametag?: string) {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (phoneNumberOrGametag != null) {
      headers.Authorization = phoneNumberOrGametag;
    }
    super(
      {
        apiUrl: "http://localhost:3000",
        defaultHeaders: headers,
      },
      requestMaker,
    );
  }

  getFirstItemQueue: ReturnType<typeof makeGetFirstItemQueue> =
    makeGetFirstItemQueue(this);

  removeFirstItemQueue: ReturnType<typeof makeRemoveFirstItemQueue> =
    makeRemoveFirstItemQueue(this);

  getLogs: ReturnType<typeof makeGetLogs> = makeGetLogs(this);
  sendLog: ReturnType<typeof makeSendLog> = makeSendLog(this);

  updateCoordinate: ReturnType<typeof makeUpdateCoordinate> =
    makeUpdateCoordinate(this);

  listCoordinates: ReturnType<typeof makeListCoordinates> =
    makeListCoordinates(this);

  createCoordinate: ReturnType<typeof makeCreateCoordinate> =
    makeCreateCoordinate(this);

  runCommand: ReturnType<typeof makeRunCommand> = makeRunCommand(this);

  getPlayer: ReturnType<typeof makeGetPlayer> = makeGetPlayer(this);
  listPlayers: ReturnType<typeof makeListPlayers> = makeListPlayers(this);
  registerLogin: ReturnType<typeof makeRegisterLogin> = makeRegisterLogin(this);
  allowPlayer: ReturnType<typeof makeAllowPlayer> = makeAllowPlayer(this);
  disallowPlayer: ReturnType<typeof makeDisallowPlayer> =
    makeDisallowPlayer(this);

  banPlayer: ReturnType<typeof makeBanPlayer> = makeBanPlayer(this);
  unbanPlayer: ReturnType<typeof makeUnbanPlayer> = makeUnbanPlayer(this);
}
