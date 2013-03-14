define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/store/page.html'
], function($, _, Backbone, Vm, storePageTemplate){
  var StorePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(storePageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return StorePage;
});
