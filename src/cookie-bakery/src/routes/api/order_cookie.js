import AWS from 'aws-sdk';
import {
  APIOps,
  AWSDynamoDBSettings,
} from '../../constants.mjs';

const dynamoDB = new AWS.DynamoDB({
  apiVersion: AWSDynamoDBSettings.apiVersion,
  region: AWSDynamoDBSettings.region,
});

const putItem = (request) => new Promise((resolve, reject) => {
  dynamoDB.putItem({
    Item: {
      id: {
        S: String(request.id),
      },
      ts: {
        S: String(request.ts),
      },
      op: {
        S: String(request.op),
      },
    },
    TableName: AWSDynamoDBSettings.TableName,
  }, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        orderId: request.id,
      });
    }
  });
});

const opHandlers = {
  [APIOps.ORDER_COOKIE]: async (request) => {
    const orderId = Date.now();
    
    Object.assign(request, { id: orderId });

    return putItem(request);
  },
};

export async function post(req, res, next) {
  let result = [];

  req
    .on('error', (error) => {
      res.writeHead(500, {
        'Content-Type': 'application/json',
        'X-Powerd-By': 'Auto1 Frontend Developer',
      });
      res.end(JSON.stringify(error));
    })
    .on('data', (chunk) => {
      result.push(chunk);
    })
    .on('end', async () => {
      const request = JSON.parse(Buffer.concat(result).toString());
      let response = null;

      try {
        response = await (opHandlers[request.op])(request);
      } catch (opHandlerError) {
        console.error('opHandlerError', opHandlerError);

        res.writeHead(404, {
          'Content-Type': 'application/json',
          'X-Powerd-By': 'Auto1 Frontend Developer',
        });
        res.end(JSON.stringify({
          message: `don't know how to handle the ${request.op} operation. aborting.`,
        }));
      } finally {
        if (response) {
          res.writeHead(200, {
            'Content-Type': 'application/json',
            'X-Powerd-By': 'Auto1 Frontend Developer',
          });
          res.end(JSON.stringify(response));
        }
      }
    });
}