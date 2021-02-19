"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ui = require("@yosmy/ui");

var _Charge = require("./Charge");

var ListCharges = function ListCharges(_ref) {
  var ui = _ref.ui,
      api = _ref.api,
      criteria = _ref.criteria;
  return /*#__PURE__*/_react["default"].createElement(_ui.LoaderList, {
    ui: {
      layout: ui.layout,
      empty: function empty() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Text, null, "No hay pagos a\xFAn");
      },
      loading: function loading() {
        return /*#__PURE__*/_react["default"].createElement(_ui.Container, {
          margin: {
            top: 2
          }
        }, /*#__PURE__*/_react["default"].createElement(_Charge.ChargePlaceholder, null), /*#__PURE__*/_react["default"].createElement(_Charge.ChargePlaceholder, {
          margin: {
            top: 1
          }
        }), /*#__PURE__*/_react["default"].createElement(_Charge.ChargePlaceholder, {
          margin: {
            top: 1
          }
        }));
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
      item: function item(props) {
        return /*#__PURE__*/_react["default"].createElement(ui.item, props);
      }
    },
    criteria: {
      query: {
        user: criteria.user
      },
      limit: criteria.limit
    },
    onCollect: /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query, skip, limit) {
        var charges;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.collectCharges(null, query.user, null, null, null, skip, limit);

              case 2:
                charges = _context.sent;
                return _context.abrupt("return", {
                  items: charges
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
};

ListCharges.propTypes = {
  ui: _propTypes["default"].shape({
    layout: _propTypes["default"].func.isRequired,
    item: _propTypes["default"].func.isRequired
  }).isRequired,
  api: _propTypes["default"].shape({
    collectCharges: _propTypes["default"].func.isRequired
  }).isRequired,
  criteria: _propTypes["default"].shape({
    user: _propTypes["default"].string,
    limit: _propTypes["default"].number.isRequired
  }).isRequired
};
var _default = ListCharges;
exports["default"] = _default;