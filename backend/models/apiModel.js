import got from 'got';

const apiBaseUrl = process.env.API_BASE_URL;

const getAllWatersWithStations = async () => {
    const result = await got.get(`${apiBaseUrl}/waters.json?includeStations=true`);
    const waters = JSON.parse(result.body);
    return waters;
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

export { getAllWatersWithStations, getMeasurementsFromStation };
