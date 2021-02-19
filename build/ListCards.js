"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = require("./Card");

var _ui = require("@yosmy/ui");

var ListCards = (0, _react.memo)(function (_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      criteria = _ref.criteria;
  return /*#__PURE__*/_react["default"].createElement(_ui.LoaderList, {
    ui: {
      layout: ui.layout,
      empty: function empty() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "No hay tarjetas a\xFAn");
      },
      loading: function loading() {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Card.CardPlaceholder, null), /*#__PURE__*/_react["default"].createElement(_Card.CardPlaceholder, null), /*#__PURE__*/_react["default"].createElement(_Card.CardPlaceholder, null));
      },
      more: function more(_ref2) {
        var onClick = _ref2.onClick;
        return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          flow: "row",
          align: {
            main: "center"
          }
        }, /*#__PURE__*/_react["default"].createElement(_ui.PrimaryButton, {
          margin: {
            top: 2
          },
          onClick: onClick
        }, /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "Mostrar m\xE1s")));
      },
      item: ui.item
    },
    criteria: {
      query: {
        user: criteria.user
      },
      limit: criteria.limit
    },
    onCollect: /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query, skip, limit) {
        var cards;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.collectCards(null, query.user, skip, limit);

              case 2:
                cards = _context.sent;
                return _context.abrupt("return", {
                  items: cards
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  });
}, function (prev, next) {
  return JSON.stringify(prev.criteria) === JSON.stringify(next.criteria);
});
ListCards.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectCards: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    user: _propTypes["default"].string,
    limit: _propTypes["default"].number.isRequired
  }).isRequired
};
var _default = ListCards;
exports["default"] = _default;