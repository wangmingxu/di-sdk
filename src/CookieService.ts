import { Inject, Injectable, InjectionToken } from 'injection-js';
// tslint:disable-next-line:no-var-requires
const Cookies = require('universal-cookie');
const SuperClass = Cookies.default || Cookies;

const COOKIE_STR_TOKEN = new InjectionToken('COOKIE_STRING');

@Injectable()
class CookieService extends SuperClass {
  // static get parameters() {
  //   return [new Inject(COOKIE_STR_TOKEN)];
  // }

  constructor(@Inject(COOKIE_STR_TOKEN) cookieStr: string) {
    super(cookieStr);
  }
}

export { CookieService, COOKIE_STR_TOKEN };

export default CookieService;
