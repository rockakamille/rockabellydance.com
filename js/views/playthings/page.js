define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/playthings/page.html'
], function($, _, Backbone, Vm, playthingsPageTemplate){
  var playthingsPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(playthingsPageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    addView: function () {
    }
  });
  return playthingsPage;
});
