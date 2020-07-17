import { AxiosResponse } from 'axios';


export interface IRequest<T> {
  result?: T,
  error?: {
    message: string,
    [key: string]: string,
  },
}


export type TResponce<T> = Promise<AxiosResponse<IRequest<T>>>;