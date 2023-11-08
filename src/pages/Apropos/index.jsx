import Banner from "../../components/Banner";
import ImageBannerApropos from "../../assets/image_banner_apropos.jpg";
import datasApropos from "../../datas/data_collapse.json";
import Collapse from "../../components/Collapse/Collapse";
import "../../style/build/apropos.css";

function Apropos() {
  const titleApropos = "";
  const menuItems = Array.isArray(datasApropos) ? datasApropos : [];

  return (
    <main>
      <div className="containera">
        <div className="banner">
          <Banner
            key="img-banner-apropos"
            img={ImageBannerApropos}
            title={titleApropos}
          />
        </div>
        <div className="menu">
          {menuItems.map((menuItems, index) => (
            <Collapse
              key={menuItems.id}
              title={menuItems.title}
              description={menuItems.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Apropos;
