import { type URL } from "whatwg-url";
export interface Request {
  requestLine: {
    method: string;
    url: URL;
  };
  headers: Record<string, string>;
  body?: string;
}

export interface Response {
  statusLine: {
    statusCode: number;
    statusMessage: string;
  };
  headers: Record<string, string>;
  body: string;
}

export interface CreateApiOptions {
  apiUrl: string;
  defaultHeaders?: Record<string, string>;
}

export interface RequestOptions {
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  body?: any;
}

export interface ResponseReturned<T> {
  response: Response;
  data?: T;
}
export type RequestMaker = (request: Request) => Promise<Response>;
