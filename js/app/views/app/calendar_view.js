define([
    'vendor/backbone',
    'vendor/fullcalendar'
  ], function(Backbone) {
    var calendarView = Backbone.View.extend({
      el: $('#calendar'),
      render: function() {
        var calendarOptions = {
          height: 650,
          weekMode: 'liquid'
        }
        this.$el.fullCalendar(calendarOptions);
      }
    });

    return new calendarView;
  }
);
