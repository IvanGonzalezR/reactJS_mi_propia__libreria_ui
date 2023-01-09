"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_ContainerFlex=_interopRequireDefault(require("./ContainerFlex")),_jsxRuntime=require("react/jsx-runtime");describe("@Components/ContainerFlex",function(){it("Check if ContainerFlex is defined",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_ContainerFlex["default"],{role:"banner"})),b=a.getByRole,c=b("banner");//act
//assert
expect(c).toBeDefined()})}),describe("@Components/ContainerFlex",function(){it("bgColor is red or blue",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_ContainerFlex["default"],{role:"banner",bgColor:"red"})),b=a.getByRole,c=b("banner"),d=getComputedStyle(c);//act
//assert
expect(d.backgroundColor).toBe("red")}),it("Check if bgColor is blue",function(){//arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_ContainerFlex["default"],{role:"banner",bgColor:"blue"})),b=a.getByRole,c=b("banner"),d=getComputedStyle(c);//act
//assert
expect(d.backgroundColor).toBe("blue")})});