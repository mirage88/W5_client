requirejs.config({
    baseUrl: 'js/',
    paths: {
      jquery: 'libs/vendor/jquery-1.8.2.min',
      underscore: 'libs/vendor/underscore-1.4.2.min',
      backbone: 'libs/vendor/backbone-0.9.2.min',
      bootstrap: 'libs/vendor/bootstrap-2.2.1.min',
      app: 'app',
      collections: 'app/collections',
      models: 'app/models',
      routers: 'app/routers',
      views: 'app/views'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      bootstrap: {
        deps: ['jquery']
      }
    }
  }
);

requirejs(['app/app']);
