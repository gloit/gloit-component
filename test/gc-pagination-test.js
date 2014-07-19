moduleForComponent('gc-pagination');

test('has a `go to first` button', function() {
  expect(1);

  pagination = this.subject();
  this.append();
  equal(pagination.$('li:first-of-type a').text(), '«');
});
