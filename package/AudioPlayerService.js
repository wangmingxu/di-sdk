"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var EventEmitter = require("eventemitter3");
exports.AudioStatus = {
    WAIT_PLAY: 1,
    CALL_PLAY: 2,
    PLAYING: 3,
    PAUSE: 4,
};
exports.EventMap = {
    STATUS_CHANGE: 'statusChange',
    CALL_PLAY: 'callPlay',
    PLAYED: 'played',
    PAUSE: 'pause',
    ERROR: 'error',
    TIME_UPDATE: 'timeupdate',
    ENDED: 'ended',
};
var Player = /** @class */ (function () {
    function Player() {
        var _this = this;
        this.audioRef = new Audio();
        this.sAudioStatus = exports.AudioStatus.WAIT_PLAY;
        this.eventBus = new EventEmitter();
        this.handleVisibilityChange = function () {
            if (document.hidden) {
                _this.pause();
            }
            else {
                // 页面呼出
            }
        };
        this.handlePlayEnded = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.eventBus.emit(exports.EventMap.ENDED);
                this.audioStatus = exports.AudioStatus.WAIT_PLAY;
                return [2 /*return*/];
            });
        }); };
        this.handleTimeUpdate = function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.eventBus.emit(exports.EventMap.TIME_UPDATE);
                return [2 /*return*/];
            });
        }); };
        this.init();
    }
    Object.defineProperty(Player.prototype, "audioStatus", {
        get: function () {
            return this.sAudioStatus;
        },
        set: function (val) {
            this.sAudioStatus = val;
            this.eventBus.emit(exports.EventMap.STATUS_CHANGE, val);
        },
        enumerable: true,
        configurable: true
    });
    Player.prototype.init = function () {
        this.audioRef.addEventListener('ended', this.handlePlayEnded);
        this.audioRef.addEventListener('timeupdate', this.handleTimeUpdate);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    };
    Player.prototype.play = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, _b, error_1;
            return tslib_1.__generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // tslint:disable-next-line:no-unused-expression
                        _a = this.lockP;
                        if (!_a) 
                        // tslint:disable-next-line:no-unused-expression
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lockP];
                    case 1:
                        _a = (_c.sent());
                        _c.label = 2;
                    case 2:
                        // tslint:disable-next-line:no-unused-expression
                        _a;
                        if (this.audioStatus === exports.AudioStatus.PLAYING) {
                            return [2 /*return*/];
                        }
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 6, 7, 8]);
                        this.audioStatus = exports.AudioStatus.CALL_PLAY;
                        this.eventBus.emit(exports.EventMap.CALL_PLAY);
                        this.lockP = this.audioRef.play();
                        // tslint:disable-next-line:no-unused-expression
                        _b = this.lockP instanceof Promise;
                        if (!_b) 
                        // tslint:disable-next-line:no-unused-expression
                        return [3 /*break*/, 5];
                        return [4 /*yield*/, this.lockP];
                    case 4:
                        _b = (_c.sent());
                        _c.label = 5;
                    case 5:
                        // tslint:disable-next-line:no-unused-expression
                        _b;
                        this.eventBus.emit(exports.EventMap.PLAYED);
                        this.audioStatus = exports.AudioStatus.PLAYING;
                        return [3 /*break*/, 8];
                    case 6:
                        error_1 = _c.sent();
                        // tslint:disable-next-line:no-console
                        console.log(error_1);
                        this.eventBus.emit(exports.EventMap.ERROR, error_1);
                        return [3 /*break*/, 8];
                    case 7:
                        this.lockP = null;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Player.prototype.pause = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // tslint:disable-next-line:no-unused-expression
                        _a = this.lockP;
                        if (!_a) 
                        // tslint:disable-next-line:no-unused-expression
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lockP];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // tslint:disable-next-line:no-unused-expression
                        _a;
                        if (this.audioStatus !== exports.AudioStatus.PLAYING) {
                            return [2 /*return*/];
                        }
                        try {
                            this.audioRef.pause();
                            this.eventBus.emit(exports.EventMap.PAUSE);
                            this.audioStatus = exports.AudioStatus.PAUSE;
                        }
                        catch (error) {
                            // tslint:disable-next-line:no-console
                            console.log(error);
                            this.eventBus.emit(exports.EventMap.ERROR, error);
                        }
                        finally {
                            this.lockP = null;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Player.prototype.setAudioSrc = function (src, autoplay) {
        if (autoplay === void 0) { autoplay = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, oldSrc, error_2;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // tslint:disable-next-line:no-unused-expression
                        _a = this.lockP;
                        if (!_a) 
                        // tslint:disable-next-line:no-unused-expression
                        return [3 /*break*/, 2];
                        return [4 /*yield*/, this.lockP];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        // tslint:disable-next-line:no-unused-expression
                        _a;
                        oldSrc = this.audioRef.src;
                        this.audioRef.src = src;
                        this.audioStatus = exports.AudioStatus.WAIT_PLAY;
                        if (!(oldSrc && oldSrc !== src)) return [3 /*break*/, 6];
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, this.audioRef.load()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_2 = _b.sent();
                        // tslint:disable-next-line:no-console
                        console.log(error_2);
                        return [3 /*break*/, 6];
                    case 6:
                        if (!autoplay) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.play()];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Player.prototype.on = function (eventName, cb) {
        this.eventBus.on(eventName, cb);
    };
    Player.prototype.off = function (eventName, cb) {
        this.eventBus.off(eventName, cb);
    };
    Player.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var _a;
        (_a = this.eventBus).emit.apply(_a, [eventName].concat(args));
    };
    Player.prototype.destroy = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.pause();
                this.audioRef.removeEventListener('ended', this.handlePlayEnded);
                this.audioRef.removeEventListener('timeupdate', this.handleTimeUpdate);
                document.removeEventListener('visibilitychange', this.handleVisibilityChange);
                delete this.audioRef;
                Object.values(exports.EventMap).forEach(function (eventName) {
                    _this.eventBus.removeAllListeners(eventName);
                });
                return [2 /*return*/];
            });
        });
    };
    return Player;
}());
exports.default = Player;
