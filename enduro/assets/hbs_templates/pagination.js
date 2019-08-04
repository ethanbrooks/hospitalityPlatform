/*
define(["handlebars"], function(Handlebars) { return Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\"/enblog_demo"
    + alias4(((helper = (helper = helpers.prev_page || (depth0 != null ? depth0.prev_page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prev_page","hash":{},"data":data}) : helper)))
    + "\" class=\"aPagination-aPrevious\">"
    + alias4(((helper = (helper = helpers.previous_page_label || (depth0 != null ? depth0.previous_page_label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"previous_page_label","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <a href=\"/enblog_demo"
    + alias4(((helper = (helper = helpers.next_page || (depth0 != null ? depth0.next_page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"next_page","hash":{},"data":data}) : helper)))
    + "\" class=\"aPagination-aNext\">"
    + alias4(((helper = (helper = helpers.next_page_label || (depth0 != null ? depth0.next_page_label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"next_page_label","hash":{},"data":data}) : helper)))
    + "</a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<nav class=\"aPagination\">\r\n"
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.first : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.last : depth0),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div style=\"clear: both;\"></div>\r\n</nav>\r\n";
},"useData":true}); });

*/