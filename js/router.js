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
      '/videos': 'videos',
      '/stills': 'stills',
      '/plaything-stills': 'plaything-stills',
      '/kamille': 'kamille',
      '/melissa': 'melissa',
      '/kirstin': 'kirstin',
      '/playthings': 'playthings',
      '/guest-artists': 'guest-artists',
      '/tees': 'tees',
      '/show': 'show',

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
    router.on('route:videos', function () {
      require(['views/videos/page'], function (VideosPage) {
        var videosPage = Vm.create(appView, 'VideosPage', VideosPage);
        videosPage.render();
      });
    });
    router.on('route:stills', function () {
      require(['views/stills/page'], function (StillsPage) {
        var stillsPage = Vm.create(appView, 'StillsPage', StillsPage);
        stillsPage.render();
      });
    });
    router.on('route:plaything-stills', function () {
      require(['views/plaything-stills/page'], function (PlaythingStillsPage) {
        var playthingStillsPage = Vm.create(appView, 'PlaythingStillsPage', PlaythingStillsPage);
        playthingStillsPage.render();
      });
    });
    router.on('route:kamille', function () {
      require(['views/kamille/page'], function (KamillePage) {
        var kamillePage = Vm.create(appView, 'KamillePage', KamillePage);
        kamillePage.render();
      });
    });
    router.on('route:melissa', function () {
      require(['views/melissa/page'], function (MelissaPage) {
        var melissaPage = Vm.create(appView, 'MelissaPage', MelissaPage);
        melissaPage.render();
      });
    });
    router.on('route:kirstin', function () {
      require(['views/kirstin/page'], function (KirstinPage) {
        var kirstinPage = Vm.create(appView, 'KirstinPage', KirstinPage);
        kirstinPage.render();
      });
    });
    router.on('route:playthings', function () {
      require(['views/playthings/page'], function (PlaythingsPage) {
        var playthingsPage = Vm.create(appView, 'PlaythingsPage', PlaythingsPage);
        playthingsPage.render();
      });
    });
    router.on('route:guest-artists', function () {
      require(['views/guest-artists/page'], function (GuestPage) {
        var guestArtistsPage = Vm.create(appView, 'GuestPage', GuestPage);
        guestArtistsPage.render();
      });
    });
    router.on('route:tees', function () {
      require(['views/tees/page'], function (TeesPage) {
        var teesPage = Vm.create(appView, 'TeesPage', TeesPage);
        teesPage.render();
      });
    });
    router.on('route:show', function () {
      require(['views/show/page'], function (ShowPage) {
        var showPage = Vm.create(appView, 'ShowPage', ShowPage);
        showPage.render();
      });
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
