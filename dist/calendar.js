"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var TuiCalendar = _interopRequireWildcard(require("./libs/tui-calendar"));

var moment = _interopRequireWildcard(require("./libs/moment"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function () {
  function Calendar(ctrl, container, rangeContainer) {
    _classCallCheck(this, Calendar);

    _defineProperty(this, "ctrl", void 0);

    _defineProperty(this, "container", void 0);

    _defineProperty(this, "rangeContainer", void 0);

    _defineProperty(this, "tuiCalendar", void 0);

    this.ctrl = ctrl;
    this.container = container;
    this.rangeContainer = rangeContainer;
    var self = this;
    this.tuiCalendar = new TuiCalendar(this.container, {
      defaultView: 'month',
      taskView: false,
      template: {
        // monthGridHeader: function(model) {
        //   var date = new Date(model.date);
        //   var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
        //   return template;
        // },
        milestone: function milestone(model) {
          return '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + model.bgColor + '">' + model.title + '</span>';
        },
        allday: function allday(schedule) {
          return self.getTimeTemplate(schedule, true);
        },
        time: function time(schedule) {
          return self.getTimeTemplate(schedule, false);
        },
        task: function task(schedule) {
          return '<a href="' + schedule.raw + '">' + schedule.title + '</a>';
        }
      }
    });
  }

  _createClass(Calendar, [{
    key: "setCalendarColor",
    value: function setCalendarColor(cColor) {
      if (cColor && cColor.color && cColor.bgColor && cColor.borderColor) {
        this.tuiCalendar.setCalendarColor(this.ctrl.panel.calendarId, cColor, false);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      this.tuiCalendar.clear();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.tuiCalendar.destroy();
    }
  }, {
    key: "createSchedules",
    value: function createSchedules(schedules) {
      this.tuiCalendar.createSchedules(schedules);
    }
  }, {
    key: "changeView",
    value: function changeView(view) {
      this.tuiCalendar.changeView(view, true);
      this.setRangeText();
    }
  }, {
    key: "today",
    value: function today() {
      this.tuiCalendar.today();
      this.setRangeText();
    }
  }, {
    key: "next",
    value: function next() {
      this.tuiCalendar.next();
      this.setRangeText();
    }
  }, {
    key: "previous",
    value: function previous() {
      this.tuiCalendar.prev();
      this.setRangeText();
    }
  }, {
    key: "setRangeText",
    value: function setRangeText() {
      if (!this.rangeContainer) {
        return;
      }

      var options = this.tuiCalendar.getOptions();
      var viewName = this.tuiCalendar.getViewName();
      var html = [];

      if (viewName === 'day') {
        html.push(moment(this.tuiCalendar.getDate().getTime()).format('Do MMM, YYYY'));
      } else if (viewName === 'month' && (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
        html.push(moment(this.tuiCalendar.getDate().getTime()).format('MMMM, YYYY'));
      } else {
        html.push(moment(this.tuiCalendar.getDateRangeStart().getTime()).format('Do MMM'));
        html.push(' ~ ');
        html.push(moment(this.tuiCalendar.getDateRangeEnd().getTime()).format(' Do MMM, YYYY'));
      }

      this.rangeContainer.innerHTML = html.join('');
    }
  }, {
    key: "getTimeTemplate",
    value: function getTimeTemplate(schedule, isAllDay) {
      var html = [];
      var start = moment(schedule.start.toUTCString());

      if (!isAllDay) {
        html.push('<strong>' + start.format('HH:mm') + '</strong> ');
      }

      if (schedule.isPrivate) {
        html.push('<span class="calendar-font-icon ic-lock-b"></span>');
        html.push(' Private');
      } else {
        if (schedule.isReadOnly) {
          html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
        } else if (schedule.recurrenceRule) {
          html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
        } else if (schedule.attendees.length) {
          html.push('<span class="calendar-font-icon ic-user-b"></span>');
        } else if (schedule.location) {
          html.push('<span class="calendar-font-icon ic-location-b"></span>');
        }

        html.push(' ' + schedule.title);
      }

      return html.join('');
    }
  }]);

  return Calendar;
}();

exports.default = Calendar;
//# sourceMappingURL=calendar.js.map
