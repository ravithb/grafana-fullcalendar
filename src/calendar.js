import * as TuiCalendar from './libs/tui-calendar';
import * as moment from './libs/moment';

export default class Calendar {
  ctrl;
  container;
  rangeContainer;
  tuiCalendar;

  constructor(ctrl, container, rangeContainer) {
    this.ctrl = ctrl;
    this.container = container;
    this.rangeContainer = rangeContainer;
    let self = this;
    this.tuiCalendar =  new TuiCalendar(this.container, {
      defaultView: 'month',
      taskView: false,
      template: {
        // monthGridHeader: function(model) {
        //   var date = new Date(model.date);
        //   var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
        //   return template;
        // },

        milestone: function(model) {
          return '<span class="calendar-font-icon ic-milestone-b"></span> <span style="background-color: ' + model.bgColor + '">' + model.title + '</span>';
        },
        allday: function(schedule) {
          return self.getTimeTemplate(schedule, true);
        },
        time: function(schedule) {
          return self.getTimeTemplate(schedule, false);
        },
        task: function(schedule) {
          return '<a href="'+schedule.raw+'">'+schedule.title+'</a>';
        }

      }
    });
  }

  setCalendarColor(cColor) {
    if(cColor && cColor.color && cColor.bgColor && cColor.borderColor){
      this.tuiCalendar.setCalendarColor(this.ctrl.panel.calendarId, cColor,false);
    }
  }

  clear(){
    this.tuiCalendar.clear();
  }

  destroy(){
    this.tuiCalendar.destroy();
  }

  createSchedules(schedules){
    this.tuiCalendar.createSchedules(schedules);
  }

  changeView(view){
    this.tuiCalendar.changeView(view,true);
    this.setRangeText();
  }

  today(){
    this.tuiCalendar.today();
    this.setRangeText();
  }

  next(){
    this.tuiCalendar.next();
    this.setRangeText();
  }

  previous(){
    this.tuiCalendar.prev();
    this.setRangeText();
  }

  setRangeText(){
    if(!this.rangeContainer){
      return;
    }
    var options = this.tuiCalendar.getOptions();
    var viewName = this.tuiCalendar.getViewName();
    var html = [];
    if (viewName === 'day') {
      html.push(moment(this.tuiCalendar.getDate().getTime()).format('Do MMM, YYYY'));
    } else if (viewName === 'month' &&
        (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)) {
      html.push(moment(this.tuiCalendar.getDate().getTime()).format('MMMM, YYYY'));
    } else {
      html.push(moment(this.tuiCalendar.getDateRangeStart().getTime()).format('Do MMM'));
      html.push(' ~ ');
      html.push(moment(this.tuiCalendar.getDateRangeEnd().getTime()).format(' Do MMM, YYYY'));
    }
    this.rangeContainer.innerHTML = html.join('');  
  }

  getTimeTemplate(schedule, isAllDay) {
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
}