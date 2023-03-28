import PropTypes from "prop-types";

import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div className={s.ContainerButton}>
      <button onClick={onClick} type="button" className={s.Button}>
        Load more
      </button>
    </div>
  );
};
export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
