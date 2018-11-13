import _ from 'lodash';
import * as moment from './libs/moment';

export default class DataFormatter {
  constructor(ctrl, kbn) {
    this.ctrl = ctrl;
    this.kbn = kbn;
  }

  static tableHandler(tableData) {
    const datapoints = [];

    if (tableData.type === 'table') {
      const columnNames = {};

      tableData.columns.forEach((column, columnIndex) => {
        columnNames[columnIndex] = column.text;
      });

      tableData.rows.forEach((row) => {
        const datapoint = {};

        row.forEach((value, columnIndex) => {
          const key = columnNames[columnIndex];
          datapoint[key] = value;
        });

        datapoints.push(datapoint);
      });
    }

    return datapoints;
  }

  setTableValues(tableData, data) {
    if (tableData && tableData.length > 0) {

      tableData[0].forEach((datapoint) => {
        data.push({
          id: datapoint[this.ctrl.panel.columnMappings.idField],
          calendarId: this.ctrl.panel.calendarId,
          title: datapoint[this.ctrl.panel.columnMappings.titleField],
          category: datapoint[this.ctrl.panel.columnMappings.categoryField] || 'time',
          raw: datapoint[this.ctrl.panel.columnMappings.dataField] || '',
          dueDateClass: '',
          start: moment(datapoint[this.ctrl.panel.columnMappings.startField]).toDate(),
          end: moment(datapoint[this.ctrl.panel.columnMappings.endField]).toDate(),
          isAllDay: (datapoint[this.ctrl.panel.columnMappings.allDayField] !== undefined)?datapoint[this.ctrl.panel.columnMappings.allDayField]:false
        });
      });
    }
  }
}
