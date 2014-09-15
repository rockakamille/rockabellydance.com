define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/kirstin/page.html'
], function($, _, Backbone, Vm, kirstinPageTemplate){
  var kirstinPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(kirstinPageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    addView: function () {
    }
  });
  return kirstinPage;
});
