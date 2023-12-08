const searchBarInput = document.getElementById('search-bar-input');
const searchForm = document.getElementById('search-form');
const watersContainer = document.getElementById('waters-container');
const modalTitle = document.getElementById('modal-title');
const visualizationContainer = document.getElementById('visualization-container');
const modal = new bootstrap.Modal(document.getElementById('modal'));

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = searchBarInput.value;

    watersContainer.innerHTML = `
    <div class="spinner-container">
        <div class="spinner"></div>
        <div class="spinner-text">Loading...</div>
    </div>
    `;

    if (searchQuery === '') {
        watersContainer.innerHTML = '';
        return;
    }

    const response = await fetch(`/api/waters/${searchQuery}`);
    const waters = await response.json();

    if (waters.length === 0) {
        watersContainer.innerHTML = '<p>Keine Gewässer mit diesen Namen gefunden</p>';
    }
    else {
        displayWaters(waters);
    }
});

function displayWaters(waters) {
    watersContainer.innerHTML = '';
    for (const water of waters) {
        watersContainer.innerHTML += `
        <div class="water">
            <h2>${water.longname} (${water.shortname})</h2>
            <div class="station-container">
                <h4>Stationen:</h4>
                <ul class="stations">
                    ${water.stations.map(station => `<li onclick="displayMeasurementsForStation('${station.uuid}')">${station.longname}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }
}

function getStation(uuid) {
    return fetch(`/api/station/${uuid}`)
        .then(response => response.json());
}

async function displayMeasurementsForStation(uuid) {
    const station = await getStation(uuid);
    visualizationContainer.innerHTML = `
        <iframe
            src="https://www.pegelonline.wsv.de/webservices/zeitreihe/visualisierung?pegeluuid=${uuid}&eingebettet=ja"
            scrolling="no" marginheight="0" marginwidth="0" frameborder="0" width="730" height="450">
        </iframe>
    `;
    modalTitle.innerText = `${station.longname} (${station.shortname}): ${station.agency}`;
    modal.toggle();
}
