"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpInterceptorHandler = /** @class */ (function () {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
exports.default = HttpInterceptorHandler;
//# sourceMappingURL=HttpInterceptorHandler.js.map