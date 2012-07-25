requirejs.config({
    baseUrl: 'js/',
    paths: {
      app: 'app/',
      vendor: 'libs/vendor/',
      wrapper: 'libs/wrappers'
    },
    shim: {
      'vendor/fullcalendar': {
        deps: ['wrapper/jquery']
      }
    }
  }
);

requirejs([
    'app/app'
  ], function(App) {
    App.initialize()
  }
);
