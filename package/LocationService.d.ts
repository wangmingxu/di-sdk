import { InjectionToken } from 'injection-js';
declare const Parser: any;
declare const URL_INJECT_TOKEN: InjectionToken<{}>;
declare class LocationService extends Parser {
    constructor(url: string);
}
export { URL_INJECT_TOKEN, LocationService };
export default LocationService;
