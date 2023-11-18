export interface GenericQueueItem {
    type: string;
    data: any;
}

export interface RunCommandQueueItem extends GenericQueueItem {
    type: "run-command";
    data: {
        command: string;
    };
}

export interface BanQueueItem extends GenericQueueItem {
    type: "ban";
    data: {
        id: string;
        reason: string;
    };
}

export type AllQueueItems = RunCommandQueueItem | BanQueueItem;
