/**
 * 用于服务端渲染请求接口转发useragent
 * @class UseragentInterceptor
 */
declare class UseragentInterceptor {
    private useragent;
    constructor(useragent: string);
    intercept(req: any, next: any): any;
}
export default UseragentInterceptor;
