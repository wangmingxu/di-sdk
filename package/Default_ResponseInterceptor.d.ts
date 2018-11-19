import { AxiosResponse } from 'axios';
export interface IServerResponse<T = any> {
    status: number;
    data: T;
    msg: string;
}
declare class DefaultResponseInterceptor {
    intercept(res: AxiosResponse<IServerResponse>): Promise<any>;
}
export default DefaultResponseInterceptor;
