import ClientDetectService from './ClientDetectService';
declare class JsBridgeService {
    private cdServ;
    private config;
    constructor(cdServ: ClientDetectService, config: any);
    init(): void;
    safeCall(method: any, opt: any): Promise<any>;
    on(eventName: any, cb: any): void;
    once(eventName: any, cb: any): void;
    off(eventName: any, cb: any): void;
    wxJsbConfig: () => void;
    lzJsbConfig: () => void;
}
export default JsBridgeService;
