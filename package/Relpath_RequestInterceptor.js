var RelpathRequestInterceptor = /** @class */ (function () {
    function RelpathRequestInterceptor() {
    }
    RelpathRequestInterceptor.prototype.intercept = function (req, next) {
        var url = req.url;
        if (!url.startsWith('https://') &&
            !url.startsWith('http://') &&
            !url.startsWith('//')) {
            req.url = process.env.SERVER_URL + url;
        }
        return next ? next.handle(req) : req;
    };
    return RelpathRequestInterceptor;
}());
export default RelpathRequestInterceptor;
//# sourceMappingURL=Relpath_RequestInterceptor.js.map