define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/visuals/page.html'
], function($, _, Backbone, Vm, visualsPageTemplate){
  var VisualsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(visualsPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return VisualsPage;
});
