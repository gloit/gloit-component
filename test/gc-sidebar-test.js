moduleForComponent('gc-sidebar');

test('the brand of the sidebar', function() {
  expect(4);

  sidebar = this.subject();

  ok(!Ember.isEmpty(this.$('.gc-brand')), 'exists');

  Ember.run(function() {
    sidebar.set('brand', { name: 'Brand Test' });
  });
  equal($.trim(this.$('.gc-brand logo a').text()), 'Brand Test', 'has a text brand');

  Ember.run(function() {
    sidebar.set('brand', { imageUrl: '/url/of/an/image' });
  });
  ok(Ember.isEmpty(sidebar.$('.gc-brand logo a').text()), 'does not have a text brand');
  equal(sidebar.$('.gc-brand img').attr('src'), '/url/of/an/image', 'has an image brand');
});
