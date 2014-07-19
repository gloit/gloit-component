define(
  ["./gc-head-cell","./gc-select-all-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HeadCell = __dependency1__["default"] || __dependency1__;
    var SelectAllCell = __dependency2__["default"] || __dependency2__;
    var HeadRow;

    HeadRow = Ember.CollectionView.extend({
      tagName: 'tr',
      classNames: ['gc-table-head-row'],
      itemViewClass: HeadCell,
      hasIndexCellBinding: 'parentView.hasIndexCell',
      hasSelectAllCellBinding: 'parentView.hasSelectAllCell',
      didInsertElement: function() {
        if (this.get('hasIndexCell')) {
          this._createIndexCell();
        }
        if (this.get('hasSelectAllCell')) {
          return this._createSelectAllCell();
        }
      },
      _createIndexCell: function() {
        return this.unshiftObject(HeadCell.create({
          content: Ember.Object.create({
            width: 30,
            textAlign: 'center',
            title: '#'
          })
        }));
      },
      _createSelectAllCell: function() {
        return this.unshiftObject(SelectAllCell.create());
      }
    });

    __exports__["default"] = HeadRow;
  });