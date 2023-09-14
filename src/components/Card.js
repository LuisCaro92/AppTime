import Spiner from "./Spiner";

function Card({ loadingData, showData, now }) {
  let toDay = new Date();
  let dia = toDay.getDate();
  let month = toDay.getMonth() + 1;
  let year = toDay.getFullYear();
  let date = dia + "/" + month + "/" + year;

  let url = "";
  let iconUrl = "";

  

  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + now.weather[0].icon + ".png";

 

  }

  if (loadingData) {
    return <Spiner />;
  }

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container-md mx-auto">
          <div className="card mb-3 mx-auto bg-dark text-white ">
            <div className="grid grid-cols-1 sm:grid-cols-2 m-20 relative gap-0">
              <div className="bg-emerald-600 rounded-l-md">
                <img
                  className="object-cover"
                  src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="absolute inset-0 from-transparent via-transparent items-center">
                  <h2 className="card-title text-8xl items-center">
                    {now.name}
                  </h2>
                  <h3 className="card-date">{date}</h3>
                  <p className="card-icon flex ">
                    <img className="img-icon w-40" src={iconUrl} />
                  </p>
                  <p className="card-icon-description">
                    {now.weather[0].description}
                  </p>
                  <h1 className="card-temp">
                    {(now.main.temp - 273.15).toFixed(1)}°C
                  </h1>
                </div>
              </div>

              <div className="bg-emerald-300   rounded-r-md">
                <div className="card-body text-xl text-white mt-5">
                    <h1 className="temperatura-text  mt-4 ">Temperatura maxima: {(now.main.temp_max - 273.15).toFixed(1)}°C</h1>
                    <h1 className="temperatura-text  mt-1">Temperatura minima: {(now.main.temp_min - 273.15).toFixed(1)}°C</h1>
                    <h1 className="temperatura-text  mt-1">Sensacion termica: {(now.main.feels_like - 273.15).toFixed(1)}°C</h1>
                    <h1 className="temperatura-text  mt-1">Humedad: {now.main.humidity}%</h1>
                    <h1 className="temperatura-text  mt-1">Velocidad viento: {now.wind.speed}M/S</h1>
                </div>
                <hr/>
                <div className="next-day">

                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-white">Sin datos</h2>
      )}
    </div>
  );
}

export default Card;
