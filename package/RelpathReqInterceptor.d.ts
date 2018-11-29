declare class RelpathRequestInterceptor {
    private location;
    constructor(location: any);
    intercept(req: any, next: any): any;
}
export default RelpathRequestInterceptor;
