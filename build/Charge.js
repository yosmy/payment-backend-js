"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChargePlaceholder = exports.Charge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _money = _interopRequireDefault(require("@yosmy/money"));

var _date = require("@yosmy/date");

var ChargeLayout = function ChargeLayout(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_ui.Container, (0, _extends2["default"])({
    flow: "row"
  }, props), children);
};

ChargeLayout.propTypes = {};

var Charge = function Charge(_ref2) {
  var amount = _ref2.amount,
      date = _ref2.date,
      props = (0, _objectWithoutProperties2["default"])(_ref2, ["amount", "date"]);
  return /*#__PURE__*/_react["default"].createElement(ChargeLayout, props, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, _money["default"].format(amount)), /*#__PURE__*/_react["default"].createElement(_ui.Text, {
    margin: {
      left: 2
    }
  }, (0, _date.distance)(date * 1000), " (", (0, _date.format)(date * 1000), ")"));
};

exports.Charge = Charge;
Charge.propTypes = {
  amount: _propTypes["default"].number.isRequired,
  date: _propTypes["default"].number.isRequired
};

var ChargePlaceholder = function ChargePlaceholder(_ref3) {
  var props = (0, _extends2["default"])({}, _ref3);
  return /*#__PURE__*/_react["default"].createElement(ChargeLayout, props, /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_ui.LinePlaceholder, {
    margin: {
      left: 1
    }
  }));
};

exports.ChargePlaceholder = ChargePlaceholder;
ChargePlaceholder.propTypes = {};