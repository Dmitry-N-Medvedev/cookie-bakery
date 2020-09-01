import {
  APIOps,
} from '../../constants.mjs';

const opHandlers = {
  [APIOps.ORDER_COOKIE]: async (request) => {
    const orderId = Date.now();

    //
    // write data to AWS
    //

    return {
      orderId,
    }
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

  // next();
}