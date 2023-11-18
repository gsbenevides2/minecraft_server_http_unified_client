import { type Response, type ResponseReturned } from "./types";

export class HttpError extends Error {
  response: Response;
  data?: any;
  constructor(error: ResponseReturned<any>) {
    super(
      `HTTP Error: ${error.response.statusLine.statusCode} ${error.response.statusLine.statusMessage}`,
    );
    this.response = error.response;
    this.data = error.data;
  }
}
