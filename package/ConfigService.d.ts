import { InjectionToken } from 'injection-js';
declare const APP_CONFIG_TOKEN: InjectionToken<{}>;
declare const APP_CONFIG: {
    wxAuthUrl: string;
    tokenKey: string;
    httpAlias: {
        getCity: string;
        listLuckyDoy: string;
        trans: string;
    };
    wxJsConfUrl: string;
    lzJsConfUrl: string;
    shareInfo: {
        link: string;
        title: string;
        desc: string;
        imgUrl: string;
    };
};
export declare type ConfigType = typeof APP_CONFIG;
export { APP_CONFIG_TOKEN, APP_CONFIG };
