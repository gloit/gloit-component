import Ember from 'ember';
import ColumnModel from 'gloit-component/components/gc-table/gc-column-model';

export default Ember.Controller.extend({
  columns: Ember.computed(function() {
    var closeColumn, dateColumn, formatPrice, highColumn, lowColumn, openColumn;
    formatPrice = function(price) {
      var color;
      color = 'red';
      price = price.toFixed(2);
      if (price < 0) color = 'green';
      return Ember.String.htmlSafe("<span style='color: " + color + ";'>" + price + "</span>");
    };
    dateColumn = ColumnModel.create({
      title: '日期',
      width: 100,
      cellContentPath: 'date',
      formatCellContent: function(value) {
        return moment(value).format('YYYY.MM.DD');
      }
    });
    openColumn = ColumnModel.create({
      title: '开盘价',
      width: 100,
      cellContentPath: 'open',
      textAlign: 'right',
      formatCellContent: function(value) {
        return formatPrice(value);
      }
    });
    highColumn = ColumnModel.create({
      title: '最高价',
      width: 100,
      cellContentPath: 'high',
      textAlign: 'center',
      formatCellContent: function(value) {
        return formatPrice(value);
      }
    });
    lowColumn = ColumnModel.create({
      title: '最低价',
      width: 100,
      cellContentPath: 'low',
      textAlign: 'left',
      formatCellContent: function(value) {
        return formatPrice(value);
      }
    });
    closeColumn = ColumnModel.create({
      title: '收盘价',
      width: 100,
      cellContentPath: 'close',
      formatCellContent: function(value) {
        return formatPrice(value);
      }
    });
    return Ember.A([dateColumn, openColumn, highColumn, lowColumn, closeColumn]);
  }),

  content: Ember.computed(function() {
    var result = Ember.A([]);

    for (var i = 0; i<= 25; i++) {
      var date = new Date();
      date.setDate(date.getDate() + i);
      result.pushObject(Ember.Object.create({
        date: date,
        open: Math.round(Math.random() * 100 - 50),
        high: Math.round(Math.random() * 100 - 50),
        low: Math.round(Math.random() * 100 - 50),
        close: Math.round(Math.random() * 100 - 50),
        volume: Math.round(Math.random() * 1000000)
      }));
    }

    return result;
  }),

  topActions: Ember.A([
    {
      name: 'removeSelected',
      text: '移除选定',
      icon: 'fa fa-minus',
      position: 'left'
    }, {
      name: 'removeAll',
      text: '清空',
      icon: 'fa fa-tint',
      position: 'left'
    }, {
      name: 'add',
      text: '添加',
      icon: 'fa fa-plus',
      position: 'right'
    }
  ]),
  singleSelection: new Ember.Set(),
  multipleSelection: new Ember.Set(),
  selectionDidChange: Ember.observer('multipleSelection.length', function() {
    alert("共选中了" + (this.get('multipleSelection.length')) + "行");
    return console.log(this.get('multipleSelection'));
  }),
  actions: {
    select: function(obj) {
      return alert("选中了" + (obj.toString()));
    },
    removeSelected: function() {
      return alert('`移除选中`按钮被点击！');
    },
    removeAll: function() {
      return alert('`清空`按钮被点击！');
    }
  }
});
