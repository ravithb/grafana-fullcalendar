"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = link;

require("./css/tui-calendar.app.css!");

var _calendar = _interopRequireDefault(require("./calendar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function link(scope, elem, attrs, ctrl) {
  ctrl.events.on('render', function () {
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    // if (!ctrl.data) return;
    var calendarContainer = elem.find('.cal-container');
    var rangeContainer = elem.find('.range-container');

    if (calendarContainer.length != 1) {
      return;
    }

    if (!ctrl.calendar) {
      ctrl.calendar = new _calendar.default(ctrl, calendarContainer[0], rangeContainer[0]);
    }

    ctrl.calendar.createSchedules([{
      id: '1',
      calendarId: '1',
      title: 'my schedule',
      category: 'time',
      dueDateClass: '',
      start: '2018-11-11T22:30:00+09:00',
      end: '2018-11-12T02:30:00+09:00'
    }, {
      id: '2',
      calendarId: '1',
      title: 'second schedule',
      category: 'time',
      dueDateClass: '',
      start: '2018-11-10T17:30:00+09:00',
      end: '2018-11-10T18:31:00+09:00',
      isReadOnly: true // schedule is read-only

    }]);
    ctrl.calendar.setRangeText();
  }
}
//# sourceMappingURL=cal_renderer.js.map
