define("gloit-component/components/gc-datetime-picker",
  ["exports"],
  function(__exports__) {
    "use strict";
    var DatetimePicker;

    DatetimePicker = Ember.TextField.extend({
      resetable: true,
      format: 'yyyy-mm-dd hh:ii',
      autoclose: true,
      todayBtn: false,
      startDate: '1949-10-01',
      minuteStep: 10,
      minView: 0,
      maxView: 4,
      language: 'zh-CN',
      didInsertElement: function() {
        var options;
        options = {
          format: this.get('format'),
          autoclose: this.get('autoclose'),
          todayBtn: this.get('todayBtn'),
          startDate: this.get('startDate'),
          minuteStep: this.get('minuteStep'),
          minView: this.get('minView'),
          maxView: this.get('maxView'),
          language: this.get('language')
        };
        return this.$().datetimepicker(options);
      }
    });

    __exports__["default"] = DatetimePicker;
  });
define("gloit-component/components/gc-highcharts/gc-rate-gauge-chart",
  ["exports"],
  function(__exports__) {
    "use strict";
    var RateGaugeChart;

    RateGaugeChart = Ember.Component.extend({
      title: '',
      rate: 0,
      config: {
        chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        },
        title: {
          text: ''
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [[0, '#FFF'], [1, '#333']]
              },
              borderWidth: 0,
              outerRadius: '109%'
            }, {
              backgroundColor: {
                linearGradient: {
                  x1: 0,
                  y1: 0,
                  x2: 0,
                  y2: 1
                },
                stops: [[0, '#333'], [1, '#FFF']]
              },
              borderWidth: 1,
              outerRadius: '107%'
            }, {}, {
              backgroundColor: '#DDD',
              borderWidth: 0,
              outerRadius: '105%',
              innerRadius: '103%'
            }
          ]
        },
        yAxis: {
          min: 0,
          max: 200,
          minorTickInterval: 'auto',
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: 'inside',
          minorTickColor: '#666',
          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: 'inside',
          tickLength: 10,
          tickColor: '#666',
          labels: {
            step: 2,
            rotation: 'auto'
          },
          title: {
            text: '%'
          },
          plotBands: [
            {
              from: 0,
              to: 120,
              color: '#55BF3B'
            }, {
              from: 120,
              to: 160,
              color: '#DDDF0D'
            }, {
              from: 160,
              to: 200,
              color: '#DF5353'
            }
          ]
        },
        series: [
          {
            name: '使用率',
            data: [0],
            tooltip: {
              valueSuffix: ' %'
            }
          }
        ]
      },
      didInsertElement: function() {
        return Ember.run.scheduleOnce('afterRender', this, (function(_this) {
          return function() {
            var config;
            config = _this.get('config');
            config.chart.renderTo = _this.get('elementId');
            config.title.text = _this.get('title') || '';
            config.series[0].data[0] = _this.get('rate') || 0;
            return _this.set('chart', new Highcharts.Chart(config));
          };
        })(this));
      },
      onRateChanged: (function() {
        if (!Ember.isNone(this.get('rate'))) {
          return this.get('chart').series[0].points[0].update(this.get('rate'));
        }
      }).observes('rate')
    });

    __exports__["default"] = RateGaugeChart;
  });
define("gloit-component/components/gc-kind-editor",
  ["exports"],
  function(__exports__) {
    "use strict";
    var KindEditorComponent;

    KindEditorComponent = Ember.TextArea.extend({
      didInsertElement: function() {
        if (!Ember.isNone(KindEditor)) {
          return Ember.run.scheduleOnce('afterRender', this, 'createEditor');
        }
      },
      createEditor: function() {
        var afterChange, options, self;
        self = this;
        afterChange = function() {
          return self.set('value', this.html());
        };
        options = Ember.merge({
          afterChange: afterChange
        }, KindEditor.options);
        return KindEditor.create(this.$(), options);
      }
    });

    __exports__["default"] = KindEditorComponent;
  });
