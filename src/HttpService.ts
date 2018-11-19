import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Injectable, InjectionToken, Injector } from 'injection-js';
import HttpInterceptorHandler from './utils/HttpInterceptorHandler';

const HTTP_REQUEST_INTERCEPTORS = new InjectionToken('HTTP_REQUEST_INTERCEPTORS');

const HTTP_RESPONSE_INTERCEPTORS = new InjectionToken('HTTP_RESPONSE_INTERCEPTORS');

const HTTP_ALIAS_TOKEN = new InjectionToken('HTTP_ALIAS_TOKEN');

const HttpMethods = ['GET', 'POST', 'PUT', 'DELETE'];

export type aliasMap<T> = { [P in keyof T]: <R = any>(args?: any, config?: AxiosRequestConfig) => Promise<R> };

@Injectable()
class HttpService {
  public axiosInstance: AxiosInstance;
  public alias;
  // static get parameters() {
  //   return [
  //     new Inject(APP_CONFIG_TOKEN),
  //     Injector,
  //   ];
  // }
  constructor(
    injector: Injector
    ) {
    this.axiosInstance = axios.create();
    const reqhandlers = injector.get(HTTP_REQUEST_INTERCEPTORS, []);
    const reshandlers = injector.get(HTTP_RESPONSE_INTERCEPTORS, []);
    this.interceptRequest(reqhandlers);
    this.interceptResponse(reshandlers);
    const httpAlias = injector.get(HTTP_ALIAS_TOKEN, {});
    this.alias = this.registerAlias(httpAlias);
  }
  public registerAlias = <T>(rMap: T) =>
    Object.keys(rMap).reduce<aliasMap<T>>((fMap, key) => {
      fMap[key] = (data, config = {}) => {
        if (typeof rMap[key] === 'string') {
          if (HttpMethods.some(v => rMap[key].startsWith(v))) {
            const [method, url] = rMap[key].split(' ');
            return this.axiosInstance(Object.assign(config, {
              url,
              method,
              [/GET/i.test(method) ? 'params' : 'data']: data,
            }));
          }
          return this.axiosInstance(Object.assign(config, { url: rMap[key], params: data }));
        }
        return this.axiosInstance(Object.assign(rMap[key], { data }));
      };
      return fMap;
    }, {} as any);
  public interceptRequest(interceptors) {
    this.axiosInstance.interceptors.request.use((req) => {
      const chain = interceptors.reduceRight(
        (next, interceptor) => new HttpInterceptorHandler(next, interceptor),
        null,
      );
      return chain.handle(req);
    });
  }
  public interceptResponse(interceptors) {
    this.axiosInstance.interceptors.response.use((res) => {
      const chain = interceptors.reduceRight(
        (next, interceptor) => new HttpInterceptorHandler(next, interceptor),
        null,
      );
      return chain.handle(res);
    });
  }
}

export { HttpService, HTTP_REQUEST_INTERCEPTORS, HTTP_RESPONSE_INTERCEPTORS, HTTP_ALIAS_TOKEN };

export default HttpService;
