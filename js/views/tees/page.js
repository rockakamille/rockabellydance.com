define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/tees/page.html'
], function($, _, Backbone, Vm, teesPageTemplate){
  var teesPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(teesPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return teesPage;
});
