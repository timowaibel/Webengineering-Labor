import express from 'express';
import { getAllWatersWithStations } from '../models/apiModel.js';

const waterRouter = express.Router();

/**
 * Get all waters with stations.
 */
waterRouter.get('/', async (req, res) => {
    const waters = await getAllWatersWithStations();
    res.send(waters);
});

/**
 * Get all waters with stations, filtered by name.
 */
waterRouter.get('/:watersName', async (req, res) => {
    const watersName = req.params.watersName.toUpperCase();
    const waters = await getAllWatersWithStations();
    res.send(waters.filter(water => water.shortname.includes(watersName) || water.longname.includes(watersName)));
});

export { waterRouter };
