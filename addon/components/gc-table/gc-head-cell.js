import Ember from 'ember';

import styleBindings from '../../mixins/style-bindings';

export default Ember.Component.extend(styleBindings, {
  tagName: 'td',
  classNames: ['gc-table-head-cell'],
  styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
  minWidthBinding: 'content.width',
  textAlignBinding: 'content.textAlign',
  layoutName: 'components/gc-table/gc-head-cell'
});
