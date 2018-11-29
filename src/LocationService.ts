import { Inject, InjectionToken } from 'injection-js';
// tslint:disable-next-line:no-var-requires
const Parser = require('url-parse')

const URL_INJECT_TOKEN = new InjectionToken('URL_INJECT_TOKEN');

class LocationService extends Parser {
  constructor(@Inject(URL_INJECT_TOKEN) url: string) {
    super(url)
  }
}

export { URL_INJECT_TOKEN, LocationService };

export default LocationService;
