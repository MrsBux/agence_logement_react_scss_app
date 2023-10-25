import "../../style/build/banner.css";

function Banner({ img, title }) {
  return (
    <section className="banner">
      <div className="banner__calc__img">
        <img
          src={img}
          className="banner__img banner__img__home"
          alt="photographie banniere"
        ></img>
      </div>
      <div className="banner__calc__txt">
        <p className="banner__txt banner__text__home">{title}</p>
      </div>
    </section>
  );
}
export default Banner;
