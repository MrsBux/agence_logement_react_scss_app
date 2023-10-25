import DropdownMenu from "../../components/DropdownMenu";
import Banner from "../../components/Banner";
import ImageBannerApropos from "../../assets/image_banner_apropos.jpg";

function Apropos() {
  const titleApropos = "";

  return (
    <div>
      <Banner
        key="img-banner-apropos"
        img={ImageBannerApropos}
        title={titleApropos}
      />
      <DropdownMenu />
    </div>
  );
}

export default Apropos;
