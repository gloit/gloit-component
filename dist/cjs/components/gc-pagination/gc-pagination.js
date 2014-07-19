"use strict";
var PaginationButton = require("./gc-button")["default"] || require("./gc-button");
var Pagination;

Pagination = Ember.CollectionView.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  classNameBindings: ['sizingClassName'],
  itemViewClass: PaginationButton,
  start: 1,
  current: 1,
  size: 9,
  total: 1,
  url: '',
  sizingClassName: (function() {
    if (this.get('sizing') === 'large') {
      return 'pagination-lg';
    }
    if (this.get('sizing') === 'small') {
      return 'pagination-sm';
    }
    return '';
  }).property('sizing'),
  prev: (function() {
    if (this.get('current') > 1) {
      return this.get('current') - 1;
    } else {
      return 1;
    }
  }).property('current'),
  next: (function() {
    if (this.get('current') < this.get('total')) {
      return this.get('current') + 1;
    } else {
      return this.get('total');
    }
  }).property('current', 'total'),
  end: (function() {
    if (this.get('start') + this.get('size') - 1 >= this.get('total')) {
      return this.get('total');
    } else {
      return this.get('start') + this.get('size') - 1;
    }
  }).property('start', 'total'),
  content: (function() {
    var content, _i, _ref, _ref1, _results;
    content = Ember.A();
    content.pushObject(Ember.Object.create({
      page: 1,
      text: '&laquo;'.htmlSafe()
    }));
    content.pushObject(Ember.Object.create({
      page: this.get('prev'),
      text: '&lsaquo;'.htmlSafe()
    }));
    (function() {
      _results = [];
      for (var _i = _ref = this.get('start'), _ref1 = this.get('end'); _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this).map((function(_this) {
      return function(i) {
        return content.pushObject(Ember.Object.create({
          page: i,
          text: i
        }));
      };
    })(this));
    content.pushObject(Ember.Object.create({
      page: this.get('next'),
      text: '&rsaquo;'.htmlSafe()
    }));
    content.pushObject(Ember.Object.create({
      page: this.get('total'),
      text: '&raquo;'.htmlSafe()
    }));
    return content;
  }).property('start', 'end', 'current')
});

exports["default"] = Pagination;