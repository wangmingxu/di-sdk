import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, Injector, } from 'injection-js';
var APP_USERAGENT_TOKEN = new InjectionToken('APP_USERAGENT_TOKEN');
var EXTENDS_CLIENT_TOKEN = new InjectionToken('EXTENDS_CLIENT_TOKEN');
var ClientDetectService = /** @class */ (function () {
    // static get parameters() {
    //   return [new Inject(APP_USERAGENT_TOKEN), Injector];
    // }
    function ClientDetectService(source, injector) {
        var _this = this;
        this.source = source;
        this.injector = injector;
        this.registerClient = function (extraClient) {
            extraClient.forEach(function (client) {
                Object.defineProperty(_this, client.name, {
                    get: function () {
                        return client.regExp.test(this.source);
                    },
                });
            });
        };
        var extraClient = this.injector.get(EXTENDS_CLIENT_TOKEN, []);
        this.registerClient(extraClient);
    }
    Object.defineProperty(ClientDetectService.prototype, "isAndroid", {
        get: function () {
            // android终端/uc浏览器
            return this.source.indexOf('Android') > -1 || this.source.indexOf('Linux') > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isIPhone", {
        get: function () {
            // iPhone/QQHD浏览器
            return this.source.indexOf('iPhone') > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isIPad", {
        get: function () {
            // iPad
            return this.source.indexOf('iPad') > -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isWeiBo", {
        get: function () {
            // 微博
            return !!this.source.match(/Weibo/i);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isWeiXin", {
        get: function () {
            // 微信
            return !!this.source.match(/MicroMessenger/i);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isUC", {
        get: function () {
            // uc
            return !!this.source.match(/UCBrowser/i);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isQQ", {
        get: function () {
            // qq
            return !!this.source.match(/QQBrowser/i);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientDetectService.prototype, "isSafari", {
        get: function () {
            // safari
            return !!this.source.match(/Safari/i);
        },
        enumerable: true,
        configurable: true
    });
    ClientDetectService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(APP_USERAGENT_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String, Injector])
    ], ClientDetectService);
    return ClientDetectService;
}());
export { APP_USERAGENT_TOKEN, ClientDetectService, EXTENDS_CLIENT_TOKEN };
export default ClientDetectService;
//# sourceMappingURL=ClientDetectService.js.map