import Spiner from "./Spiner";

function Card({ loadingData, showData, now, day }) {
  if (loadingData) {
    return <Spiner />;
  }

  return (
    <div className="mt-5">
      {showData === true ? (
        <div className="container-md mx-auto items-center">
          <div className="card mb-3 mx-auto bg-dark text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 m-20  gap-0">
              <div className="bg-emerald-600 rounded-l-md">cxvncvn</div>

              <div className="bg-emerald-300 text-black rounded-r-md"> fgnxcvn</div>
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
