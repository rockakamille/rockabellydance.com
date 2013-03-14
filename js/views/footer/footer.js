define([
  'jquery',
  'underscore',
  'backbone',
	'events',
  'text!templates/footer/footer.html',
], function($, _, Backbone, Events, footerTemplate){
  var FooterView = Backbone.View.extend({
    el: '.footer',
    intialize: function () {

    },
    render: function () {
      $(this.el).html(footerTemplate);
    },
		clean: function () {
			//Events.off('viewCreated', this.renderSpringy);
	}
  })

  return FooterView;
});
