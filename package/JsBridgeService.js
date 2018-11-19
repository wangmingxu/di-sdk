import * as tslib_1 from "tslib";
// Todo:lazyload js-sdk
import lz from '@lizhife/lz-jssdk';
import axios from 'axios';
import { Inject, Injectable } from 'injection-js';
import wx from 'weixin-js-sdk';
import ClientDetectService from './ClientDetectService';
import { APP_CONFIG_TOKEN } from './ConfigService';
var JsBridgeService = /** @class */ (function () {
    // static get parameters() {
    //   return [new Inject('cdServ'), new Inject(APP_CONFIG_TOKEN)];
    // }
    function JsBridgeService(cdServ, config) {
        var _this = this;
        this.cdServ = cdServ;
        this.config = config;
        this.wxJsbConfig = function () {
            var protocol = location.protocol, host = location.host, pathname = location.pathname, search = location.search;
            var link = protocol + "//" + host + pathname + search;
            axios({
                url: _this.config.wxJsConfUrl,
                params: {
                    currentURL: link,
                },
            }).then(function (res) {
                var data = res.data.data;
                if (!data) {
                    return;
                }
                wx.config({
                    debug: false,
                    appId: data.appid,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideconfigMenu',
                        'showconfigMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard',
                        'updateTimelineShareData',
                        'updateAppMessageShareData',
                    ],
                });
            });
        };
        this.lzJsbConfig = function () {
            lz.config({
                debug: false,
                url: _this.config.lzJsConfUrl,
                apiList: [
                    'getAppInfo',
                    'getToken',
                    'getSessionUser',
                    'gotoLogin',
                    'shareUrl',
                    'startRecordVoice',
                    'stopRecordVoice',
                    'uploadRecordVoice',
                    'replayRecordVoice',
                    'shareImage',
                    'saveImage',
                    'configShareUrl',
                ],
                eventList: ['user:login', 'recordStateChange', 'shareFinish'],
            });
        };
    }
    JsBridgeService.prototype.init = function () {
        if (this.cdServ.isLizhiFM) {
            if (typeof LizhiJSBridge === 'undefined') {
                document.addEventListener('LizhiJSBridageReady', this.lzJsbConfig, false);
            }
            else {
                this.lzJsbConfig();
            }
        }
        else if (this.cdServ.isWeiXin) {
            if (typeof WeixinJSBridge === 'undefined') {
                document.addEventListener('WeixinJSBridgeReady', this.wxJsbConfig, false);
            }
            else {
                this.wxJsbConfig();
            }
        }
    };
    JsBridgeService.prototype.safeCall = function (method, opt) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ret;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cdServ.isLizhiFM) return [3 /*break*/, 3];
                        return [4 /*yield*/, new Promise(function (resolve) { return lz.ready(resolve); })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, lz[method](opt)];
                    case 2:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                    case 3:
                        if (!this.cdServ.isWeiXin) return [3 /*break*/, 5];
                        return [4 /*yield*/, new Promise(function (resolve) { return wx.ready(resolve); })];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, wx[method](opt)];
                    case 5: return [2 /*return*/, null];
                }
            });
        });
    };
    JsBridgeService.prototype.on = function (eventName, cb) {
        if (this.cdServ.isLizhiFM) {
            lz.on(eventName, cb);
        }
    };
    JsBridgeService.prototype.once = function (eventName, cb) {
        if (this.cdServ.isLizhiFM) {
            lz.once(eventName, cb);
        }
    };
    JsBridgeService.prototype.off = function (eventName, cb) {
        if (this.cdServ.isLizhiFM) {
            lz.off(eventName, cb);
        }
    };
    JsBridgeService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__param(0, Inject('cdServ')),
        tslib_1.__param(1, Inject(APP_CONFIG_TOKEN)),
        tslib_1.__metadata("design:paramtypes", [ClientDetectService, Object])
    ], JsBridgeService);
    return JsBridgeService;
}());
export default JsBridgeService;
//# sourceMappingURL=JsBridgeService.js.map