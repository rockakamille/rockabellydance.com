define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/guest-artists/page.html'
], function($, _, Backbone, Vm, guestPageTemplate){
  var GuestPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(guestPageTemplate);
    },
    events: {
      'click .add-view': 'addView'
    },
    addView: function () {
    }
  });
  return GuestPage;
});
