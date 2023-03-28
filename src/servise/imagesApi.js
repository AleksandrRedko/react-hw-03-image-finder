import axios from "axios";
import PropTypes from "prop-types";

const fetchImages = (url) => {
  return axios.get(url).then((response) => response.data);
};
export default { fetchImages };

fetchImages.propTypes = {
  url: PropTypes.node.isRequired,
};
