document.addEventListener("DOMContentLoaded", () => {
    const weatherForm = document.getElementById("weatherForm");
  
    weatherForm.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const weatherCity = document.getElementById("weatherCity").value;
  
      if (weatherCity.length > 0) {
        await reqWeatherInfo(weatherCity);
      }
    });
  });
  
  async function reqWeatherInfo(weatherCity) {
    try {
      const data = await fetch(
        `http://localhost:3000/weather/${weatherCity}`,
        {}
      );
      const result = await data.json();
      if (result) {
        await this.createWeatherInfo(result);
      }
  
      console.log(result);
    } catch (error) {
      console.error("Error al obtener datos del clima:", error);
    }
  }
  
  async function createWeatherInfo(result) {
    const weatherElement = document.getElementById("container");
    weatherElement.style.border = "1px solid #ccc";
    weatherElement.innerHTML = `
    <p>Temperatura: </p><spam>${result.main.temp}</spam>
    <p>Humedad: </p><spam>${result.main.humidity}</spam>
    <p>Presión atmosferica: </p><spam>${result.main.pressure}</spam>
    <p>Viento: </p><spam>${result.wind.speed}</spam>
    `;
  }
  