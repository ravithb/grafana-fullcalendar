/*eslint id-length: ["error", { "min": 1 }]*/
import { MetricsPanelCtrl } from 'app/plugins/sdk';
import calRenderer from './cal_renderer';
import './css/calendar.css!';

export default class CalendarCtrl extends MetricsPanelCtrl {
  calendar;

  constructor($scope, $injector, contextSrv) {
    super($scope, $injector);

    this.events.on('init-edit-mode', this.onInitEditMode.bind(this));
    this.events.on('data-received', this.onDataReceived.bind(this));
    this.events.on('panel-teardown', this.onPanelTeardown.bind(this));
    this.events.on('data-snapshot-load', this.onDataSnapshotLoad.bind(this));
    
    $scope.$watch(
      'ctrl.panel.content',
      _.throttle(() => {
        this.render();
        console.log('render_called_in_lodash');
      }, 1000)
    );
  }

  onPanelTeardown() {
    
  }

  onInitEditMode() {
    
  }

  onDataReceived(dataList) {
    
  }

  onDataSnapshotLoad(snapshotData) {
    
  }

  /* eslint class-methods-use-this: 0 */
  link(scope, elem, attrs, ctrl) {
    console.log('*LINK Called');
    calRenderer(scope, elem, attrs, ctrl);
  }

}

CalendarCtrl.templateUrl = 'module.html'