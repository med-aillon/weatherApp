const loader = document.querySelector('loader-container');
const errorInformation = document.querySelector('error-informations');

async function getWeatherData() {
  try {
    const response = await fetch(
      'http://api.airvisual.com/v2/nearest_city?key=2d244729-05d5-4cc3-bcbc-c317628bd9c5'
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
