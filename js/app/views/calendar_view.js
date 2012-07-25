define([
    'vendor/backbone',
    'vendor/fullcalendar'
  ], function(Backbone) {
    var calendarView = Backbone.View.extend({
      el: $('#calendar'),
      render: function() {
        $('#calendar').fullCalendar({});
      }
    });

    return new calendarView;
  }
);
