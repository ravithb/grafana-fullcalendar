/*eslint id-length: ["error", { "min": 1 }]*/
import { MetricsPanelCtrl } from 'app/plugins/sdk';
import $ from 'jquery';
import 'fullcalendar!';

export default class FullCalendarCtrl extends MetricsPanelCtrl {

  constructor($scope, $injector, contextSrv) {
    super($scope, $injector);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));

    console.log($(window));
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