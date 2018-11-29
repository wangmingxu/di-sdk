import {
  Inject, Injectable, InjectionToken, Injector,
} from 'injection-js';

const APP_USERAGENT_TOKEN = new InjectionToken('APP_USERAGENT_TOKEN');

const EXTENDS_CLIENT_TOKEN = new InjectionToken('EXTENDS_CLIENT_TOKEN');

interface ICDService {
  readonly isAndroid: boolean;
  readonly isIPhone: boolean;
  readonly isIPad: boolean;
  readonly isWeiBo: boolean;
  readonly isWeiXin: boolean;
  readonly isUC: boolean;
  readonly isQQ: boolean;
  readonly isSafari: boolean;
}

@Injectable()
class ClientDetectService implements ICDService {
  // static get parameters() {
  //   return [new Inject(APP_USERAGENT_TOKEN), Injector];
  // }

  constructor(@Inject(APP_USERAGENT_TOKEN) protected source: string, private injector: Injector) {
    const extraClient = this.injector.get(EXTENDS_CLIENT_TOKEN, []);
    this.registerClient(extraClient);
  }

  private registerClient = (extraClient) => {
    extraClient.forEach((client) => {
      Object.defineProperty(this, client.name, {
        get() {
          return client.regExp.test(this.source);
        },
      });
    });
  };

  readonly [key: string]: any;

  get isAndroid() {
    // android终端/uc浏览器
    return this.source.indexOf('Android') > -1 || this.source.indexOf('Linux') > -1;
  }

  get isIPhone() {
    // iPhone/QQHD浏览器
    return this.source.indexOf('iPhone') > -1;
  }

  get isIPad() {
    // iPad
    return this.source.indexOf('iPad') > -1;
  }

  get isWeiBo() {
    // 微博
    return !!this.source.match(/Weibo/i);
  }

  get isWeiXin() {
    // 微信
    return !!this.source.match(/MicroMessenger/i);
  }

  get isUC() {
    // uc
    return !!this.source.match(/UCBrowser/i);
  }

  get isQQ() {
    // qq
    return !!this.source.match(/QQBrowser/i);
  }

  get isSafari() {
    // safari
    return !!this.source.match(/Safari/i);
  }

  // get isIPhoneX() {
  //   return this.isIPhone && [812, 724, 690].includes(screen.height) && screen.width === 375;
  // }

  // public checkDeviceType() {
  //   if (this.isIPhone) {
  //     if (this.isIPhoneX) {
  //       return 'IPhoneX';
  //     }
  //     return 'IPhone';
  //   }
  //   if (screen.width < 768) {
  //     return 'Android';
  //   }
  //   return 'Desktop';
  // }
}

export { APP_USERAGENT_TOKEN, ClientDetectService, EXTENDS_CLIENT_TOKEN };

export default ClientDetectService;
