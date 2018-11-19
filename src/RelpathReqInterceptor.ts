class RelpathRequestInterceptor {
  public intercept(req, next) {
    const { url } = req;
    if (
      !url.startsWith('https://') &&
      !url.startsWith('http://') &&
      !url.startsWith('//')
    ) {
      req.url = process.env.SERVER_URL + url;
    }
    return next ? next.handle(req) : req;
  }
}

export default RelpathRequestInterceptor;
