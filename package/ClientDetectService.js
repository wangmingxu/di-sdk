"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injection_js_1 = require("injection-js");
var APP_USERAGENT_TOKEN = new injection_js_1.InjectionToken('APP_USERAGENT_TOKEN');
exports.APP_USERAGENT_TOKEN = APP_USERAGENT_TOKEN;
var EXTENDS_CLIENT_TOKEN = new injection_js_1.InjectionToken('EXTENDS_CLIENT_TOKEN');
exports.EXTENDS_CLIENT_TOKEN = EXTENDS_CLIENT_TOKEN;
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
        injection_js_1.Injectable(),
        tslib_1.__param(0, injection_js_1.Inject(APP_USERAGENT_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String, injection_js_1.Injector])
    ], ClientDetectService);
    return ClientDetectService;
}());
exports.ClientDetectService = ClientDetectService;
exports.default = ClientDetectService;
