const map = L.map('map').setView([35.6, 140.1], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('data/solar_potential.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: { color: 'orange', weight: 2 }
        }).addTo(map);
    });
