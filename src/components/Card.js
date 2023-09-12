import Spiner from "./Spiner";

function Card({ loadingData, showData, now, day }) {

let toDay = new Date();
let dia = toDay.getDate();
let month = toDay.getMonth() + 1;
let year = toDay.getFullYear();
let date = dia + "/" + month + "/" + year;

  if (loadingData) {
    return <Spiner />;
  }

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container-md mx-auto items-center">
          <div className="card mb-3 mx-auto bg-dark text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 m-20  gap-0">
              <div className="bg-emerald-600 rounded-l-md">
                <h2 className="card-title">{now.name}</h2>
                <h3 className="card-date">{date}</h3>
                <img className="object-cover" src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
