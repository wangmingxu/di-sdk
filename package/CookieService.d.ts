import { InjectionToken } from 'injection-js';
declare const Cookies: any;
declare const COOKIE_STR_TOKEN: InjectionToken<{}>;
declare class CookieService extends Cookies {
    constructor(cookieStr: string);
}
export { CookieService, COOKIE_STR_TOKEN };
export default CookieService;
