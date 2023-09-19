const loader = document.querySelector('loader-container');
const errorInformation = document.querySelector('error-informations');

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
      icon: responseData.data.current.weather.ic,
    };
    console.log(sortedData);
  } catch (error) {}
}
getWeatherData();
