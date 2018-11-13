"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var moment = _interopRequireWildcard(require("./libs/moment"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataFormatter =
/*#__PURE__*/
function () {
  function DataFormatter(ctrl, kbn) {
    _classCallCheck(this, DataFormatter);

    this.ctrl = ctrl;
    this.kbn = kbn;
  }

  _createClass(DataFormatter, [{
    key: "setTableValues",
    value: function setTableValues(tableData, data) {
      var _this = this;

      if (tableData && tableData.length > 0) {
        tableData[0].forEach(function (datapoint) {
          var tmp = {
            id: datapoint[_this.ctrl.panel.columnMappings.idField],
            calendarId: _this.ctrl.panel.calendarId,
            title: datapoint[_this.ctrl.panel.columnMappings.titleField],
            category: datapoint[_this.ctrl.panel.columnMappings.categoryField] || 'time',
            raw: datapoint[_this.ctrl.panel.columnMappings.dataField] || '',
            dueDateClass: '',
            start: moment(datapoint[_this.ctrl.panel.columnMappings.startField]).toDate(),
            end: moment(datapoint[_this.ctrl.panel.columnMappings.endField]).toDate(),
            isAllDay: datapoint[_this.ctrl.panel.columnMappings.allDayField] !== undefined ? datapoint[_this.ctrl.panel.columnMappings.allDayField] : false
          };
          console.log('tmp = %o', tmp);
          data.push(tmp);
        });
      }
    }
  }], [{
    key: "tableHandler",
    value: function tableHandler(tableData) {
      var datapoints = [];

      if (tableData.type === 'table') {
        var columnNames = {};
        tableData.columns.forEach(function (column, columnIndex) {
          columnNames[columnIndex] = column.text;
        });
        tableData.rows.forEach(function (row) {
          var datapoint = {};
          row.forEach(function (value, columnIndex) {
            var key = columnNames[columnIndex];
            datapoint[key] = value;
          });
          datapoints.push(datapoint);
        });
      }

      return datapoints;
    }
  }]);

  return DataFormatter;
}();

exports.default = DataFormatter;
//# sourceMappingURL=data_formatter.js.map
