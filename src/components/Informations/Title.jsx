import "../../style/build/title.css";

function Title({ title, location }) {
  return (
    <div className="title">
      <h2 className="title__name">{title}</h2>
      <h3 className="title__location"> {location}</h3>
    </div>
  );
}
export default Title;
