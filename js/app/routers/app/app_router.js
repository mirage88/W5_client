define([
    'backbone'
  ], function(Backbone) {
    var AppRouter = Backbone.Router.extend({
      routes: {
        'main': 'main'
      },
      main: function() {
        this.navigate('main', {trigger: true});
      }
    });

    var initialize = function() {
      var aRouter = new AppRouter();
      aRouter.main();
    };

    return {
      initialize: initialize
    };
  }
);
