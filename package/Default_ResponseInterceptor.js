// 后端返回的状态码
var rCodeMap;
(function (rCodeMap) {
    rCodeMap[rCodeMap["SUCCESS"] = 0] = "SUCCESS";
    rCodeMap[rCodeMap["NO_LOGIN"] = 2] = "NO_LOGIN";
    rCodeMap[rCodeMap["POLLING"] = 4] = "POLLING";
})(rCodeMap || (rCodeMap = {}));
var DefaultResponseInterceptor = /** @class */ (function () {
    function DefaultResponseInterceptor() {
    }
    DefaultResponseInterceptor.prototype.intercept = function (res) {
        var data = res.data;
        if (data.status === rCodeMap.SUCCESS || data.status === rCodeMap.POLLING) {
            return Promise.resolve(data.data); // 避免每次都要写res.data.xxx
        }
        return Promise.reject(data.msg);
    };
    return DefaultResponseInterceptor;
}());
export default DefaultResponseInterceptor;
//# sourceMappingURL=Default_ResponseInterceptor.js.map