import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import ImageBannerHome from "../../assets/img_banner_home.jpg";

function Home() {
  const titleHome = "Chez vous, partout et ailleurs.";

  return (
    <section>
      <Banner key="img-banner-home" img={ImageBannerHome} title={titleHome} />
      <Gallery />
    </section>
  );
}

export default Home;
