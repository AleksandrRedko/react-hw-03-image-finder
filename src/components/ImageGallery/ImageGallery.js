import PropTypes from "prop-types";

import s from "./ImageGallery.module.css";

const ImageGallery = ({ children, onClick }) => {
  return (
    <ul onClick={onClick} className={s.ImageGallery}>
      {children}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
