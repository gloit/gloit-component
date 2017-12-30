import Ember from 'ember';
export default Ember.Route.extend({
  breadCrumb: {
    title: '登录'
  },

  actions: {
    authenticate: function(identification, password) {
      swal('您输入的信息', Ember.String.fmt('用户名/邮箱: %@, 密码: %@', identification, password));
    }
  }
});
