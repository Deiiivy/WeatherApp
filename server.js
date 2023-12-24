const express = require("express"); 
const cors = require("cors");

const app = express(); 
app.use(cors("*"));
const port = 3000; 

app.use(express.json()); 

app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=85ea6d9b9903ea1a1ad9f6589f427262`
    );
    const weatherData = await weatherResponse.json();
    return res.send(weatherData);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
