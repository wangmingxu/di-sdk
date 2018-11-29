"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var EventEmitter = require("eventemitter3");
var EventBusService = /** @class */ (function (_super) {
    tslib_1.__extends(EventBusService, _super);
    function EventBusService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EventBusService;
}(EventEmitter));
exports.default = EventBusService;
