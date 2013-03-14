define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/contact/page.html'
], function($, _, Backbone, Vm, contactPageTemplate){
  var ContactPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(contactPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return ContactPage;
});
