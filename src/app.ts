import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

const testRoute = async (req: Request, res: Response) => {
  res.send('Sports Facility Booking Platform');
};

app.get('/', testRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
