import Spiner from "./Spiner";

function Card({ loadingData, showData, now, day }) {
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
              <div className="bg-emerald-600 rounded-l-md group :">
                <img
                  className="object-cover"
                  src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                />
                <div className="absolute inset-0 from-transparent via-transparent">
                  <div className="flex">
                    <h2 className="card-title text-8xl text-start">
                      {now.name}
                    </h2>
                    <h3 className="card-date ml-80 mt-10">{date}</h3>
                  </div>

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

              <div className="bg-emerald-300 text-black rounded-r-md">
                <div className="card-body text-start mt-2">sdhsdf</div>
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
