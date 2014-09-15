define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/melissa/page.html'
], function($, _, Backbone, Vm, melissaPageTemplate){
  var melissaPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(melissaPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return melissaPage;
});
