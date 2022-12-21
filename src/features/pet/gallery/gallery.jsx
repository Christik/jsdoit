import './gallery.scss';

function Gallery({ url }) {
  return (
    <div className="jd-pet-gallery">
      <img
        className="jd-pet-gallery__img"
        src={url}
        width="560"
        height="420"
        alt=""
      />
    </div>
  );
}

export default Gallery;
