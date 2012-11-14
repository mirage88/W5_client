define([
    'views/app/menu_view',
    'collections/schedule',
    'routers/projects/projects_router',
  ], function(menuView, Schedule, projectsRouter) {
    menuView.render();

    projectsRouter.initialize();

    Backbone.history.start();

    var schedule = new Schedule();
    jQuery.each(schedule.models, function() {
      console.log(this.get('startDate'));
    });

  }
);
