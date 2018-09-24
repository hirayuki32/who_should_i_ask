var map = L.map('map').setView([35.65863174, 139.74542422], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


for (var i = 0; i < 10; i++) {
  console.log(i);
}
