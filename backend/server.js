import express from 'express';
import { waterRouter } from './routes/waterRoute.js';
import { stationRouter } from './routes/stationRoute.js';

const app = express();

app.use('/waters', waterRouter);

app.use('/station', stationRouter);

app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
