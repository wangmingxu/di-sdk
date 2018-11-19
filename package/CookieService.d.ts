import { InjectionToken } from 'injection-js';
declare const SuperClass: any;
declare const COOKIE_STR_TOKEN: InjectionToken<{}>;
declare class CookieService extends SuperClass {
    constructor(cookieStr: string);
}
export { CookieService, COOKIE_STR_TOKEN };
export default CookieService;
