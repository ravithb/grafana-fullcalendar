/*eslint id-length: ["error", { "min": 1 }]*/
import { MetricsPanelCtrl } from 'app/plugins/sdk';
import './css/tui-calendar.app.css!';
import * as Calendar from './libs/tui-calendar';

export default class FullCalendarCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector, contextSrv) {
    super($scope, $injector);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));
    
    var calendar = new Calendar('#cal123', {
      defaultView: 'month',
      taskView: false,
      template: {
        monthGridHeader: function(model) {
          var date = new Date(model.date);
          var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
          return template;
        }
      }
    });

    calendar.createSchedules([
      {
        id: '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-11-11T22:30:00+09:00',
        end: '2018-11-12T02:30:00+09:00'
      },
      {
        id: '2',
        calendarId: '1',
        title: 'second schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-11-10T17:30:00+09:00',
        end: '2018-11-10T18:31:00+09:00',
        isReadOnly: true    // schedule is read-only
      }
    ]);
  }

  onPanelTeardown() {
    
  }

  onInitEditMode() {
    
  }

  onDataReceived(dataList) {
    
  }

  onDataSnapshotLoad(snapshotData) {
    
  }
}

FullCalendarCtrl.templateUrl = 'module.html'