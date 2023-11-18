export interface Log {
    id: number;
    timestamp: string;
    type: string;
    message: string;
}

export interface CreateLog {
    type: string;
    message: string;
    timestamp?: Date;
}
