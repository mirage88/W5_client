define([
    'routers/app/app_router',
    'routers/projects/projects_router',
    'views/app/menu_view'
  ], function(appRouter, projectsRouter, menuView) {
    appRouter.initialize();
    projectsRouter.initialize();
    menuView.render();
    Backbone.history.start();
  }
);
