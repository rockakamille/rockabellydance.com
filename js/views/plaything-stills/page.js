define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/plaything-stills/page.html'
], function($, _, Backbone, Vm, playthingStillsTemplate){
  var playthingStills = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(playthingStillsTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return playthingStills;
});
