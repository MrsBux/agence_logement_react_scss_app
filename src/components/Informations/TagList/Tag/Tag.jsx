import "../../../../style/build/tag.css";

function Tag({ tag }) {
  return (
    <div className="tagbox">
      <p className="tagbox__name"> {tag} </p>
    </div>
  );
}
export default Tag;
