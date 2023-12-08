import got from 'got';

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * Get all waters with stations.
 * @returns {Promise<Array>} Array of waters with stations.
 */
const getAllWatersWithStations = async () => {
    const result = await got.get(`${apiBaseUrl}/waters.json?includeStations=true`);
    const waters = JSON.parse(result.body);
    return waters;
};

/**
 * Get a station by UUID.
 * @param {string} uuidStation The UUID of the station.
 * @returns {Promise<Object>} The station.
 */
const getStation = async (uuidStation) => {
    try {
        const result = await got.get(`${apiBaseUrl}/stations/${uuidStation}.json?includeTimeseries=true&includeCurrentMeasurement=true`);
        const station = JSON.parse(result.body);
        return station;
    }
    catch (error) {
        return {};
    }
};

/**
 * Get the measurements from a station.
 * @param {string} uuidStation The UUID of the station.
 * @returns {Promise<Array>} Array of measurements.
 */
const getMeasurementsFromStation = async (uuidStation) => {
    try {
        const result = await got.get(`${apiBaseUrl}/stations/${uuidStation}/W/measurements.json`);
        const measurements = JSON.parse(result.body);
        return measurements;
    }
    catch (error) {
        return [];
    }
};

export { getAllWatersWithStations, getStation, getMeasurementsFromStation };
