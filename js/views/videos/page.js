define([
  'jquery',
  'underscore',
  'backbone',
	'vm',
  'text!templates/videos/page.html'
], function($, _, Backbone, Vm, videoPageTemplate){
  var VideoPage = Backbone.View.extend({
    el: '.page',
    render: function () {
      this.$el.html(videoPageTemplate);
    },
		events: {
		  'click .add-view': 'addView'
		},
		addView: function () {
		}
  });
  return VideoPage;
});
