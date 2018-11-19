import * as tslib_1 from "tslib";
import { Inject, Injectable } from 'injection-js';
import AuthService from './AuthService';
import ClientDetectService from './ClientDetectService';
var JWTInterceptor = /** @class */ (function () {
    // static get parameters() {
    //   return [new Inject('cdServ'), new Inject('AuthServ')];
    // }
    function JWTInterceptor(cdServ, AuthServ) {
        this.cdServ = cdServ;
        this.AuthServ = AuthServ;
    }
    JWTInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var method = req.method;
        var dataKey = /GET/i.test(method) ? 'params' : 'data';
        if (req[dataKey] && req[dataKey].needToken) {
            return this.AuthServ.getToken()
                .then(function (token) {
                var _a, _b;
                if (_this.cdServ.isLizhiFM) {
                    Object.assign(req, (_a = {},
                        _a[dataKey] = Object.assign(req[dataKey], { token: token }),
                        _a));
                }
                else if (_this.cdServ.isWeiXin) {
                    Object.assign(req, (_b = {},
                        _b[dataKey] = Object.assign(req[dataKey], { openid: token }),
                        _b));
                }
                return next ? next.handle(req) : req;
            })
                .catch(function () { return Promise.resolve(req); });
        }
        return next ? next.handle(req) : req;
    };
    JWTInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject('cdServ')),
        tslib_1.__param(1, Inject('AuthServ')),
        tslib_1.__metadata("design:paramtypes", [ClientDetectService,
            AuthService])
    ], JWTInterceptor);
    return JWTInterceptor;
}());
export default JWTInterceptor;
//# sourceMappingURL=JWT_RequestInterceptor.js.map