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
      },
      'vendor/backbone': {
        deps: ['vendor/underscore', 'wrapper/jquery'],
        exports: 'Backbone'
      },
      'vendor/underscore': {
        exports: '_'
      }
    }
  }
);

requirejs([
    'app/app'
  ]
);
