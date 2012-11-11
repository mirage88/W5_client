requirejs.config({
    baseUrl: 'js/',
    paths: {
      app: 'app/',
      vendor: 'libs/vendor/',
      wrapper: 'libs/wrappers'
    },
    shim: {
      'vendor/backbone': {
        deps: ['vendor/underscore', 'wrapper/jquery'],
        exports: 'Backbone'
      },
      'vendor/bootstrap/': {
        deps: ['wrapper/jquery']
      },
      'vendor/underscore': {
        exports: '_'
      }
    }
  }
);

requirejs(['app/app']);
