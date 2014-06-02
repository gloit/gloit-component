define("gloit/components/gl-datetime-picker",
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
define("gloit/components/gl-login-form",
  ["exports"],
  function(__exports__) {
    "use strict";
    var LoginForm;

    LoginForm = Ember.Component.extend({
      classNames: ['gl-login-form'],
      title: '用户登录',
      copyright: '&copy; 2011-2014',
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
define("gloit/components/gl-main-toolbar",
  ["exports"],
  function(__exports__) {
    "use strict";
    var MainToolbar;

    MainToolbar = Ember.Component.extend({
      classNames: ['gl-main-toolbar'],
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
define("gloit/components/gl-pagination/gl-button",
  ["../../templates/gl-pagination/gl-button","exports"],
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
      }).property('current', 'content.{page, text}'),
      active: (function() {
        var page;
        page = this.get('content.page');
        return page === this.get('content.text') && page === this.get('current');
      }).property('current', 'content.{page, text}'),
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
define("gloit/components/gl-pagination/gl-pagination",
  ["./gl-button","exports"],
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
define("gloit/components/gl-select2",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Select2;

    Select2 = Ember.Select.extend({
      classNames: ['gl-select2'],
      placeholder: '请选择...',
      allowClear: true,
      closeOnSelect: true,
      minimumInputLength: 0,
      maximumSelectionSize: 0,
      selectedDidChange: (function() {
        return this.$().select2('val', this.$().val());
      }).observes('selection.@each'),
      didInsertElement: function() {
        return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
      },
      processChildElements: function() {
        var options;
        options = {};
        options.placeholder = this.get('prompt') || this.get('placeholder');
        options.allowClear = this.get('allowClear');
        options.closeOnSelect = this.get('closeOnSelect');
        options.minimumInputLength = this.get('minimumInputLength');
        options.maximumSelectionSize = this.get('maximumSelectionSize');
        return this.$().select2(options);
      },
      willDestroyElement: function() {
        return this.$().select2('destroy');
      }
    });

    __exports__["default"] = Select2;
  });
define("gloit/components/gl-sidebar/gl-brand",
  ["../../templates/gl-sidebar/gl-brand","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Brand;

    Brand = Ember.Component.extend({
      classNames: ['gl-brand'],
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
define("gloit/components/gl-sidebar/gl-navigator",
  ["../../templates/gl-sidebar/gl-navigator","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Navigator;

    Navigator = Ember.Component.extend({
      classNames: ['gl-navigator'],
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
define("gloit/components/gl-sidebar/gl-sidebar",
  ["./gl-brand","./gl-navigator","./gl-Starter","exports"],
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
      classNames: ['gl-sidebar'],
      classNameBindings: ['expanded:gl-sidebar-expanded'],
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
define("gloit/components/gl-sidebar/gl-starter",
  ["../../templates/gl-sidebar/gl-starter","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var layout = __dependency1__["default"] || __dependency1__;
    var Starter;

    Starter = Ember.Component.extend({
      layout: layout,
      classNames: ['gl-starter', 'dropdown'],
      items: []
    });

    __exports__["default"] = Starter;
  });
define("gloit/components/gl-sidelist/gl-item",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Item;

    Item = Ember.ListItemView.extend({
      classNames: ['gl-sidelist-item']
    });

    __exports__["default"] = Item;
  });
define("gloit/components/gl-sidelist/gl-sidelist",
  ["./gl-item","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Item = __dependency1__["default"] || __dependency1__;
    var Sidelist;

    Sidelist = Ember.ListView.extend({
      classNames: ['gl-sidelist'],
      itemViewClass: Item,
      didInsertElement: function() {
        this.set('height', Ember.$('.gl-sidelist').parent().height());
        return this._super();
      }
    });

    __exports__["default"] = Sidelist;
  });
define("gloit/components/gl-table/gl-action-group",
  ["./gl-action","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var ActionGroup;

    ActionGroup = Ember.CollectionView.extend({
      classNames: ['gl-table-action-group'],
      itemViewClass: Action
    });

    __exports__["default"] = ActionGroup;
  });
define("gloit/components/gl-table/gl-action",
  ["../../templates/gl-table/gl-action","exports"],
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
define("gloit/components/gl-table/gl-body",
  ["./gl-row","./gl-multiple-selectable-row","./gl-single-selectable-row","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __exports__) {
    "use strict";
    var Row = __dependency1__["default"] || __dependency1__;
    var MultipleSelectableRow = __dependency2__["default"] || __dependency2__;
    var SingleSelectableRow = __dependency3__["default"] || __dependency3__;
    var Body;

    Body = Ember.CollectionView.extend({
      tagName: 'tbody',
      classNames: ['gl-table-body'],
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
define("gloit/components/gl-table/gl-cell",
  ["../../mixins/style-bindings","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var Cell;

    Cell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gl-table-cell'],
      styleBindings: ['textAlign:text-align'],
      textAlignBinding: 'column.textAlign',
      defaultTemplate: function(context, options) {
        options = {
          data: options.data,
          hash: {}
        };
        return Ember.Handlebars.helpers.bind.call(context, "view.value", options);
      },
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
define("gloit/components/gl-table/gl-column-model",
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
define("gloit/components/gl-table/gl-head-cell",
  ["../../mixins/style-bindings","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var styleBindings = __dependency1__["default"] || __dependency1__;
    var HeadCell;

    HeadCell = Ember.Component.extend(styleBindings, {
      tagName: 'td',
      classNames: ['gl-table-head-cell'],
      styleBindings: ['minWidth:min-width', 'textAlign:text-align'],
      minWidthBinding: 'content.width',
      textAlignBinding: 'content.textAlign',
      defaultTemplate: function(context, options) {
        options = {
          data: options.data,
          hash: {}
        };
        return Ember.Handlebars.helpers.bind.call(context, "view.content.title", options);
      }
    });

    __exports__["default"] = HeadCell;
  });
define("gloit/components/gl-table/gl-head-row",
  ["./gl-head-cell","./gl-select-all-cell","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var HeadCell = __dependency1__["default"] || __dependency1__;
    var SelectAllCell = __dependency2__["default"] || __dependency2__;
    var HeadRow;

    HeadRow = Ember.CollectionView.extend({
      tagName: 'tr',
      classNames: ['gl-table-head-row'],
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
define("gloit/components/gl-table/gl-head",
  ["./gl-head-row","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var HeadRow = __dependency1__["default"] || __dependency1__;
    var Head;

    Head = Ember.CollectionView.extend({
      tagName: 'thead',
      classNames: ['gl-table-head'],
      itemViewClass: HeadRow,
      hasIndexCell: false,
      hasSelectAllCell: false
    });

    __exports__["default"] = Head;
  });
define("gloit/components/gl-table/gl-multiple-selectable-row",
  ["./gl-selectable-row","../../templates/gl-table/gl-multiple-selectable-row","exports"],
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
define("gloit/components/gl-table/gl-row",
  ["./gl-cell","../../templates/gl-table/gl-row","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Cell = __dependency1__["default"] || __dependency1__;
    var layout = __dependency2__["default"] || __dependency2__;
    var Row;

    Row = Ember.Component.extend({
      cellView: Cell,
      tagName: 'tr',
      layout: layout,
      classNames: ['gl-table-row'],
      classNameBindings: ['selected:info'],
      indexedBinding: 'parentView.indexed',
      columnsBinding: 'parentView.columns',
      index: (function() {
        return this.get('contentIndex') + 1;
      }).property('contentIndex')
    });

    __exports__["default"] = Row;
  });
define("gloit/components/gl-table/gl-select-all-cell",
  ["./gl-head-cell","../../templates/gl-table/gl-select-all-cell","exports"],
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
define("gloit/components/gl-table/gl-selectable-row",
  ["./gl-row","exports"],
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
define("gloit/components/gl-table/gl-single-selectable-row",
  ["./gl-selectable-row","exports"],
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
define("gloit/components/gl-table/gl-table",
  ["./gl-action","./gl-action-group","./gl-topbar","./gl-head","./gl-body","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Action = __dependency1__["default"] || __dependency1__;
    var ActionGroup = __dependency2__["default"] || __dependency2__;
    var Topbar = __dependency3__["default"] || __dependency3__;
    var Head = __dependency4__["default"] || __dependency4__;
    var Body = __dependency5__["default"] || __dependency5__;
    var Table;

    Table = Ember.Component.extend({
      topbarView: Topbar,
      actionGroupView: ActionGroup,
      headView: Head,
      bodyView: Body,
      init: function() {
        this._super();
        if (Ember.isNone(this.get('selection'))) {
          return this.set('selection', new Ember.Set());
        }
      },
      tagName: 'table',
      classNames: ['table', 'table-bordered', 'table-hover', 'gl-table'],
      classNameBindings: ['clickable:table-clickable'],
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
define("gloit/components/gl-table/gl-topbar",
  ["exports"],
  function(__exports__) {
    "use strict";
    var Topbar;

    Topbar = Ember.Component.extend({
      tagName: 'caption',
      classNames: ['gl-table-top-bar'],
      barActions: [],
      leftActions: Ember.computed.filterBy('barActions', 'position', 'left'),
      rightActions: Ember.computed.filterBy('barActions', 'position', 'right')
    });

    __exports__["default"] = Topbar;
  });
define("gloit/components/gl-tagging-select2",
  ["exports"],
  function(__exports__) {
    "use strict";
    var TaggingSelect2;

    TaggingSelect2 = Ember.TextField.extend({
      classNames: ['gl-tagging-select2'],
      tags: [],
      placeholder: '请选择...',
      allowClear: true,
      closeOnSelect: true,
      minimumInputLength: 0,
      maximumSelectionSize: 0,
      tokenSeparators: [",", " ", ";", "，", "；"],
      didInsertElement: function() {
        return Ember.run.scheduleOnce('afterRender', this, 'processChildElements');
      },
      processChildElements: function() {
        var options;
        options = {
          placeholder: this.get('placeholder'),
          allowClear: this.get('allowClear'),
          closeOnSelect: this.get('closeOnSelect'),
          tags: this.get('tags') || [],
          tokenSeparators: this.get('tokenSeparators'),
          minimumInputLength: this.get('minimumInputLength'),
          maximumSelectionSize: this.get('maximumSelectionSize')
        };
        return this.$().select2(options);
      },
      willDestroyElement: function() {
        return this.$().select2("destroy");
      },
      resetSelection: (function() {
        if (!Ember.isEmpty(this.get('tags'))) {
          return this.processChildElements();
        }
      }).observes('tags.@each')
    });

    __exports__["default"] = TaggingSelect2;
  });
define("gloit",
  ["./components/gl-datetime-picker","./components/gl-login-form","./templates/gl-login-form","./components/gl-main-toolbar","./templates/gl-main-toolbar","./components/gl-pagination/gl-pagination","./components/gl-sidebar/gl-sidebar","./templates/gl-sidebar","./components/gl-table/gl-column-model","./components/gl-table/gl-table","./templates/gl-table","./components/gl-sidelist/gl-sidelist","./initializers/gl-initializer","exports"],
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

    var TableColumnModel = __dependency9__["default"] || __dependency9__;
    var TableComponent = __dependency10__["default"] || __dependency10__;
    var TableTemplate = __dependency11__["default"] || __dependency11__;

    var SidelistComponent = __dependency12__["default"] || __dependency12__;

    var GloitInitializer = __dependency13__["default"] || __dependency13__;

    Ember.Application.initializer(GloitInitializer);

    Ember.libraries.register('Gloit', '0.1.0');

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

    __exports__.GloitInitializer = GloitInitializer;
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
  });
define("gloit/initializers/gl-initializer",
  ["../components/gl-datetime-picker","../components/gl-login-form","../templates/gl-login-form","../components/gl-main-toolbar","../templates/gl-main-toolbar","../components/gl-pagination/gl-pagination","../components/gl-sidebar/gl-sidebar","../templates/gl-sidebar","../components/gl-table/gl-table","../templates/gl-table","../components/gl-sidelist/gl-sidelist","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __dependency6__, __dependency7__, __dependency8__, __dependency9__, __dependency10__, __dependency11__, __exports__) {
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

    __exports__["default"] = {
      name: 'gloit',

      initialize: function(container) {
        container.register('component:gl-datetime-picker', DatetimePickerComponent);

        container.register('template:components/gl-login-form', LoginFormTemplate);
        container.register('component:gl-login-form', LoginFormComponent);

        container.register('template:components/gl-main-toolbar', MainToolbarTemplate);
        container.register('component:gl-main-toolbar', MainToolbarComponent);

        container.register('component:gl-pagination', PaginationComponent);

        container.register('template:components/gl-sidebar', SidebarTemplate);
        container.register('component:gl-sidebar', SidebarComponent);

        container.register('template:components/gl-table', TableTemplate);
        container.register('component:gl-table', TableComponent);

        container.register('component:gl-sidelist', SidelistComponent);
      }
    };
  });
define("gloit/mixins/style-bindings",
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
define("gloit/templates/gl-login-form",
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
      data.buffer.push(">\n    <h1>");
      stack1 = helpers._triageMustache.call(depth0, "view.titleHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h1>\n    <p class=\"float\">\n      <label for=\"identification\"><i class=\"fa fa-user\"></i>用户名/邮箱：</label>\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'id': ("identification"),
        'type': ("text"),
        'value': ("view.identification"),
        'placeholder': ("请输入您的用户名/邮箱...")
      },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </p>\n    <p class=\"float\">\n      <label for=\"password\"><i class=\"fa fa-key\"></i>密码：</label>\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'id': ("password"),
        'type': ("password"),
        'value': ("view.password"),
        'placeholder': ("请输入您的密码..."),
        'class': ("showpassword")
      },hashTypes:{'id': "STRING",'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    <p class=\"clearfix\"></p>\n    <p class=\"clearfix\">\n      ");
      stack1 = helpers['if'].call(depth0, "view.registerable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      <button type=\"submit\" class=\"btn btn-primary pull-right\">登录</button>\n    </p>\n    <p>");
      stack1 = helpers._triageMustache.call(depth0, "view.copyrightHtmlSafe", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  </form>\n</section>\n<div class=\"browsers\">\n  <ul>\n    ");
      stack1 = helpers.each.call(depth0, "view.supportedBrowers", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </ul>\n</div>\n");
      return buffer;
      
    });
  });
define("gloit/templates/gl-main-toolbar",
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
define("gloit/templates/gl-pagination/gl-button",
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
define("gloit/templates/gl-sidebar",
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
define("gloit/templates/gl-sidebar/gl-brand",
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
define("gloit/templates/gl-sidebar/gl-navigator",
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
define("gloit/templates/gl-sidebar/gl-starter",
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
define("gloit/templates/gl-table",
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
      data.buffer.push("\n  ");
      stack1 = helpers.view.call(depth0, "topbarView", {hash:{
        'barActions': ("topActions")
      },hashTypes:{'barActions': "ID"},hashContexts:{'barActions': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "actionGroupView", {hash:{
        'class': ("pull-left"),
        'content': ("leftActions")
      },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n    ");
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "actionGroupView", {hash:{
        'class': ("pull-right"),
        'content': ("rightActions")
      },hashTypes:{'class': "STRING",'content': "ID"},hashContexts:{'class': depth0,'content': depth0},contexts:[depth0],types:["ID"],data:data})));
      data.buffer.push("\n  ");
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
define("gloit/templates/gl-table/gl-action",
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
define("gloit/templates/gl-table/gl-multiple-selectable-row",
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
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "cellView", {hash:{
        'width': ("width"),
        'row': ("content"),
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
define("gloit/templates/gl-table/gl-row",
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
      data.buffer.push(escapeExpression(helpers.view.call(depth0, "cellView", {hash:{
        'width': ("width"),
        'row': ("content"),
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
define("gloit/templates/gl-table/gl-select-all-cell",
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