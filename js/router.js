// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
	'vm'
], function ($, _, Backbone, Vm) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
      '/dancers': 'dancers',
      '/store': 'store',
      '/visuals': 'visuals',
      '/classes': 'classes',
      '/contact': 'contact',
      '/events': 'events',

      // Default - catch all
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(options){
		var appView = options.appView;
    var router = new AppRouter(options);

		router.on('route:defaultAction', function (actions) {
			require(['views/dashboard/page'], function (DashboardPage) {
        var dashboardPage = Vm.create(appView, 'DashboardPage', DashboardPage);
        dashboardPage.render();
      });
		});
    router.on('route:dancers', function () {
      require(['views/dancers/page'], function (DancersPage) {
        var dancerPage = Vm.create(appView, 'DancersPage', DancersPage);
        dancerPage.render();
      });
    });
		router.on('route:store', function () {
     require(['views/store/page'], function (StorePage) {
        var storePage = Vm.create(appView, 'StoresPage', StorePage);
        storePage.render();
      });
		});
    router.on('route:visuals', function (section) {
      require(['views/visuals/page'], function (VisualsPage) {
        var visualsPage = Vm.create(appView, 'VisualsPage', VisualsPage, {section: section});
        visualsPage.render();
      });
    });
    router.on('route:classes', function (section) {
      require(['views/classes/page'], function (ClassesPage) {
        var classesPage = Vm.create(appView, 'ClassesPage', ClassesPage, {section: section});
        classesPage.render();
      });
    });
		router.on('route:contact', function (section) {
      require(['views/contact/page'], function (ContactPage) {
        var contactPage = Vm.create(appView, 'ContactPage', ContactPage, {section: section});
        contactPage.render();
      });
		});
    router.on('route:events', function () {
      require(['views/events/page'], function (EventsPage) {
        var eventsPage = Vm.create(appView, 'EventsPage', EventsPage);
        eventsPage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
