import "../../style/build/gallery.css";
import CartL from "../CartLogement/CartL";
import datas from "../../datas/data.json";

function Gallery() {
  const logements = Array.isArray(datas) ? datas : [];
  const firstSixLogements = logements.slice(0, 6);
  console.log(firstSixLogements);

  return (
    <section className="gallery">
      <div className="gallery__container">
        {firstSixLogements.map((logement, index) => (
          <CartL
            key={logement.id}
            imgsrc={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </section>
  );
}
export default Gallery;
