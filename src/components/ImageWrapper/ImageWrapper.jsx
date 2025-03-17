import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageWrapper.module.sass";

// проброс пропсів
function ImageWrapper({ width, height, children, ...restProps }) {
  const wrapperCat = {
    width: width,
    height: height,
  };
  console.log(restProps);
  return (
    <div style={wrapperCat} className={styles.imageContainer} {...restProps}>
      {children}
    </div>
  );
}

ImageWrapper.defaultProps = {
  width: "300px",
  height: "200px",
};

ImageWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default ImageWrapper;
