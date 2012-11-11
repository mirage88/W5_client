define([
    'vendor/backbone'
  ], function(Backbone) {
    var appRouter = Backbone.Router.extend({
      routes: {
        'main': 'main'
      },
      main: function() {
        this.navigate('main', {trigger: true});
      }
    });

    var initialize = function() {
      var aRouter = new appRouter();
      aRouter.navigate('main', {trigger: true});
    };

    return {
      initialize: initialize
    };
  }
);
