"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_react=require("@testing-library/react"),_Button=_interopRequireDefault(require("./Button")),_jsxRuntime=require("react/jsx-runtime");describe("@components/Button",function(){it("Given a normal component call it should render component",function(){// Arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button",bgColor:"red"})),b=a.getByRole,c=b("button");// Act
// Assert
expect(c).toBeDefined()})}),describe("@components/Button",function(){it("Check if the button has a prop of type",function(){// Arrange
var a=(0,_react.render)(/*#__PURE__*/(0,_jsxRuntime.jsx)(_Button["default"],{type:"button",bgColor:"red"})),b=a.getByRole,c=b("button");// Act
// Assert
expect(c).toHaveProperty("type","button")})});