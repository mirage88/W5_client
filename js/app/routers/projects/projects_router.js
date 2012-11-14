define([
    'backbone',
    'views/projects/list_view'
  ], function(Backbone, listView) {
    var ProjectsRouter = Backbone.Router.extend({
      routes: {
        'projects/show': 'showAll'
      },
      showAll: function() {
        listView.render();
      }
    });

    var initialize = function() {
      var pRouter = new ProjectsRouter();
    };

    return {
      initialize: initialize
    };
  }
);
