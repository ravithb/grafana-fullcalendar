import './css/tui-calendar.app.css!';
import Calendar from './calendar';

export default function link(scope, elem, attrs, ctrl) {
  ctrl.events.on('render', () => {
    render();
    ctrl.renderingCompleted();
  });

  function render() {
    
    const calendarContainer = elem.find('.cal-container');
    const rangeContainer = elem.find('.range-container');

    if (calendarContainer.length != 1) {
      return;
    }

    if (!ctrl.calendar) {
      ctrl.calendar = new Calendar(ctrl, calendarContainer[0],rangeContainer[0]);
      ctrl.calendar.setCalendarColor(ctrl.panel.calendarColor);
    }

    if (!ctrl.data) return;

    ctrl.calendar.clear(true);

    ctrl.calendar.createSchedules(ctrl.data);
    // [
    //   {
    //     id: '1',
    //     calendarId: '1',
    //     title: 'my schedule',
    //     category: 'time',
    //     dueDateClass: '',
    //     start: '2018-11-11T22:30:00+09:00',
    //     end: '2018-11-12T02:30:00+09:00'
    //   },
    //   {
    //     id: '2',
    //     calendarId: '1',
    //     title: 'second schedule',
    //     category: 'time',
    //     dueDateClass: '',
    //     start: '2018-11-10T17:30:00+09:00',
    //     end: '2018-11-10T18:31:00+09:00',
    //     isReadOnly: true    // schedule is read-only
    //   }
    // ]);

    ctrl.calendar.setRangeText();
  }
}
