"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardPlaceholder = exports.Card = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var CardLayout = function CardLayout(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_ui.Text, props, children);
};

CardLayout.propTypes = {};

var Card = function Card(_ref2) {
  var last4 = _ref2.last4,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["last4"]);
  return /*#__PURE__*/_react["default"].createElement(CardLayout, props, "**** **** **** ", last4);
};

exports.Card = Card;
Card.propTypes = {
  last4: _propTypes["default"].string.isRequired
};

var CardPlaceholder = function CardPlaceholder(_ref3) {
  var props = (0, _extends2["default"])({}, _ref3);
  return /*#__PURE__*/_react["default"].createElement(CardLayout, props, /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null));
};

exports.CardPlaceholder = CardPlaceholder;
CardPlaceholder.propTypes = {};