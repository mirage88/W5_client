define([
    'vendor/backbone',
    'vendor/fullcalendar'
  ], function(Backbone) {
    var calendarView = Backbone.View.extend({
      el: $('#calendar'),
      render: function() {
        this.$el.fullCalendar({});
      }
    });

    return new calendarView;
  }
);
