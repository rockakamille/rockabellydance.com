define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/kamille/page.html'
], function($, _, Backbone, Vm, kamillePageTemplate){
  var kamillePage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(kamillePageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    addView: function () {
    }
  });
  return kamillePage;
});
