import { forwardRef } from "react";
import { cx, css } from "@emotion/css";
import { PropTypes } from "prop-types";

const MediaImgStyles = (width, height, borderRadius) => css`
  width: ${width || "100px"};
  height: ${height || "100px"};
  border-radius: ${borderRadius || "10%"};
`;

const MediaImg = forwardRef((props, ref) => {
  const {
    className,
    src,
    alt,
    borderRadius,
    width,
    height,
    ...otherProps
  } = props;
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      {...otherProps}
      className={cx(MediaImgStyles(width, height, borderRadius), className)}
    />
  );
});

MediaImg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  borderRadius: PropTypes.string,
  className: PropTypes.string,
};

export default MediaImg;