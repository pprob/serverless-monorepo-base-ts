import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  APIGatewayProxyHandler,
  Context,
} from 'aws-lambda';
import {commonMiddleware} from '@eceipt/lib-security';

const hello: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  console.log('event', event);
  console.log('context', context);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      success: true,
    }),
  };
};

export const handler = commonMiddleware(hello);
