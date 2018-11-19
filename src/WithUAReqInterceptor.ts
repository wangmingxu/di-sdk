import { Inject, Injectable } from 'injection-js';
import { APP_USERAGENT_TOKEN } from './ClientDetectService';

/**
 * 用于服务端渲染请求接口转发useragent
 * @class UseragentInterceptor
 */
@Injectable()
class WithUARequestInterceptor {
  // static get parameters() {
  //   return [new Inject(APP_USERAGENT_TOKEN)];
  // }

  constructor(@Inject(APP_USERAGENT_TOKEN) private useragent: string) {}

  public intercept(req, next) {
    req.headers.common['User-Agent'] = this.useragent; // 转发User-Agent
    return next ? next.handle(req) : req;
  }
}

export default WithUARequestInterceptor;
