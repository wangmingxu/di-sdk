import { Inject, Injectable } from 'injection-js';
import LocationService from './LocationService';

@Injectable()
class RelpathRequestInterceptor {
  constructor(@Inject(LocationService)private location) {}

  public intercept(req, next) {
    const { url } = req;
    if (!url.startsWith('https://') && !url.startsWith('http://') && !url.startsWith('//')) {
      req.url = this.location.origin + url;
    }
    return next ? next.handle(req) : req;
  }
}

export default RelpathRequestInterceptor;
