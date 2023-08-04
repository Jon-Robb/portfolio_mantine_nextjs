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

  emailEventEmit.on(EMessages.EMAIL_ADDED, (data) => {
    console.log('email event emitter in update', data);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  });
};
