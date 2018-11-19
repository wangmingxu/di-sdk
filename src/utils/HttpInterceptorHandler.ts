class HttpInterceptorHandler {
  private next;

  private interceptor;

  /**
   * @param {?} next
   * @param {?} interceptor
   */
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }

  /**
   * @param {?} req
   * @return {?}
   */
  public handle(req) {
    return this.interceptor.intercept(req, this.next);
  }
}

export default HttpInterceptorHandler;
