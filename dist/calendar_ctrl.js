"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sdk = require("app/plugins/sdk");

var _cal_renderer = _interopRequireDefault(require("./cal_renderer"));

require("./css/calendar.css!");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarCtrl =
/*#__PURE__*/
function (_MetricsPanelCtrl) {
  _inherits(CalendarCtrl, _MetricsPanelCtrl);

  function CalendarCtrl($scope, $injector, contextSrv) {
    var _this;

    _classCallCheck(this, CalendarCtrl);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CalendarCtrl).call(this, $scope, $injector));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "calendar", void 0);

    _this.events.on('init-edit-mode', _this.onInitEditMode.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _this.events.on('data-received', _this.onDataReceived.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _this.events.on('panel-teardown', _this.onPanelTeardown.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    _this.events.on('data-snapshot-load', _this.onDataSnapshotLoad.bind(_assertThisInitialized(_assertThisInitialized(_this))));

    $scope.$watch('ctrl.panel.content', _.throttle(function () {
      _this.render();

      console.log('render_called_in_lodash');
    }, 1000));
    return _this;
  }

  _createClass(CalendarCtrl, [{
    key: "onPanelTeardown",
    value: function onPanelTeardown() {}
  }, {
    key: "onInitEditMode",
    value: function onInitEditMode() {}
  }, {
    key: "onDataReceived",
    value: function onDataReceived(dataList) {}
  }, {
    key: "onDataSnapshotLoad",
    value: function onDataSnapshotLoad(snapshotData) {}
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      console.log('*LINK Called');
      (0, _cal_renderer.default)(scope, elem, attrs, ctrl);
    }
  }]);

  return CalendarCtrl;
}(_sdk.MetricsPanelCtrl);

exports.default = CalendarCtrl;
CalendarCtrl.templateUrl = 'module.html';
//# sourceMappingURL=calendar_ctrl.js.map
