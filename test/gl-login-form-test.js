moduleForComponent('gl-login-form');

test('has default title "Sign in"', function() {
  expect(1);

  form = this.subject();
  this.append();
  equal(form.get('title'), 'Sign in');
});
