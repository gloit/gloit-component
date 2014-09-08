moduleForComponent('gc-table');

var setupTable = function(table) {
  table.set('columns', [
    GloitComponent.TableColumnModel.create({
      title: '名称',
      cellContentPath: 'name'
    }),
    GloitComponent.TableColumnModel.create({
      title: '性别',
      cellContentPath: 'gender'
    })
  ]);

  table.set('content', [
    Ember.Object.create({
      name: '张三',
      gender: '男'
    }),
    Ember.Object.create({
      name: '李四',
      gender: '女'
    })
  ]);

  return table;
};

test('renders rows', function() {
  expect(2);

  var table = this.subject();

  ok(!Ember.isEmpty(this.$('.gc-table')), 'exists');

  Ember.run(function() {
    setupTable(table);
  });

  equal(table.$('tbody tr').length, 2, 'has two records in rows');
});

test('renders top actions', function() {
  expect(1);

  var table = this.subject();

  Ember.run(function() {
    setupTable(table);

    table.set('topActions', [{
      name: 'removeSelected', text: '移除选定', icon: 'fa fa-minus', position: 'left'
    }]);
  });

  equal(this.$('caption .gc-table-action-group.pull-left a').text().trim(), '移除选定', 'renders left side actions');
});

test('enables multi-selectable', function() {
  expect(1);

  var table = this.subject();

  Ember.run(function() {
    setupTable(table);

    table.set('rowSelectable', true);
    table.set('multiple', true);
  });

  ok(!Ember.isEmpty(this.$('thead input[type=checkbox]')), 'has a checkbox in head');
});
