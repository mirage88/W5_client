requirejs.config({
    baseUrl: 'js/',
    paths: {
      app: 'app/',
      collections: 'app/collections',
      models: 'app/models',
      routers: 'app/routers',
      views: 'app/views',
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
