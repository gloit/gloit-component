define(
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