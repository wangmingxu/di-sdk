"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injection_js_1 = require("injection-js");
var universal_cookie_1 = require("universal-cookie");
var COOKIE_STR_TOKEN = new injection_js_1.InjectionToken('COOKIE_STRING');
exports.COOKIE_STR_TOKEN = COOKIE_STR_TOKEN;
var CookieService = /** @class */ (function (_super) {
    tslib_1.__extends(CookieService, _super);
    // static get parameters() {
    //   return [new Inject(COOKIE_STR_TOKEN)];
    // }
    function CookieService(cookieStr) {
        return _super.call(this, cookieStr) || this;
    }
    CookieService = tslib_1.__decorate([
        injection_js_1.Injectable(),
        tslib_1.__param(0, injection_js_1.Inject(COOKIE_STR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], CookieService);
    return CookieService;
}(universal_cookie_1.default));
exports.CookieService = CookieService;
exports.default = CookieService;
//# sourceMappingURL=CookieService.js.map