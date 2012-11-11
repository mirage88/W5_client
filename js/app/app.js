define([
    'app/routers/app/app_router',
    'app/routers/projects/projects_router',
    'app/views/app/menu_view'
  ], function(appRouter, projectsRouter, menuView) {
    appRouter.initialize();
    projectsRouter.initialize();
    menuView.render();
    Backbone.history.start();
  }
);
