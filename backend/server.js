import express from 'express';
import { waterRouter } from './routes/waterRoute.js';
import { stationRouter } from './routes/stationRoute.js';

// Create Express app.
const app = express();

// Add water router.
app.use('/water', waterRouter);

// Add station router.
app.use('/station', stationRouter);

// Handle 404.
app.all('*', (req, res) => {
    res.status(404).send('Not Found');
});

// Start the server.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
