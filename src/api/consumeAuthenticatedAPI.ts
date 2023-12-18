import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import router from '@/router'

export class ApiClient {
  
  private axiosInstance: AxiosInstance|null;
  private controller: AbortController|null;
  
  constructor() {
    this.controller = null;
    this.axiosInstance = null;
  }
  
  private async handleRequest<T>(
    promise: Promise<AxiosResponse<T>>,
  ) {
    try {
      const response = await promise;
      if (response.status === 200) {
        return response.data
      } else {
        throw new Error('Request error')
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (axios.isCancel(error)) {
          throw new Error('The request was cancelled')
        } else {
          localStorage.clear()
          router.push('/not-found')
          return error
        }
      } else {
        throw new Error('An unexpected error occurred')
      }
    }
  }
  
  public get<T>(
    endpoint: string,
  ) {
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    const token = localStorage.getItem('token') || '';
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
    this.controller = new AbortController()
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      headers: headers,
      signal: this.controller.signal,
    });
    const promise = this.axiosInstance.get<T>(endpoint);
    
    return this.handleRequest<T>(promise) 
  }
  
  public async cancelRequest():Promise<void> {
    if( this.controller !== null ){
      await this.controller.abort();
    }
  }
  
}
