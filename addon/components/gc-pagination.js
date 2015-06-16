import Ember from 'ember';
import PaginationButton from './gc-pagination/gc-button';

export default Ember.CollectionView.extend({
  tagName: 'ul',

  classNames: ['pagination'],
  classNameBindings: ['sizingClassName'],

  itemViewClass: PaginationButton,

  start: 1,
  current: 1,
  size: 9,
  total: 1,
  url: '',

  sizingClassName: Ember.computed('sizing', {
    get: function() {
      if (this.get('sizing') === 'large') {
        return 'pagination-lg';
      }

      if (this.get('sizing') === 'small') {
        return 'pagination-sm';
      }

      return '';
    }
  }),

  prev: Ember.computed('current', {
    get: function() {
      return this.get('current') > 1 ? this.get('current') - 1 : 1;
    }
  }),

  next: Ember.computed('current', 'total', {
    get: function() {
      return this.get('current') < this.get('total') ? this.get('current') + 1 : this.get('total');
    }
  }),

  end: Ember.computed('start', 'total', {
    get: function() {
      return this.get('start') + this.get('size') - 1 >= this.get('total') ? this.get('total') : this.get('start') + this.get('size') - 1;
    }
  }),

  content: Ember.computed('start', 'end', 'current', {
    get: function() {
      var content = Ember.A();
      content.pushObject(Ember.Object.create({ page: 1, text: Ember.String.htmlSafe('&laquo;') }));
      content.pushObject(Ember.Object.create({ page: this.get('prev'), text: Ember.String.htmlSafe('&lsaquo;') }));

      for(var i = this.get('start'); i <= this.get('end'); i++) {
        content.pushObject(Ember.Object.create({ page: i, text: i }));
      }

      content.pushObject(Ember.Object.create({ page: this.get('next'), text: Ember.String.htmlSafe('&rsaquo;') }));
      content.pushObject(Ember.Object.create({ page: this.get('total'), text: Ember.String.htmlSafe('&raquo;') }));

      return content;
    }
  })

});
