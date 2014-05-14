moduleForComponent('gl-login-form');

test('has default title "用户登录"', function() {
  expect(1);

  form = this.subject();
  this.append();
  equal(form.get('title'), '用户登录');
});

test('has an input which has a label named "用户名/邮箱"', function() {
  expect(1);

  form = this.subject();
  this.append();
  equal(form.$('label[for="identification"]').text(), '用户名/邮箱');
});
