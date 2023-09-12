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
            <div className="columns-2 m-20 border-r-emerald-600 gap-0">
              <div className="bg-black">cxvncvn</div>

              <div className="bg-white text-black"> fgnxcvn</div>
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
