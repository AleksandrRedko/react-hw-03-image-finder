import PropTypes from "prop-types";

import s from "./Loader.module.css";

const Loader = ({ children }) => {
  return <div className={s.Mask}>{children}</div>;
};
export default Loader;

Loader.propTypes = {
  children: PropTypes.object.isRequired,
};
