import axios, { AxiosInstance } from "axios";

export interface SDKConfig {
  baseURL: string;
  apiKey: string;
  timeout?: number;
}

export class HttpClient {
  protected http: AxiosInstance;

  constructor(config: SDKConfig) {
    this.http = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        "Authorization": `Bearer ${config.apiKey}`,
        "Content-Type": "application/json",
      },
    });

    this.http.interceptors.response.use(
      (response) => response.data,
      (error) => {
        const message = error.response?.data?.message || error.message;
        throw new Error(`SDK Error [${error.response?.status}]: ${message}`);
      }
    );
  }
}
