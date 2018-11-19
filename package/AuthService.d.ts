import { InjectionToken, Injector } from 'injection-js';
import ClientDetectService from './ClientDetectService';
import CookieService from './CookieService';
declare const AUTH_TOKEN_KEY: InjectionToken<{}>;
declare class AuthService {
    private cdServ;
    private cookieServ;
    private config;
    private injector;
    private jsbServ;
    private loginCb;
    private isLogin;
    private tokenStr;
    constructor(cdServ: ClientDetectService, cookieServ: CookieService, config: any, injector: Injector);
    onLogin(cb: any): Promise<void>;
    applyLogin(): Promise<void>;
    getToken(): Promise<string>;
    checkLogin(): Promise<boolean>;
}
export { AuthService, AUTH_TOKEN_KEY };
export default AuthService;
