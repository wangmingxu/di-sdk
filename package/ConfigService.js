import { InjectionToken } from 'injection-js';
var APP_CONFIG_TOKEN = new InjectionToken('APP_CONFIG');
var APP_CONFIG = {
    wxAuthUrl: '//oauthbiz.lizhi.fm/weixin/wechatAuth?tag=brand',
    tokenKey: 'base_cityfm_token',
    httpAlias: {
        getCity: 'GET /hangzhou/singleDog/getCity',
        listLuckyDoy: 'POST /activity/listLuckyDoy',
        trans: 'GET //oauthbiz.lizhi.fm/checkAppTrans',
    },
    wxJsConfUrl: '//oauthbiz.lizhi.fm/weixin/jsconfig?tag=brand',
    lzJsConfUrl: '//h5security.lizhi.fm/jsBridgeConfig/get',
    shareInfo: {
        link: 'https://xxx.xxx',
        title: '测试标题',
        desc: '测试描述',
        imgUrl: 'https://xxx.xxx',
    },
};
export { APP_CONFIG_TOKEN, APP_CONFIG };
//# sourceMappingURL=ConfigService.js.map