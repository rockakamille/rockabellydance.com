define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/tickets/page.html'
], function($, _, Backbone, Vm, ticketsPageTemplate){
  var ticketsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(ticketsPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return ticketsPage;
});
