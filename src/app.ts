import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', router);

const testRoute = async (req: Request, res: Response) => {
  res.send('Sports Facility Booking Platform');
};

app.get('/', testRoute);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// Error Handler
app.use(globalErrorHandler);

// NOT found route
app.use(notFound);

export default app;
