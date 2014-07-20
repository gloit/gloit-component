moduleForComponent('gc-table');

test('renders rows', function() {
  expect(2);

  table = this.subject();

  ok(!Ember.isEmpty(this.$('.gc-table')), 'exists');

  Ember.run(function() {
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
  });

  equal(table.$('tbody tr').length, 2, 'has two records in rows');
});
