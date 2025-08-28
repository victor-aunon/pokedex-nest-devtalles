import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from '../interfaces/http-adapter.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.get<T>(url);
      return data;
    } catch (error) {
      throw new Error(`This is a custom error ${error}`);
    }
  }

  async post<T>(url: string, data: any): Promise<T> {
    try {
      const { data: responseData } = await this.axios.post<T>(url, data);
      return responseData;
    } catch (error) {
      throw new Error(`This is a custom error ${error}`);
    }
  }

  async put<T>(url: string, data: any): Promise<T> {
    try {
      const { data: responseData } = await this.axios.put<T>(url, data);
      return responseData;
    } catch (error) {
      throw new Error(`This is a custom error ${error}`);
    }
  }

  async delete<T>(url: string): Promise<T> {
    try {
      const { data } = await this.axios.delete<T>(url);
      return data;
    } catch (error) {
      throw new Error(`This is a custom error ${error}`);
    }
  }

  async patch<T>(url: string, data: any): Promise<T> {
    try {
      const { data: responseData } = await this.axios.patch<T>(url, data);
      return responseData;
    } catch (error) {
      throw new Error(`This is a custom error ${error}`);
    }
  }
}
