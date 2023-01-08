import { forwardRef } from "react";
import { cx, css } from "@emotion/css";
import { PropTypes } from "prop-types";

const buttonStyles = (bgColor, color, width, height, bgColorHover, colorHover, borderRadius) => css`
  background-color: ${bgColor};
  color: ${color};
  width: ${width || "150px"};
  height: ${height || "40px"};
  border-radius: ${borderRadius || "8px"};
  border: none;
  text-align: center;
  &:hover {
    background-color: ${bgColorHover};
    color: ${colorHover};
  }
`;

const Button = forwardRef((props, ref) => {
  const {
    className,
    bgColor,
    color,
    width,
    height,
    bgColorHover,
    colorHover,
    borderRadius,
    ...otherProps } = props;
  return (
    <button
      type='button'
      ref={ref}
      {...otherProps}
      className={cx(buttonStyles(
        bgColor,
        color,
        width,
        height,
        bgColorHover,
        colorHover,
        borderRadius), className)}
    >
      {props.children}
    </button>
  );
});

// Verificar que los props que se pasan al componente son los correctos
Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColorHover: PropTypes.string,
  colorHover: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Button;