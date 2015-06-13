import Ember from 'ember';

export default Ember.Controller.extend({
  brand: {
    // @required 文字商标信息
    name: 'Brand',

    // @optional 图片商标信息，如果设置了则不显示文字商标，而显示图片商标。
    imageUrl: '/path/to/brand.png'
  },

  menus: Ember.A([{
    icon: 'fa fa-flag-o fa-inverse', text: '基础', active: true,
    items: Ember.A([
      { icon: 'fa fa-puzzle-piece fa-inverse', route: '', text: '登录窗口' }
    ])
  }, {
    icon: 'fa fa-th-list fa-inverse', text: '控件',
    items: Ember.A([
      { icon: 'fa fa-puzzle-piece fa-inverse', route: '', text: 'Select2' },
      { icon: 'fa fa-puzzle-piece fa-inverse', route: '', text: '时间选择器' }
    ])
  }]),

  starterItems: Ember.A([
    { icon: 'fa fa-puzzle-piece', route: '', text: '登录窗口' },
    { icon: 'fa fa-puzzle-piece', route: '', text: '表单' }
  ])
});
