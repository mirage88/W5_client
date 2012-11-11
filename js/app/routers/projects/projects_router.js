define([
    'vendor/backbone',
    'app/views/projects/list_view'
  ], function(Backbone, listView) {
    var projectsrouter = Backbone.Router.extend({
      routes: {
        'projects/show': 'showAll'
      },
      showAll: function() {
        listView.render();
      }
    });

    var initialize = function() {
      var pRouter = new projectsrouter();
    };

    return {
      initialize: initialize
    };
  }
);