define("gloit-component/components/gc-login-form",
  ["exports"],
  function(__exports__) {
    "use strict";
    var LoginForm;

    LoginForm = Ember.Component.extend({
      classNames: ['gc-login-form'],
      title: '用户登录',
      copyright: '&copy; 2011-2014',
      version: 'v1.0.0',
      registerable: false,
      action: 'authenticate',
      titleHtmlSafe: (function() {
        return this.get('title').htmlSafe();
      }).property('title'),
      copyrightHtmlSafe: (function() {
        return this.get('copyright').htmlSafe();
      }).property('copyright'),
      didInsertElement: function() {
        return Ember.$('input#identification').focus();
      },
      actions: {
        login: function() {
          return this.sendAction('action');
        }
      }
    });

    __exports__["default"] = LoginForm;
  });
define("gloit-component/components/gc-main-toolbar",
  ["exports"],
  function(__exports__) {
    "use strict";
    var MainToolbar;

    MainToolbar = Ember.Component.extend({
      classNames: ['gc-main-toolbar'],
      parentItems: (function() {
        if (!Ember.isEmpty(this.get('items'))) {
          return this.get('items').slice(0, this.get('items.length') - 1);
        }
      }).property('items.@each'),
      activeItem: (function() {
        return this.get('items.lastObject');
      }).property('items.@each')
    });

    __exports__["default"] = MainToolbar;
  });
define("gloit-component/components/gc-pagination/gc-button",
  ["../../templates/gc-pagination/gc-button","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var PaginationButton;

    PaginationButton = Ember.Component.extend({
      tagName: 'li',
      layout: layout,
      classNameBindings: ['disabled:disabled', 'active:active'],
      currentBinding: 'parentView.current',
      disabled: (function() {
        var page;
        page = this.get('content.page');
        return page !== this.get('content.text') && page === this.get('current');
      }).property('current', 'content.{page,text}'),
      active: (function() {
        var page;
        page = this.get('content.page');
        return page === this.get('content.text') && page === this.get('current');
      }).property('current', 'content.{page,text}'),
      actions: {
        page: function(page) {
          return this.triggerAction({
            action: 'page',
            actionContext: page
          });
        }
      }
    });

    __exports__["default"] = PaginationButton;
  });
define("gloit-component/components/gc-pagination/gc-pagination",
  ["./gc-button","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var PaginationButton = __dependency1__["default"] || __dependency1__;
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

    __exports__["default"] = Pagination;
  });
define("gloit-component/components/gc-sidebar/gc-brand",
  ["../../templates/gc-sidebar/gc-brand","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Brand;

    Brand = Ember.Component.extend({
      classNames: ['gc-brand'],
      layout: layout,
      name: 'Brand',
      imageUrl: null,
      logo: (function() {
        if (this.get('imageUrl')) {
          return ("<img src='" + (this.get('imageUrl')) + "' />").htmlSafe();
        }
        return this.get('name');
      }).property('name', 'imageUrl'),
      sidebarExpandable: true
    });

    __exports__["default"] = Brand;
  });
define("gloit-component/components/gc-sidebar/gc-navigator",
  ["../../templates/gc-sidebar/gc-navigator","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Navigator;

    Navigator = Ember.Component.extend({
      classNames: ['gc-navigator'],
      layout: layout,
      menus: [],
      didInsertElement: function() {
        var height, triggersHeight;
        height = this.$().parent().height() - 60 - 90;
        this.$().height(height);
        triggersHeight = this.get('menus.length') * 50 + 30;
        return this.$('.menu-items').height(height - triggersHeight);
      },
      actions: {
        triggerMenu: function(menu) {
          return this.triggerAction({
            action: 'triggerMenu',
            actionContext: menu
          });
        }
      }
    });

    __exports__["default"] = Navigator;
  });
define("gloit-component/components/gc-sidebar/gc-sidebar",
  ["./gc-brand","./gc-navigator","./gc-Starter","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Brand = __dependency1__["default"] || __dependency1__;
    var Navigator = __dependency2__["default"] || __dependency2__;
    var Starter = __dependency3__["default"] || __dependency3__;
    var Sidebar;

    Sidebar = Ember.Component.extend({
      brandView: Brand,
      navigatorView: Navigator,
      starterView: Starter,
      classNames: ['gc-sidebar'],
      classNameBindings: ['expanded:gc-sidebar-expanded'],
      expanded: true,
      expandable: true,
      brand: {
        name: 'Brand',
        imageUrl: null
      },
      menus: [],
      starterItems: [],
      actions: {
        triggerMenu: function(menu) {
          return this.triggerAction({
            action: 'triggerMenu',
            actionContext: menu
          });
        }
      }
    });

    __exports__["default"] = Sidebar;
  });
