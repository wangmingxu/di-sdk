"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injection_js_1 = require("injection-js");
var ClientDetectService_1 = require("./ClientDetectService");
/**
 * 用于服务端渲染请求接口转发useragent
 * @class UseragentInterceptor
 */
var WithUARequestInterceptor = /** @class */ (function () {
    // static get parameters() {
    //   return [new Inject(APP_USERAGENT_TOKEN)];
    // }
    function WithUARequestInterceptor(useragent) {
        this.useragent = useragent;
    }
    WithUARequestInterceptor.prototype.intercept = function (req, next) {
        req.headers.common['User-Agent'] = this.useragent; // 转发User-Agent
        return next ? next.handle(req) : req;
    };
    WithUARequestInterceptor = tslib_1.__decorate([
        injection_js_1.Injectable(),
        tslib_1.__param(0, injection_js_1.Inject(ClientDetectService_1.APP_USERAGENT_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], WithUARequestInterceptor);
    return WithUARequestInterceptor;
}());
exports.default = WithUARequestInterceptor;
