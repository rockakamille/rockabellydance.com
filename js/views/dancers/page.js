define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/dancers/page.html'
], function($, _, Backbone, Vm, dancersPageTemplate){
  var DancersPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(dancersPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return DancersPage;
});
