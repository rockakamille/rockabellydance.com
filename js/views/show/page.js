define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'text!templates/show/page.html'
], function($, _, Backbone, Vm, showPageTemplate){
  var showPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(showPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return showPage;
});
