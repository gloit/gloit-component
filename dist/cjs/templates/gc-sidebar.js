"use strict";
var Ember = require("ember")["default"] || require("ember");
exports["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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