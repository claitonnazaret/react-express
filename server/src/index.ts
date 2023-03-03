import express, { Request, Response } from 'express';
import cors from 'cors';
import { router } from './routes';
import 'dotenv/config';

const { APP_NAME, APP_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: false,
    origin: true,
  })
);

app.use(router);

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} Running on port ${APP_PORT}`);
});
