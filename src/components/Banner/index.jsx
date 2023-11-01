import "../../style/build/banner.css";

function Banner({ img, title }) {
  return (
    <section className="banner">
      <div className="banner__calc">
        <img
          src={img}
          className="banner__calc__img"
          alt="photographie banniere"
        ></img>
        <p className="banner__calc__txt__home">{title}</p>
      </div>
    </section>
  );
}
export default Banner;
