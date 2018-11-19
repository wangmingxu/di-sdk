import * as tslib_1 from "tslib";
import { Inject, Injectable } from 'injection-js';
import { APP_USERAGENT_TOKEN } from './ClientDetectService';
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
        Injectable(),
        tslib_1.__param(0, Inject(APP_USERAGENT_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], WithUARequestInterceptor);
    return WithUARequestInterceptor;
}());
export default WithUARequestInterceptor;
//# sourceMappingURL=WithUA_RequestInterceptor.js.map