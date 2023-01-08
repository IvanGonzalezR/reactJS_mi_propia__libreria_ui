import { forwardRef } from "react";
import { cx, css } from "@emotion/css";
import { PropTypes } from "prop-types";

const ContainerFlexStyles = (width, height, bgColor,
  flexDirection, alignContent,
  alignItems, justifyContent, gap) => css`
  width: ${width || "100%"};
  height: ${height || "100%"};
  display: flex;
  background-color: ${bgColor || "white"};
  flex-direction: ${flexDirection || "column"};
  align-content: ${alignContent || "center"};
  align-items: ${alignItems || "center"};
  justify-content: ${justifyContent || "center"};
  gap: ${gap || "0px"};
`;

const ContainerFlex = forwardRef((props, ref) => {
  const {
    className,
    width,
    height,
    bgColor,
    flexDirection,
    alignContent,
    alignItems,
    justifyContent,
    gap,
    ...otherProps
  } = props;

  return (
    <section
      ref={ref}
      {...otherProps}
      className={cx(ContainerFlexStyles(width, height, bgColor,
        flexDirection, alignContent, alignItems, justifyContent, gap), className)}
    >
    </section>
  );
});

ContainerFlex.propTypes = {
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
  gap: PropTypes.string,

  flexDirection: PropTypes.oneOf([ 'row', 'row-reverse', 'column', 'column-reverse' ]),
  alignContent: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch' ]),
  alignItems: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'stretch', 'baseline' ]),
  justifyContent: PropTypes.oneOf([ 'center', 'flex-start', 'flex-end', 'space-between', 'space-around', 'space-evenly' ])
};

export default ContainerFlex;