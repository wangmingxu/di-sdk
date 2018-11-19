import ClientDetectService from './ClientDetectService';
import JsBridgeService from './JsBridgeService';
declare class ShareService {
    private cdServ;
    private jsbServ;
    private shareInfo;
    constructor(cdServ: ClientDetectService, jsbServ: JsBridgeService, config: any);
    configShareInfo(info?: {}): void;
    onShareSuccess(cb: any): void;
}
export default ShareService;
