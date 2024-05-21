import express from 'express';
import errorHandlerMiddleware from './middlewares/errorHandler';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use('/users', )


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});

app.use(errorHandlerMiddleware);