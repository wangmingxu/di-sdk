import { InjectionToken, Injector } from 'injection-js';
declare const APP_USERAGENT_TOKEN: InjectionToken<{}>;
declare const EXTENDS_CLIENT_TOKEN: InjectionToken<{}>;
interface ICDService {
    readonly isAndroid: boolean;
    readonly isIPhone: boolean;
    readonly isIPad: boolean;
    readonly isWeiBo: boolean;
    readonly isWeiXin: boolean;
    readonly isUC: boolean;
    readonly isQQ: boolean;
    readonly isSafari: boolean;
}
declare class ClientDetectService implements ICDService {
    protected source: string;
    private injector;
    constructor(source: string, injector: Injector);
    private registerClient;
    readonly [key: string]: any;
    readonly isAndroid: boolean;
    readonly isIPhone: boolean;
    readonly isIPad: boolean;
    readonly isWeiBo: boolean;
    readonly isWeiXin: boolean;
    readonly isUC: boolean;
    readonly isQQ: boolean;
    readonly isSafari: boolean;
}
export { APP_USERAGENT_TOKEN, ClientDetectService, EXTENDS_CLIENT_TOKEN };
export default ClientDetectService;
