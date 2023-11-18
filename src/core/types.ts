export interface Request {
  requestLine: {
    method: Method;
    url: string;
  };
  headers: Record<string, string>;
  body?: string;
}
export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
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
  method: Method;
  headers?: Record<string, string>;
  body?: any;
}

export interface ResponseReturned<T> {
  response: Response;
  data?: T;
}
export type RequestMaker = (request: Request) => Promise<Response>;
