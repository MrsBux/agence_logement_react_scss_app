import "../../style/build/hote.css";

function Hote({ name, picture }) {
  return (
    <div className="host">
      <div className="host__container1">
        <p className="host__container1__name"> {name} </p>
      </div>
      <div className="host__container2">
        <img
          className="host__container2__picture"
          src={picture}
          alt="hôte"
        ></img>
      </div>
    </div>
  );
}
export default Hote;
