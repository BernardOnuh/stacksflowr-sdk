import { HttpClient } from "../client";

export class UsersResource extends HttpClient {
  async list(params?: { page?: number; limit?: number }): Promise<any> {
    return this.http.get("/users", { params });
  }

  async get(id: string): Promise<any> {
    return this.http.get(`/users/${id}`);
  }

  async create(data: { name: string; email: string }): Promise<any> {
    return this.http.post("/users", data);
  }

  async update(id: string, data: Partial<{ name: string; email: string }>): Promise<any> {
    return this.http.patch(`/users/${id}`, data);
  }

  async delete(id: string): Promise<any> {
    return this.http.delete(`/users/${id}`);
  }
}
