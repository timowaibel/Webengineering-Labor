import express from 'express';
import { watersRouter } from './routes/waters.js';
import { measurementRouter } from './routes/measurement.js';

const app = express();

app.use('/waters', watersRouter);

app.use('/measurements', measurementRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
