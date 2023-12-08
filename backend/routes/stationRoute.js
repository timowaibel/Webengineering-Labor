import express from 'express';
import { getStation, getMeasurementsFromStation } from '../models/apiModel.js';

const stationRouter = express.Router();

/**
 * Get a station by UUID, including timeseries and current measurement.
 */
stationRouter.get('/:uuidStation', async (req, res) => {
    const uuidStation = req.params.uuidStation;
    const stationPromise = getStation(uuidStation);
    const measurementsPromise = getMeasurementsFromStation(uuidStation);
    const [station, measurements] = await Promise.all([stationPromise, measurementsPromise]);
    if (Object.keys(station).length === 0) {
        res.status(404).send('Not Found');
    }
    else {
        station.measurements = measurements;
        res.status(200).send(station);
    }
});

export { stationRouter };
