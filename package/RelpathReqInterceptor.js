"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var injection_js_1 = require("injection-js");
var LocationService_1 = require("./LocationService");
var RelpathRequestInterceptor = /** @class */ (function () {
    function RelpathRequestInterceptor(location) {
        this.location = location;
    }
    RelpathRequestInterceptor.prototype.intercept = function (req, next) {
        var url = req.url;
        if (!url.startsWith('https://') && !url.startsWith('http://') && !url.startsWith('//')) {
            req.url = this.location.origin + url;
        }
        return next ? next.handle(req) : req;
    };
    RelpathRequestInterceptor = tslib_1.__decorate([
        injection_js_1.Injectable(),
        tslib_1.__param(0, injection_js_1.Inject(LocationService_1.default)),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], RelpathRequestInterceptor);
    return RelpathRequestInterceptor;
}());
exports.default = RelpathRequestInterceptor;