define("gloit-component/components/gc-sidebar/gc-starter",
  ["../../templates/gc-sidebar/gc-starter","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Starter;

    Starter = Ember.Component.extend({
      layout: layout,
      classNames: ['gc-starter', 'dropdown'],
      items: []
    });

    __exports__["default"] = Starter;
  });
define("gloit-component/components/gc-sidelist/gc-item",
  ["../../templates/gc-sidelist/gc-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Item;

    Item = Ember.Component.extend({
      classNames: ['gc-sidelist-item'],
      layout: layout
    });

    __exports__["default"] = Item;
  });
define("gloit-component/components/gc-sidelist/gc-sidelist",
  ["./gc-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Item = __dependency1__["default"] || __dependency1__;
    var Sidelist;

    Sidelist = Ember.CollectionView.extend({
      classNames: ['gc-sidelist'],
      itemViewClass: Item,
      didInsertElement: function() {
        this.set('height', Ember.$('.gc-sidelist').parent().height());
        return this._super();
      }
    });

    __exports__["default"] = Sidelist;
  });
define("gloit-component/components/gc-table/gc-action-group",
  ["./gc-action","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var ActionGroup;

    ActionGroup = Ember.CollectionView.extend({
      classNames: ['gc-table-action-group'],
      itemViewClass: Action
    });

    __exports__["default"] = ActionGroup;
  });
define("gloit-component/components/gc-table/gc-action",
  ["../../templates/gc-table/gc-action","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Action;

    Action = Ember.Component.extend({
      tagName: 'a',
      layout: layout
    });

    __exports__["default"] = Action;
  });
define("gloit-component/components/gc-table/gc-body",
  ["./gc-row","./gc-multiple-selectable-row","./gc-single-selectable-row","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Row = __dependency1__["default"] || __dependency1__;
    var MultipleSelectableRow = __dependency2__["default"] || __dependency2__;
    var SingleSelectableRow = __dependency3__["default"] || __dependency3__;
    var Body;

    Body = Ember.CollectionView.extend({
      tagName: 'tbody',
      classNames: ['gc-table-body'],
      itemViewClass: (function() {
        if (!this.get('rowSelectable')) {
          return Row;
        }
        if (this.get('multiple')) {
          return MultipleSelectableRow;
        } else {
          return SingleSelectableRow;
        }
      }).property('rowSelectable', 'multiple'),
      indexed: false,
      multiple: false,
      rowSelectable: false,
      selection: null,
      columns: [],
      single: (function() {
        return !this.get('multiple') && this.get('rowSelectable');
      }).property('multiple', 'rowSelectable')
    });

    __exports__["default"] = Body;
  });
define("gloit-component/components/gc-table/gc-cell",
  ["../../mixins/style-bindings","../../templates/gc-table/gc-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Cell;

    Cell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gc-table-cell'],
      styleBindings: ['textAlign:text-align'],
      textAlignBinding: 'column.textAlign',
      layout: layout,
      init: function() {
        this.valuePathDidChange();
        return this._super();
      },
      valuePathDidChange: (function() {
        var formatValue, valuePath;
        formatValue = this.get('column.formatCellContent');
        valuePath = 'row.' + this.get('column.cellContentPath');
        if (!valuePath) {
          return;
        }
        return Ember.defineProperty(this, 'value', Ember.computed(function() {
          if (formatValue) {
            return formatValue.call(this, this.get(valuePath));
          } else {
            return this.get(valuePath);
          }
        }).property(valuePath));
      }).observes('row', 'column.cellContentPath')
    });

    __exports__["default"] = Cell;
  });
define("gloit-component/components/gc-table/gc-column-model",
  ["exports"],
  function(__exports__) {
    "use strict";
    var ColumnModel;

    ColumnModel = Ember.Object.extend({
      title: void 0,
      width: 100,
      textAlign: 'left',
      cellContentPath: void 0,
      formatCellContent: void 0
    });

    __exports__["default"] = ColumnModel;
  });
define("gloit-component/components/gc-table/gc-head-cell",
  ["../../mixins/style-bindings","../../templates/gc-table/gc-head-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var HeadCell;

    HeadCell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gc-table-head-cell'],
      styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
      minWidthBinding: 'content.width',
      textAlignBinding: 'content.textAlign',
      layout: layout
    });

    __exports__["default"] = HeadCell;
  });
