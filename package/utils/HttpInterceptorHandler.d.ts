declare class HttpInterceptorHandler {
    private next;
    private interceptor;
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    constructor(next: any, interceptor: any);
    /**
     * @param {?} req
     * @return {?}
     */
    handle(req: any): any;
}
export default HttpInterceptorHandler;
