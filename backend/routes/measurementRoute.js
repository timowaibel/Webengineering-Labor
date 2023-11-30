import express from 'express';
import { getMeasurementsFromStation } from '../models/apiModel.js';

const measurementRouter = express.Router();

measurementRouter.get('/:uuidStation', async (req, res) => {
    const uuidStation = req.params.uuidStation;
    const measurements = await getMeasurementsFromStation(uuidStation);
    if (measurements.length === 0) {
        res.status(404).send('Not Found');
    }
    else {
        res.status(200).send(measurements);
    }
});

export { measurementRouter };
