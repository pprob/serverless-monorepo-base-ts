import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import httpMultipartBodyParser from '@middy/http-multipart-body-parser';

const commonMiddleware = (handler: any) => {
  return middy(handler).use([
    // httpJsonBodyParser(),
    // httpEventNormalizer(),
    // httpErrorHandler(),
  ]);
};

export default commonMiddleware;
