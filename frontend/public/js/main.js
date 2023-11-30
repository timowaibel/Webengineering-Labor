const searchBarInput = document.getElementById('search-bar-input');
const searchForm = document.getElementById('search-form');
const watersContainer = document.getElementById('waters-container');

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
                    ${water.stations.map(station => `<li onclick="getMasurementsfromStation('${station.uuid}')">${station.longname}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }
}

function getMasurementsfromStation(uuid) {
    fetch(`/api/measurements/${uuid}`)
        .then(response => response.json())
        .then(measurements => console.log(measurements));
}
