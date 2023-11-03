import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import ImageBannerHome from "../../assets/img_banner_home.jpg";
import "../../style/build/home.css";

function Home() {
  const titleHome = "Chez vous, partout et ailleurs.";

  return (
    <main>
      <Banner key="img-banner-home" img={ImageBannerHome} title={titleHome} />
      <Gallery />
    </main>
  );
}

export default Home;
