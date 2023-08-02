import { NextApiRequest, NextApiResponse } from 'next';
import { emailEventEmit } from '../../db/models/VerifiedEmailModel';
import { EMessages } from '../../typescript/enums/EMessages';


export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.writeHead(200, {
    Connection: 'keep-alive',
    'Content-Encoding': 'none',
    'Cache-Control': 'no-cache, no-transform',
    'Content-Type': 'text/event-stream',
  });



  // const listener = (data: string) => {
  //   console.log('email event emitter in update', data);
  //   res.write(
  //     `data: ${JSON.stringify({
  //       message: 'hello',
  //       value: data,
  //     })}\n\n`
  //   );
  //   res.end();
  // };

  // emailEventEmit.on(EMessages.EMAIL_ADDED, listener);

  // req.on('close', () => {
  //   emailEventEmit.off(EMessages.EMAIL_ADDED, listener);
  //   res.end();
  // });

  emailEventEmit.on(EMessages.EMAIL_ADDED, (data) => {
    console.log('email event emitter in update', data);
    res.write(
      `data: ${JSON.stringify({
        message: 'hello',
        value: data,
      })}\n\n`
    );
  });

  // res.on('close', () => {
  //   res.end();
  // });

  // res.socket?.on('close', () => {
  //   res.end();
  // });

  // emailEventEmit.emit(EMessages.EMAIL_ADDED, 'fake data');
};
