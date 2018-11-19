import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken, Injector } from 'injection-js';
import ClientDetectService from './ClientDetectService';
import { APP_CONFIG_TOKEN } from './ConfigService';
import CookieService from './CookieService';
var AUTH_TOKEN_KEY = new InjectionToken('AUTH_TOKEN_KEY');
var isServer = typeof window === 'undefined';
var AuthService = /** @class */ (function () {
    function AuthService(cdServ, cookieServ, config, injector) {
        this.cdServ = cdServ;
        this.cookieServ = cookieServ;
        this.config = config;
        this.injector = injector;
        this.jsbServ = this.injector.get('jsbServ', {});
        this.loginCb = [];
        this.isLogin = false;
        this.tokenStr = '';
    }
    AuthService.prototype.onLogin = function (cb) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var isLogin;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.checkLogin()];
                    case 1:
                        isLogin = _a.sent();
                        if (isLogin) {
                            cb();
                        }
                        else {
                            this.loginCb.push(cb);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.applyLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var p;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isLogin) {
                            return [2 /*return*/];
                        }
                        if (!this.cdServ.isLizhiFM) return [3 /*break*/, 3];
                        p = new Promise(function (resolve) {
                            _this.jsbServ.once('user:login', resolve);
                        });
                        return [4 /*yield*/, this.jsbServ.safeCall('gotoLogin')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, p];
                    case 2:
                        _a.sent();
                        this.loginCb.forEach(function (cb) { return cb(); });
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.cdServ.isWeiXin) return [3 /*break*/, 5];
                        location.href = this.config.wxAuthUrl + "&redirectURL=" + encodeURIComponent(location.href);
                        return [4 /*yield*/, Promise.reject(new Error(undefined))];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getToken = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ret, qs, openid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cdServ.isLizhiFM) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.jsbServ.safeCall('getToken', { needRefresh: true })];
                    case 1:
                        ret = _a.sent();
                        if (ret.status === 'success') {
                            this.cookieServ.set(this.config.tokenKey, ret.token);
                            this.tokenStr = ret.token;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (this.cdServ.isWeiXin) {
                            qs = new URLSearchParams(location.search);
                            openid = qs.get('openid');
                            if (openid) {
                                this.cookieServ.set(this.config.tokenKey, openid);
                                this.tokenStr = openid;
                            }
                            else {
                                this.tokenStr = this.cookieServ.get(this.config.tokenKey);
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.tokenStr];
                }
            });
        });
    };
    AuthService.prototype.checkLogin = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token, ret, openid;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!isServer) return [3 /*break*/, 1];
                        token = this.cookieServ.get(this.config.tokenKey);
                        this.isLogin = !!token;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!this.cdServ.isLizhiFM) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.jsbServ.safeCall('getSessionUser')];
                    case 2:
                        ret = _a.sent();
                        this.isLogin = !!ret.id;
                        if (!this.isLogin) {
                            this.cookieServ.remove(this.config.tokenKey);
                        }
                        return [3 /*break*/, 5];
                    case 3:
                        if (!this.cdServ.isWeiXin) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.getToken()];
                    case 4:
                        openid = _a.sent();
                        this.isLogin = !!openid;
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.isLogin];
                }
            });
        });
    };
    AuthService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject('cdServ')),
        tslib_1.__param(1, Inject('cookieServ')),
        tslib_1.__param(2, Inject(APP_CONFIG_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [ClientDetectService,
            CookieService, Object, Injector])
    ], AuthService);
    return AuthService;
}());
export { AuthService, AUTH_TOKEN_KEY };
export default AuthService;
//# sourceMappingURL=AuthService.js.map