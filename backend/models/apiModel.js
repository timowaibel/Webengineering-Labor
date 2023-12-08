import got from 'got';

const apiBaseUrl = process.env.API_BASE_URL;

const getAllWatersWithStations = async () => {
    const result = await got.get(`${apiBaseUrl}/waters.json?includeStations=true`);
    const waters = JSON.parse(result.body);
    return waters;
};

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
