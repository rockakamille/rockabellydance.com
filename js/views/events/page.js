define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/events/page.html'
], function($, _, Backbone, Vm, eventsPageTemplate){
  var EventsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(eventsPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return EventsPage;
});
