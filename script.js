const loader = document.querySelector('.loader-container');
const errorInformation = document.querySelector('.error-informations');

async function getWeatherData() {
  try {
    const response = await fetch(
      'http://api.airvisual.com/v2/nearest_city?key=API_KEY'
    );

    const responseData = await response.json();
    const sortedData = {
      city: responseData.data.city,
      country: responseData.data.country,
      temperature: responseData.data.current.weather.tp,
      iconId: responseData.data.current.weather.ic,
    };
    populateUI(sortedData);
  } catch (error) {}
}
getWeatherData();

const cityName = document.querySelector('.city-name');
const countryName = document.querySelector('.country-name');
const temperature = document.querySelector('.temperature');
const infoIcon = document.querySelector('.info-icon');

function populateUI(data) {
  cityName.textContent = data.city;
  countryName.textContent = data.country;
  temperature.textContent = `${data.temperature}°`;
  infoIcon.src = `/ressources/icons/${data.iconId}.svg`;
  infoIcon.style.width = '150px';
  loader.classList.remove('active');
}
