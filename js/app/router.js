define([
    'vendor/backbone',
    'app/views/projects/list_view'
  ], function(Backbone, projectsListView) {
    var router = Backbone.Router.extend({
      routes: {
        'projects/show': 'showProjects'
      },
      showProjects: function() {
        projectsListView.render();
      }
    });

    var initialize = function() {
      var appRouter = new router;
      Backbone.history.start();
    };

    return {
      initialize: initialize
    };
  }
);
