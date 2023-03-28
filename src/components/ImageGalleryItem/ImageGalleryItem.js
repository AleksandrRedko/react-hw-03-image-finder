import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ data }) => {
  return data.map(({ id, webformatURL, largeImageURL, tags }) => {
    return (
      <li key={id} className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          data-largeimg={largeImageURL}
          data-alt={tags}
        />
      </li>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  data: PropTypes.array.isRequired,
};
