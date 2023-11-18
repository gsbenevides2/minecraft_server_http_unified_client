import { HttpError } from "./httpError";
import { URL } from "whatwg-url";
import {
  type RequestMaker,
  type CreateApiOptions,
  type RequestOptions,
  type ResponseReturned,
} from "./types";

export abstract class CreateApi {
  private readonly _apiUrl: URL;
  private _defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  private readonly _requestMaker: RequestMaker;

  constructor(options: CreateApiOptions, requestMaker: RequestMaker) {
    this._apiUrl = new URL(options.apiUrl);
    this._requestMaker = requestMaker;
    if (options.defaultHeaders != null) {
      this._defaultHeaders = {
        ...this._defaultHeaders,
        ...options.defaultHeaders,
      };
    }
  }

  addDefaultHeader(key: string, value: string): void {
    this._defaultHeaders[key] = value;
  }

  removeDefaultHeader(key: string): void {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete this._defaultHeaders[key];
  }

  async makeRequest<T>(options: RequestOptions): Promise<ResponseReturned<T>> {
    return await new Promise<ResponseReturned<T>>((resolve, reject) => {
      const mergedUrl = new URL(options.path, this._apiUrl);
      const mergedHeaders = {
        ...this._defaultHeaders,
        ...options.headers,
      };
      const stringBody =
        options.body != null
          ? typeof options.body === "string"
            ? options.body
            : JSON.stringify(options.body)
          : undefined;
      const method = String(options.method).toUpperCase();

      const request = {
        requestLine: {
          method,
          url: mergedUrl,
        },
        headers: mergedHeaders,
        body: stringBody,
      };

      void this._requestMaker(request).then((response) => {
        const parsedData: T = response.headers["content-type"]?.includes(
          "application/json",
        )
          ? JSON.parse(response.body)
          : undefined;

        if (response.statusLine.statusCode >= 400) {
          reject(
            new HttpError({
              response,
              data: parsedData,
            }),
          );
        } else {
          resolve({
            response,
            data: parsedData,
          });
        }
      });
    });
  }
}
