"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_MediaImg=_interopRequireDefault(require("./MediaImg")),_jsxRuntime=require("react/jsx-runtime");describe("@Components/MediaImg",function(){it("should render successfully",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_MediaImg["default"],{"data-testid":"media-img",src:"img.com/dsads",alt:"Platzinauta"})),b=a.baseElement,c=(0,_react.getByTestId)(b,"media-img");//act
//assert
expect(b).toBeDefined(),expect(c).toHaveProperty("src","http://localhost/img.com/dsads")})}),describe("@Components/MediaImg",function(){it("should have correct styles",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_MediaImg["default"],{"data-testid":"media-img",src:"img.com/dsads",alt:"Platzinauta"})),b=a.baseElement,c=(0,_react.getByTestId)(b,"media-img"),d=getComputedStyle(c);//act
//assert
expect(d.width).toBe("100px"),expect(d.height).toBe("100px"),expect(d.borderRadius).toBe("10%")})});