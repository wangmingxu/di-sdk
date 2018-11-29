"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injection_js_1 = require("injection-js");
// tslint:disable-next-line:no-var-requires
var Parser = require('url-parse');
var URL_INJECT_TOKEN = new injection_js_1.InjectionToken('URL_INJECT_TOKEN');
exports.URL_INJECT_TOKEN = URL_INJECT_TOKEN;
var LocationService = /** @class */ (function (_super) {
    tslib_1.__extends(LocationService, _super);
    function LocationService(url) {
        return _super.call(this, url) || this;
    }
    LocationService = tslib_1.__decorate([
        tslib_1.__param(0, injection_js_1.Inject(URL_INJECT_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [String])
    ], LocationService);
    return LocationService;
}(Parser));
exports.LocationService = LocationService;
exports.default = LocationService;
