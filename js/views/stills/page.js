define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/stills/page.html'
], function($, _, Backbone, Vm, stillsPageTemplate){
  var stillsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(stillsPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return stillsPage;
});
