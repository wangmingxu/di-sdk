import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { InjectionToken, Injector } from 'injection-js';
declare const HTTP_REQUEST_INTERCEPTORS: InjectionToken<{}>;
declare const HTTP_RESPONSE_INTERCEPTORS: InjectionToken<{}>;
declare const HTTP_ALIAS_TOKEN: InjectionToken<{}>;
export declare type aliasMap<T> = {
    [P in keyof T]: <R = any>(args?: any, config?: AxiosRequestConfig) => Promise<R>;
};
declare class HttpService {
    axiosInstance: AxiosInstance;
    alias: any;
    constructor(injector: Injector);
    registerAlias: <T>(rMap: T) => aliasMap<T>;
    interceptRequest(interceptors: any): void;
    interceptResponse(interceptors: any): void;
}
export { HttpService, HTTP_REQUEST_INTERCEPTORS, HTTP_RESPONSE_INTERCEPTORS, HTTP_ALIAS_TOKEN };
export default HttpService;
