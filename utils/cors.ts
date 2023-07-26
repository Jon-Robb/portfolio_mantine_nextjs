import Cors from 'cors';

const cors = Cors({
    methods: ['POST', 'HEAD'],
});

export function runMiddleWare({ req, res, fn }: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result:any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default cors;
