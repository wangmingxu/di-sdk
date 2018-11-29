"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var axios_1 = require("axios");
var injection_js_1 = require("injection-js");
var HttpInterceptorHandler_1 = require("./utils/HttpInterceptorHandler");
var HTTP_REQUEST_INTERCEPTORS = new injection_js_1.InjectionToken('HTTP_REQUEST_INTERCEPTORS');
exports.HTTP_REQUEST_INTERCEPTORS = HTTP_REQUEST_INTERCEPTORS;
var HTTP_RESPONSE_INTERCEPTORS = new injection_js_1.InjectionToken('HTTP_RESPONSE_INTERCEPTORS');
exports.HTTP_RESPONSE_INTERCEPTORS = HTTP_RESPONSE_INTERCEPTORS;
var HTTP_ALIAS_TOKEN = new injection_js_1.InjectionToken('HTTP_ALIAS_TOKEN');
exports.HTTP_ALIAS_TOKEN = HTTP_ALIAS_TOKEN;
var HttpMethods = ['GET', 'POST', 'PUT', 'DELETE'];
var HttpService = /** @class */ (function () {
    // static get parameters() {
    //   return [
    //     new Inject(APP_CONFIG_TOKEN),
    //     Injector,
    //   ];
    // }
    function HttpService(injector) {
        var _this = this;
        this.registerAlias = function (rMap) {
            return Object.keys(rMap).reduce(function (fMap, key) {
                fMap[key] = function (data, config) {
                    if (config === void 0) { config = {}; }
                    var _a;
                    if (typeof rMap[key] === 'string') {
                        if (HttpMethods.some(function (v) { return rMap[key].startsWith(v); })) {
                            var _b = rMap[key].split(' '), method = _b[0], url = _b[1];
                            return _this.axiosInstance(Object.assign(config, (_a = {
                                    url: url,
                                    method: method
                                },
                                _a[/GET/i.test(method) ? 'params' : 'data'] = data,
                                _a)));
                        }
                        return _this.axiosInstance(Object.assign(config, { url: rMap[key], params: data }));
                    }
                    return _this.axiosInstance(Object.assign(rMap[key], { data: data }));
                };
                return fMap;
            }, {});
        };
        this.axiosInstance = axios_1.default.create();
        var reqhandlers = injector.get(HTTP_REQUEST_INTERCEPTORS, []);
        var reshandlers = injector.get(HTTP_RESPONSE_INTERCEPTORS, []);
        this.interceptRequest(reqhandlers);
        this.interceptResponse(reshandlers);
        var httpAlias = injector.get(HTTP_ALIAS_TOKEN, {});
        this.alias = this.registerAlias(httpAlias);
    }
    HttpService.prototype.interceptRequest = function (interceptors) {
        this.axiosInstance.interceptors.request.use(function (req) {
            var chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler_1.default(next, interceptor); }, null);
            return chain.handle(req);
        });
    };
    HttpService.prototype.interceptResponse = function (interceptors) {
        this.axiosInstance.interceptors.response.use(function (res) {
            var chain = interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler_1.default(next, interceptor); }, null);
            return chain.handle(res);
        });
    };
    HttpService = tslib_1.__decorate([
        injection_js_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [injection_js_1.Injector])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
exports.default = HttpService;
