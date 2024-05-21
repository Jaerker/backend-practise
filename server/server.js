import express from 'express';
import 'dotenv/config';

import errorHandlerMiddleware from './middlewares/errorHandler.js';
import loggerMiddleware from './middlewares/logger.js';
import usersRoute from './routes/users.js'; 


const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(loggerMiddleware);
app.use('/api/users', usersRoute);


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

app.use(errorHandlerMiddleware);