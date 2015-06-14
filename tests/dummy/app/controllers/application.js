import Ember from 'ember';

export default Ember.Controller.extend({
  brand: { name: 'GC+' },
  menus: Ember.A([{
    icon: 'fa fa-flag-o', text: '基础控件',
    items: Ember.A([
      { icon: 'fa fa-puzzle-piece', route: 'basics.login-form', text: '登录' },
      { icon: 'fa fa-puzzle-piece', route: 'basics.sidebar', text: '侧边栏' },
      { icon: 'fa fa-puzzle-piece', route: 'basics.sidelist', text: '列表栏' },
      { icon: 'fa fa-puzzle-piece', route: 'basics.pagination', text: '分页条' }
    ])
  }, {
    icon: 'fa fa-flag-o', text: '表格控件',
    items: Ember.A([
      { icon: 'fa fa-puzzle-piece', route: 'tables.normal', text: '普通表格' }
    ])
  }]),

  starterItems: Ember.A([
    { icon: 'fa fa-user', route: '', text: '个人信息' },
    { icon: 'fa fa-key', route: '', text: '修改密码' },
    { icon: 'fa fa-sign-out', route: '', text: '注销' }
  ])
});
