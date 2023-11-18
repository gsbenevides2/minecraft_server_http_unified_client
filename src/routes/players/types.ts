export interface GenericPlayer {
    xuid: string;
    username: string;
    lastLogin: string;
    lastLogout?: string;
    isAllowed: boolean;
    isBanned: boolean;
    banReason?: string;
    isAdmin: boolean;
}

export interface BannedPlayer extends GenericPlayer {
    isBanned: true;
    banReason: string;
}

export interface UnbannedPlayer extends GenericPlayer {
    isBanned: false;
    banReason?: undefined;
}

export type Player = BannedPlayer | UnbannedPlayer;

export interface RegisterLogin {
    username: string;
    xuid: string;
}
