import { getServerSession } from "next-auth";
import {GET} from "@/app/api/auth/[...nextauth]/route";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  token: string;
}

const defaultBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
export class HttpClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaultBaseUrl;
  }

  private async getHeader() {
    const session = await getServerSession(GET) as AuthUser | null;
    console.log("session", session);
    
    const headers : Record<string, string> = {
      "Content-Type": "application/json",
    }
    if (session && session.token){
      headers["Authorization"] = `Bearer ${session.token}`;
    }
    return headers;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    return await response.json();
  }

  async get<T>(url: string): Promise<T> {
    const header = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: header,
      method: "GET",
      cache: "no-store",
    });
    return this.handleResponse(response);
  }

  async getById<T>(url: string, id: string): Promise<T> {
    const header = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}/${id}`, {
      headers: header,
      method: "GET",
    });
    return this.handleResponse(response);
  }

  async delete<T>(url: string, id: string): Promise<T> {
    const header = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}/${id}`, {
      headers: header,
      method: "DELETE",
    });
    return this.handleResponse(response);
  }

  async put<T, R>(url: string, id: string, data: R): Promise<T> {
    const header = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}/${id}`, {
      headers: header,
      method: "PUT",
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }

  async post<T, R>(url: string, data: R): Promise<T> {
    const header = await this.getHeader();
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: header,
      method: "POST",
      body: JSON.stringify(data),
    });
    return this.handleResponse(response);
  }
}


/* await getserversession(authOptions) */