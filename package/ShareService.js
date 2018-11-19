import * as tslib_1 from "tslib";
import { Inject } from 'injection-js';
import ClientDetectService from './ClientDetectService';
import { APP_CONFIG_TOKEN } from './ConfigService';
import JsBridgeService from './JsBridgeService';
var ShareService = /** @class */ (function () {
    // static get parameters() {
    //   return [
    //     new Inject('cdServ'),
    //     new Inject('jsbServ'),
    //     new Inject(APP_CONFIG_TOKEN),
    //   ];
    // }
    function ShareService(cdServ, jsbServ, config) {
        this.cdServ = cdServ;
        this.jsbServ = jsbServ;
        this.cdServ = cdServ;
        this.jsbServ = jsbServ;
        this.shareInfo = config.shareInfo;
    }
    ShareService.prototype.configShareInfo = function (info) {
        if (info === void 0) { info = {}; }
        Object.assign(this.shareInfo, info);
        if (this.cdServ.isLizhiFM) {
            Object.assign(this.shareInfo, {
                url: this.shareInfo.link,
                'image-url': this.shareInfo.imgUrl,
            });
            this.jsbServ.safeCall('configShareUrl', this.shareInfo);
        }
        else if (this.cdServ.isWeiXin) {
            this.jsbServ.safeCall('updateAppMessageShareData', this.shareInfo);
            this.jsbServ.safeCall('updateTimelineShareData', this.shareInfo);
        }
    };
    ShareService.prototype.onShareSuccess = function (cb) {
        if (this.cdServ.isLizhiFM) {
            this.jsbServ.on('shareFinish', cb);
        }
        else if (this.cdServ.isWeiXin) {
            // 新版本微信已经不支持分享成功回调
        }
    };
    ShareService = tslib_1.__decorate([
        tslib_1.__param(0, Inject('cdServ')),
        tslib_1.__param(1, Inject('jsbServ')),
        tslib_1.__param(2, Inject(APP_CONFIG_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [ClientDetectService,
            JsBridgeService, Object])
    ], ShareService);
    return ShareService;
}());
export default ShareService;
//# sourceMappingURL=ShareService.js.map