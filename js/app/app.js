define([
    'app/router',
    'app/views/app/menu_view',
    'app/views/app/calendar_view',
  ], function(router, menuView, calendarView) {
    router.initialize();
    menuView.render();
    calendarView.render();
  }
);
