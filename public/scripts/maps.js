//get values from html
const lat = document.querySelector("span[data-lat]").dataset.lat;
const lng = document.querySelector("span[data-lng]").dataset.lng;
console.log(lat, lng)
const options = {
  zoomControl: false,
  keyboard: false
}

// create map
const map = L.map('mapid', options).setView([lat, lng], 12)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
.addTo(map)

//create popup
const popup = L.popup({
  closeButton: false,
  className: 'map-popup',
}).setContent('<strong>Nós estamos aqui!!</strong>')

// create icon
const icon = L.icon({
  iconUrl: '/img/icons/icon.png',
  iconSize: [50, 50],
  iconAnchor: [29, 28],
  popupAnchor: [95, 34]
})


// create and add marker
L
.marker([lat, lng], { icon })
.addTo(map)
.bindPopup(popup)