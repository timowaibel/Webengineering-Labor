const searchBarInput = document.getElementById('search-bar-input');
const searchForm = document.getElementById('search-form');
const watersContainer = document.getElementById('waters-container');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchQuery = searchBarInput.value;

    watersContainer.innerHTML = '';

    if (searchQuery === '') {
        return;
    }

    const response = await fetch(`/api/waters/${searchQuery}`);
    const waters = await response.json();

    if (waters.length === 0) {
        watersContainer.innerHTML = '<p>Keine Gewässer mit diesen Namen gefunden</p>';
    }
    else {
        for (const water of waters) {
            watersContainer.innerHTML += `
            <div class="water">
                <h2>${water.longname}</h2>
                <h3>${water.shortname}</h3>
            </div>
        `;
        }
    }
});
