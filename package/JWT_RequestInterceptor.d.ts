import AuthService from './AuthService';
import ClientDetectService from './ClientDetectService';
declare class JWTInterceptor {
    private cdServ;
    private AuthServ;
    constructor(cdServ: ClientDetectService, AuthServ: AuthService);
    intercept(req: any, next: any): any;
}
export default JWTInterceptor;
