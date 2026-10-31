import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./CheckboxIcon.scss";

const CheckboxIcon = ({ className = "", isChecked = true }) => {
  return (
    <img className="ischeckedtrue-icon" alt="" data-isChecked={isChecked} />
  );
};

CheckboxIcon.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  isChecked: PropTypes.string,
};

export default CheckboxIcon;
