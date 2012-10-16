define([
    'app/router',
    'app/views/app/menu_view'
  ], function(router, menuView) {
    router.initialize();
    menuView.render();
  }
);
