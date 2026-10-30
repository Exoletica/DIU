import { Box } from "@mui/material";
import PropTypes from "prop-types";
import "./False.scss";

const False = ({ className = "" }) => {
  return (
    <Box className="checkbox23">
      <Box className="availability-checkbox-rects" />
    </Box>
  );
};

False.propTypes = {
  className: PropTypes.string,
};

export default False;
