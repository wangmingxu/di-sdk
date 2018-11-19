import * as tslib_1 from "tslib";
import { Inject, Injectable, InjectionToken } from 'injection-js';
import Cookies from 'universal-cookie';
var COOKIE_STR_TOKEN = new InjectionToken('COOKIE_STRING');
var CookieService = /** @class */ (function (_super) {
    tslib_1.__extends(CookieService, _super);
    // static get parameters() {
    //   return [new Inject(COOKIE_STR_TOKEN)];
    // }
    function CookieService(cookieStr) {
        return _super.call(this, cookieStr) || this;
    }
    CookieService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject(COOKIE_STR_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], CookieService);
    return CookieService;
}(Cookies));
export { CookieService, COOKIE_STR_TOKEN };
export default CookieService;
//# sourceMappingURL=CookieService.js.map