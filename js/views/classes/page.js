define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/classes/page.html'
], function($, _, Backbone, Vm, classesPageTemplate){
  var ClassesPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(classesPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return ClassesPage;
});
