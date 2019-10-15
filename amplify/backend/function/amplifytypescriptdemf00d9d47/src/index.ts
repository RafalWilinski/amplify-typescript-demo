import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log('Hello!', event);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Amplify function in Typescript!',
      input: event,
    }),
  };
};
