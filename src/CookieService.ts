import { Inject, Injectable, InjectionToken } from 'injection-js';
import { default as Cookies } from 'universal-cookie';

const COOKIE_STR_TOKEN = new InjectionToken('COOKIE_STRING');

@Injectable()
class CookieService extends Cookies {
  // static get parameters() {
  //   return [new Inject(COOKIE_STR_TOKEN)];
  // }

  constructor(@Inject(COOKIE_STR_TOKEN) cookieStr: string) {
    super(cookieStr);
  }
}

export { CookieService, COOKIE_STR_TOKEN };

export default CookieService;
