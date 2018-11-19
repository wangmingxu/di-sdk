// import { Provider, ReflectiveInjector } from 'injection-js';
// import 'reflect-metadata';
// import { AuthService } from './AuthService';
// import { APP_USERAGENT_TOKEN, ClientDetectService, EXTENDS_CLIENT_TOKEN } from './ClientDetectService';
// import { APP_CONFIG, APP_CONFIG_TOKEN } from './ConfigService';
// import { COOKIE_STR_TOKEN, CookieService } from './CookieService';
// import DefaultResponseInterceptor from './Default_ResponseInterceptor';
// import { HTTP_REQUEST_INTERCEPTORS, HTTP_RESPONSE_INTERCEPTORS, HttpService } from './HttpService';
// import JWTInterceptor from './JWT_RequestInterceptor';
// import ShareService from './ShareService';
// const defaultProvider: Provider[] = [
//   { provide: 'cdServ', useClass: ClientDetectService },
//   { provide: '$http', useClass: HttpService },
//   { provide: HTTP_RESPONSE_INTERCEPTORS, useClass: DefaultResponseInterceptor, multi: true },
//   { provide: 'cookieServ', useClass: CookieService },
//   { provide: 'AuthServ', useClass: AuthService },
//   { provide: APP_CONFIG_TOKEN, useValue: APP_CONFIG },
//   {
//     provide: EXTENDS_CLIENT_TOKEN,
//     useValue: [
//       { name: 'isLizhiFM', regExp: /Lizhi/ },
//     ],
//   },
//   { provide: HTTP_REQUEST_INTERCEPTORS, useClass: JWTInterceptor, multi: true },
// ];
// const createInjector = (provider: Provider[] = []) => {
//   const newInjector = ReflectiveInjector.resolveAndCreate([
//     ...defaultProvider,
//     ...provider,
//   ]);
//   return newInjector;
// };
// const injector = createInjector([
//   { provide: APP_USERAGENT_TOKEN, useValue: navigator.userAgent },
//   { provide: COOKIE_STR_TOKEN, useValue: document.cookie },
//   { provide: 'jsbServ', useClass: require('./JsBridgeService').default },
//   { provide: 'shareServ', useClass: ShareService },
// ]);
// export { createInjector };
// export default injector;
//# sourceMappingURL=index.js.map