moduleForComponent('gl-sidebar');

test('the brand of the sidebar', function() {
  expect(4);

  sidebar = this.subject();

  ok(!Ember.isEmpty(this.$('.gl-brand')), 'exists');

  Ember.run(function() {
    sidebar.set('brand', { name: 'Brand Test' });
  });
  equal($.trim(this.$('.gl-brand logo a').text()), 'Brand Test', 'has a text brand');

  Ember.run(function() {
    sidebar.set('brand', { imageUrl: '/url/of/an/image' });
  });
  ok(Ember.isEmpty(sidebar.$('.gl-brand logo a').text()), 'does not have a text brand');
  equal(sidebar.$('.gl-brand img').attr('src'), '/url/of/an/image', 'has an image brand');
});
