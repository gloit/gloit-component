define(
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