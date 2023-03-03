import { Router } from 'express';
import 'dotenv/config';
import { StatusCodes } from 'http-status-codes';

const router = Router();

const { APP_NAME } = process.env;

router.get('/teste', (req, res) => {
  return res.status(StatusCodes.OK).send(`${APP_NAME} Rodando as rotas`);
});

export { router };
