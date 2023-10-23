import "../../style/build/banner.css";
import ImageBannerHome from "../../assets/img_banner_home.jpg";
import ImageBannerApropos from "../../assets/image_banner_apropos.jpg";

function Banner() {
  return (
    <section className="banner">
      <div className="banner__calc__img">
        <img
          src={ImageBannerHome}
          className="banner__img banner__img__home"
          alt="photographie banniere home"
        ></img>
        <img
          src={ImageBannerApropos}
          className="banner__img banner__img__apropos"
          alt="photographie banniere apropos"
        ></img>{" "}
      </div>
      <div className="banner__calc__txt">
        <p className="banner__txt banner__text__home">
          {" "}
          Chez vous, partout et ailleurs
        </p>
      </div>
    </section>
  );
}
export default Banner;
