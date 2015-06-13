import Ember from 'ember';

export default Ember.Controller.extend({
  listData: Ember.A([
    { icon: 'fa fa-user', text: '个人信息', route: '' },
    { icon: 'fa fa-key', text: '修改密码', route: '' }
  ])
});