define("gloit-component/components/gc-table/gc-head-row",
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
define("gloit-component/components/gc-table/gc-head",
  ["./gc-head-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var HeadRow = __dependency1__["default"] || __dependency1__;
    var Head;

    Head = Ember.CollectionView.extend({
      tagName: 'thead',
      classNames: ['gc-table-head'],
      itemViewClass: HeadRow,
      hasIndexCell: false,
      hasSelectAllCell: false
    });

    __exports__["default"] = Head;
  });
define("gloit-component/components/gc-table/gc-multiple-selectable-row",
  ["./gc-selectable-row","../../templates/gc-table/gc-multiple-selectable-row","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var SelectableRow = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var MultipleSelectableRow;

    MultipleSelectableRow = SelectableRow.extend({
      layout: layout,
      multipleBinding: 'parentView.multiple'
    });

    __exports__["default"] = MultipleSelectableRow;
  });
define("gloit-component/components/gc-table/gc-row",
  ["./gc-cell","../../templates/gc-table/gc-row","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Cell = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Row;

    Row = Ember.Component.extend({
      cellView: Cell,
      tagName: 'tr',
      layout: layout,
      classNames: ['gc-table-row'],
      classNameBindings: ['selected:info'],
      indexedBinding: 'parentView.indexed',
      columnsBinding: 'parentView.columns',
      index: (function() {
        return this.get('contentIndex') + 1;
      }).property('contentIndex')
    });

    __exports__["default"] = Row;
  });
define("gloit-component/components/gc-table/gc-select-all-cell",
  ["./gc-head-cell","../../templates/gc-table/gc-select-all-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HeadCell = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var SelectAllCell;

    SelectAllCell = HeadCell.extend({
      layout: layout,
      content: Ember.Object.create({
        width: 30,
        textAlign: 'center'
      }),
      checkedDidChange: (function() {
        var action;
        action = this.get('checked') ? 'selectAll' : 'deselectAll';
        return this.triggerAction({
          action: action
        });
      }).observes('checked')
    });

    __exports__["default"] = SelectAllCell;
  });
define("gloit-component/components/gc-table/gc-selectable-row",
  ["./gc-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Row = __dependency1__["default"] || __dependency1__;
    var SelectableRow;

    SelectableRow = Row.extend({
      selectionBinding: 'parentView.selection',
      selected: (function(key, value) {
        if (value != null) {
          if (value) {
            this.get('selection').add(this.get('content'));
          } else {
            this.get('selection').remove(this.get('content'));
          }
          return value;
        } else {
          return this.get('selection').contains(this.get('content'));
        }
      }).property('selection.length')
    });

    __exports__["default"] = SelectableRow;
  });
define("gloit-component/components/gc-table/gc-single-selectable-row",
  ["./gc-selectable-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var SelectableRow = __dependency1__["default"] || __dependency1__;
    var SingleSelectableRow;

    SingleSelectableRow = SelectableRow.extend({
      click: function() {
        this.get('selection').clear();
        this.get('selection').add(this.get('content'));
        return this.triggerAction({
          action: 'selectRow',
          actionContext: this
        });
      }
    });

    __exports__["default"] = SingleSelectableRow;
  });
define("gloit-component/components/gc-table/gc-table",
  ["./gc-action","./gc-topbar","./gc-head","./gc-body","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var Topbar = __dependency2__["default"] || __dependency2__;
    var Head = __dependency3__["default"] || __dependency3__;
    var Body = __dependency4__["default"] || __dependency4__;
    var Table;

    Table = Ember.Component.extend({
      topbarView: Topbar,
      headView: Head,
      bodyView: Body,
      init: function() {
        this._super();
        if (Ember.isNone(this.get('selection'))) {
          return this.set('selection', new Ember.Set());
        }
      },
      tagName: 'table',
      classNames: ['table', 'table-bordered', 'table-hover', 'gc-table'],
      classNameBindings: ['clickable:gc-table-clickable'],
      multiple: false,
      selection: null,
      indexed: false,
      rowSelectable: false,
      topActions: [],
      hasTopActions: Ember.computed.notEmpty('topActions'),
      clickable: (function() {
        return !this.get('multiple') && this.get('rowSelectable');
      }).property('multiple', 'rowSelectable'),
      headContent: (function() {
        var headContent;
        headContent = Ember.A();
        headContent.pushObject(this.get('columns') || []);
        return headContent;
      }).property('columns.@each', 'indexed'),
      click: function(evt) {
        var view;
        view = Ember.View.views[evt.target.id];
        if (this._clickFromAction(view)) {
          return this.triggerAction({
            action: view.get('content.name')
          });
        }
      },
      _clickFromAction: function(target) {
        return target && target.constructor === Action;
      },
      actions: {
        selectRow: function(row) {
          this.get('selection').clear();
          this.get('selection').add(row.get('content'));
          return this.triggerAction({
            action: 'select',
            actionContext: row.get('content')
          });
        },
        selectAll: function() {
          return this.get('selection').addEach(this.get('content'));
        },
        deselectAll: function() {
          return this.get('selection').clear();
        }
      }
    });

    __exports__["default"] = Table;
  });
define("gloit-component/components/gc-table/gc-topbar",
  ["./gc-action-group","../../templates/gc-table/gc-topbar","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var ActionGroup = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Topbar;

    Topbar = Ember.Component.extend({
      actionGroupView: ActionGroup,
      tagName: 'caption',
      classNames: ['gc-table-top-bar'],
      layout: layout,
      barActions: [],
      leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
      rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
    });

    __exports__["default"] = Topbar;
  });
define("gloit-component",
  ["./components/gc-datetime-picker","./components/gc-login-form","./templates/gc-login-form","./components/gc-main-toolbar","./templates/gc-main-toolbar","./components/gc-pagination/gc-pagination","./components/gc-sidebar/gc-sidebar","./templates/gc-sidebar","./components/gc-table/gc-column-model","./components/gc-table/gc-table","./templates/gc-table","./components/gc-sidelist/gc-sidelist","./components/gc-highcharts/gc-rate-gauge-chart","./components/gc-kind-editor","./initializers/gc-initializer","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __dependency14__, __dependency15__, __exports__) {
    "use strict";
    var DatetimePickerComponent = __dependency1__["default"] || __dependency1__;

    var LoginFormComponent = __dependency2__["default"] || __dependency2__;
    var LoginFormTemplate = __dependency3__["default"] || __dependency3__;

    var MainToolbarComponent = __dependency4__["default"] || __dependency4__;
    var MainToolbarTemplate = __dependency5__["default"] || __dependency5__;

    var PaginationComponent = __dependency6__["default"] || __dependency6__;

    var SidebarComponent = __dependency7__["default"] || __dependency7__;
    var SidebarTemplate = __dependency8__["default"] || __dependency8__;

    var TableColumnModel = __dependency9__["default"] || __dependency9__;
    var TableComponent = __dependency10__["default"] || __dependency10__;
    var TableTemplate = __dependency11__["default"] || __dependency11__;

    var SidelistComponent = __dependency12__["default"] || __dependency12__;

    var RateGaugeChartComponent = __dependency13__["default"] || __dependency13__;

    var KindEditorComponent = __dependency14__["default"] || __dependency14__;

    var Initializer = __dependency15__["default"] || __dependency15__;

    Ember.Application.initializer(Initializer);

    Ember.libraries.register('GloitComponent', '0.3.0');

    Ember.View.reopen({
      init: function() {
        this._super();

        // bind attributes beginning with 'data-'
        Ember.keys(this).forEach(function(key) {
          if(key.substr(0, 5) == 'data-') {
            this.get('attributeBindings').pushObject(key);
          }
        });
      }
    });

    __exports__.Initializer = Initializer;
    __exports__.DatetimePickerComponent = DatetimePickerComponent;
    __exports__.LoginFormComponent = LoginFormComponent;
    __exports__.LoginFormTemplate = LoginFormTemplate;
    __exports__.MainToolbarComponent = MainToolbarComponent;
    __exports__.PaginationComponent = PaginationComponent;
    __exports__.SidebarTemplate = SidebarTemplate;
    __exports__.SidebarComponent = SidebarComponent;
    __exports__.TableColumnModel = TableColumnModel;
    __exports__.TableTemplate = TableTemplate;
    __exports__.TableComponent = TableComponent;
    __exports__.SidelistComponent = SidelistComponent;
    __exports__.RateGaugeChartComponent = RateGaugeChartComponent;
    __exports__.KindEditorComponent = KindEditorComponent;
  });
define("gloit-component/initializers/gc-initializer",
  ["../components/gc-datetime-picker","../components/gc-login-form","../templates/gc-login-form","../components/gc-main-toolbar","../templates/gc-main-toolbar","../components/gc-pagination/gc-pagination","../components/gc-sidebar/gc-sidebar","../templates/gc-sidebar","../components/gc-table/gc-table","../templates/gc-table","../components/gc-sidelist/gc-sidelist","../components/gc-highcharts/gc-rate-gauge-chart","../components/gc-kind-editor","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __dependency12__, __dependency13__, __exports__) {
    "use strict";
    var DatetimePickerComponent = __dependency1__["default"] || __dependency1__;

    var LoginFormComponent = __dependency2__["default"] || __dependency2__;
    var LoginFormTemplate = __dependency3__["default"] || __dependency3__;

    var MainToolbarComponent = __dependency4__["default"] || __dependency4__;
    var MainToolbarTemplate = __dependency5__["default"] || __dependency5__;

    var PaginationComponent = __dependency6__["default"] || __dependency6__;

    var SidebarComponent = __dependency7__["default"] || __dependency7__;
    var SidebarTemplate = __dependency8__["default"] || __dependency8__;

    var TableComponent = __dependency9__["default"] || __dependency9__;
    var TableTemplate = __dependency10__["default"] || __dependency10__;

    var SidelistComponent = __dependency11__["default"] || __dependency11__;

    var RateGaugeChartComponent = __dependency12__["default"] || __dependency12__;

    var KindEditorComponent = __dependency13__["default"] || __dependency13__;

    __exports__["default"] = {
      name: 'gloit-component',

      initialize: function(container) {
        container.register('component:gc-datetime-picker', DatetimePickerComponent);

        container.register('template:components/gc-login-form', LoginFormTemplate);
        container.register('component:gc-login-form', LoginFormComponent);

        container.register('template:components/gc-main-toolbar', MainToolbarTemplate);
        container.register('component:gc-main-toolbar', MainToolbarComponent);

        container.register('component:gc-pagination', PaginationComponent);

        container.register('template:components/gc-sidebar', SidebarTemplate);
        container.register('component:gc-sidebar', SidebarComponent);

        container.register('template:components/gc-table', TableTemplate);
        container.register('component:gc-table', TableComponent);

        container.register('component:gc-sidelist', SidelistComponent);

        container.register('component:gc-rate-gauge-chart', RateGaugeChartComponent);

        container.register('component:gc-kind-editor', KindEditorComponent);
      }
    };
  });
define("gloit-component/mixins/style-bindings",
  ["exports"],
  function(__exports__) {
    "use strict";
    var styleBindings;

    styleBindings = Ember.Mixin.create({
      concatenatedProperties: ["styleBindings"],
      attributeBindings: ["style"],
      unitType: "px",
      createStyleString: function(styleName, property) {
        var value;
        value = this.get(property);
        if (value === void 0) {
          return;
        }
        if (Ember.typeOf(value) === "number") {
          value = value + this.get("unitType");
        }
        return "" + styleName + ":" + value + ";";
      },
      applyStyleBindings: function() {
        var lookup, properties, styleComputed, styles, _this;
        _this = this;
        styleBindings = this.styleBindings;
        if (!styleBindings) {
          return;
        }
        lookup = {};
        styleBindings.forEach(function(binding) {
          var property, style, tmp;
          tmp = binding.split(":");
          property = tmp[0];
          style = tmp[1];
          return lookup[style || property] = property;
        });
        styles = Ember.keys(lookup);
        properties = styles.map(function(style) {
          return lookup[style];
        });
        styleComputed = Ember.computed(function() {
          var styleString, styleTokens;
          styleTokens = styles.map(function(style) {
            return _this.createStyleString(style, lookup[style]);
          });
          styleString = styleTokens.join("");
          if (styleString.length !== 0) {
            return styleString;
          }
        });
        styleComputed.property.apply(styleComputed, properties);
        return Ember.defineProperty(this, "style", styleComputed);
      },
      init: function() {
        this.applyStyleBindings();
        return this._super();
      }
    });

    __exports__["default"] = styleBindings;
  });
define("gloit-component/templates/gc-login-form",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("btn btn-success pull-right")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "registrations.new", options) : helperMissing.call(depth0, "link-to", "registrations.new", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }
    function program2(depth0,data) {
      
      
      data.buffer.push("\n          注册\n        ");
      }

    function program4(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <li>\n      <a target=\"_blank\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n        <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("icon")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("/>\n        <div>");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n      </a>\n    </li>\n    ");
      return buffer;
      }

      data.buffer.push("<section class=\"main\">\n  <form class=\"login\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
        'on': ("submit")
      },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    <h1>\n      <p class=\"version\">");
      stack1 = helpers._triageMustache.call(depth0, "version", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n      <p class=\"title\">");
      stack1 = helpers._triageMustache.call(depth0, "titleHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    </h1>\n    <p class=\"float\">\n      <label for=\"identification\"><i class=\"fa fa-user\"></i>用户名/邮箱：</label>\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'id': ("identification"),
        'type': ("text"),
        'value': ("identification"),
        'placeholder': ("请输入您的用户名/邮箱...")
      },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </p>\n    <p class=\"float\">\n      <label for=\"password\"><i class=\"fa fa-key\"></i>密码：</label>\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'id': ("password"),
        'type': ("password"),
        'value': ("password"),
        'placeholder': ("请输入您的密码..."),
        'class': ("showpassword")
      },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    <p class=\"clearfix\"></p>\n    <p class=\"clearfix\">\n      ");
      stack1 = helpers['if'].call(depth0, "registerable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      <button type=\"submit\" class=\"btn btn-warning pull-right\">登录</button>\n    </p>\n    <p>");
      stack1 = helpers._triageMustache.call(depth0, "copyrightHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  </form>\n</section>\n<div class=\"browsers\">\n  <ul>\n    ");
      stack1 = helpers.each.call(depth0, "supportedBrowers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </ul>\n</div>\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-main-toolbar",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <li>\n      ");
      stack1 = helpers['if'].call(depth0, "model", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </li>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "route", "model.id", options) : helperMissing.call(depth0, "link-to", "route", "model.id", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n          ");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        ");
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }

      data.buffer.push("<ol class=\"breadcrumb pull-left\">\n  ");
      stack1 = helpers.each.call(depth0, "view.parentItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  <li class=\"active\">");
      stack1 = helpers._triageMustache.call(depth0, "view.activeItem.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n</ol>\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-pagination/gc-button",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "page", "content.page", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "content.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a>\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-sidebar",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression(helpers.view.call(depth0, "brandView", {hash:{
        'name': ("brand.name"),
        'imageUrl': ("brand.imageUrl"),
        'sidebarExpandable': ("expandable")
      },hashTypes:{'name': "ID",'imageUrl': "ID",'sidebarExpandable': "ID"},hashContexts:{'name': depth0,'imageUrl': depth0,'sidebarExpandable': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "navigatorView", {hash:{
        'menus': ("menus")
      },hashTypes:{'menus': "ID"},hashContexts:{'menus': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "starterView", {hash:{
        'items': ("starterItems")
      },hashTypes:{'items': "ID"},hashContexts:{'items': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-sidebar/gc-brand",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  <div class=\"switch-button\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggle", {hash:{
        'target': ("view")
      },hashTypes:{'target': "STRING"},hashContexts:{'target': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("></div>\n");
      return buffer;
      }

      data.buffer.push("<div class=\"logo\">\n  <a href='/'>");
      stack1 = helpers._triageMustache.call(depth0, "logo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a>\n</div>\n");
      stack1 = helpers['if'].call(depth0, "sidebarExpandable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-sidebar/gc-navigator",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <ul ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'id': ("text"),
        'class': ("active")
      },hashTypes:{'id': "ID",'class': "STRING"},hashContexts:{'id': depth0,'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n      ");
      stack1 = helpers.each.call(depth0, "items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </ul>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        <li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'title': ("text")
      },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n          ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        </li>\n      ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n            <div>\n              <div class=\"title pull-left\">");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n              ");
      stack1 = helpers['if'].call(depth0, "iconUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n            </div>\n          ");
      return buffer;
      }
    function program4(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n                <img class=\"pull-right\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("iconUrl")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n              ");
      return buffer;
      }

    function program6(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n                <i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("icon :pull-right")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"pull-right\"></i>\n              ");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("active"),
        'title': ("text")
      },hashTypes:{'class': "STRING",'title': "ID"},hashContexts:{'class': depth0,'title': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" data-placement=\"right\" data-toggle=\"tooltip\">\n      <a href=\"#");
      data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\" data-toggle=\"tab\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "triggerMenu", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">\n        ");
      stack1 = helpers['if'].call(depth0, "iconUrl", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        <div class=\"title\">");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n      </a>\n    </li>\n  ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n          <img class=\"menu-trigger\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("iconUrl")
      },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n        ");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n          <i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("icon")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"pull-right\"></i>\n        ");
      return buffer;
      }

      data.buffer.push("<div class=\"menu-items\">\n  ");
      stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n<ul class=\"menu-triggers\">\n  ");
      stack1 = helpers.each.call(depth0, "view.menus", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-sidebar/gc-starter",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <li>\n      ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "route", options) : helperMissing.call(depth0, "link-to", "route", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </li>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n        <i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("icon")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></i>\n        ");
      stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }

      data.buffer.push("<a class=\"home dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">\n  <span class=\"fa-stack fa-2x\">\n    <i class=\"fa fa-circle fa-stack-2x\"></i>\n    <i class=\"fa fa-th-large fa-stack-1x fa-inverse\"></i>\n  </span>\n</a>\n<ul class=\"dropdown-menu\">\n  ");
      stack1 = helpers.each.call(depth0, "view.items", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</ul>\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-sidelist/gc-item",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("view.icon")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></i>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "view.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "view.route", options) : helperMissing.call(depth0, "link-to", "view.route", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "topbarView", {hash:{
        'barActions': ("topActions")
      },hashTypes:{'barActions': "ID"},hashContexts:{'barActions': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "hasTopActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "headView", {hash:{
        'content': ("headContent"),
        'hasIndexCell': ("indexed"),
        'hasSelectAllCell': ("multiple")
      },hashTypes:{'content': "ID",'hasIndexCell': "ID",'hasSelectAllCell': "ID"},hashContexts:{'content': depth0,'hasIndexCell': depth0,'hasSelectAllCell': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "bodyView", {hash:{
        'columns': ("columns"),
        'content': ("content"),
        'indexed': ("indexed"),
        'rowSelectable': ("rowSelectable"),
        'multiple': ("multiple"),
        'selection': ("selection")
      },hashTypes:{'columns': "ID",'content': "ID",'indexed': "ID",'rowSelectable': "ID",'multiple': "ID",'selection': "ID"},hashContexts:{'columns': depth0,'content': depth0,'indexed': depth0,'rowSelectable': depth0,'multiple': depth0,'selection': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-action",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<i ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("content.icon")
      },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></i> ");
      stack1 = helpers._triageMustache.call(depth0, "content.text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-cell",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-head-cell",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "content.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-multiple-selectable-row",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n  <td class='selection-cell'>");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("checkbox"),
        'checked': ("selected")
      },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("</td>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <td class='index'>");
      stack1 = helpers._triageMustache.call(depth0, "index", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</td>\n");
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.cellView", {hash:{
        'width': ("width"),
        'row': ("view.content"),
        'column': ("")
      },hashTypes:{'width': "ID",'row': "ID",'column': "ID"},hashContexts:{'width': depth0,'row': depth0,'column': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "multiple", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers['if'].call(depth0, "indexed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers.each.call(depth0, "columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-row",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <td class='index'>");
      stack1 = helpers._triageMustache.call(depth0, "index", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</td>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.cellView", {hash:{
        'width': ("width"),
        'row': ("view.content"),
        'column': ("")
      },hashTypes:{'width': "ID",'row': "ID",'column': "ID"},hashContexts:{'width': depth0,'row': depth0,'column': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "indexed", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      stack1 = helpers.each.call(depth0, "columns", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-select-all-cell",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'type': ("checkbox"),
        'checked': ("checked")
      },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("gloit-component/templates/gc-table/gc-topbar",
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"] || __dependency1__;
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression(helpers.view.call(depth0, "actionGroupView", {hash:{
        'class': ("pull-left"),
        'content': ("leftActions")
      },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "actionGroupView", {hash:{
        'class': ("pull-right"),
        'content': ("rightActions")
      },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n");
      return buffer;
      
    });
  });