define([
    'vendor/backbone',
    'vendor/fullcalendar'
  ], function(Backbone) {
    var appView = Backbone.View.extend({
      el: $('#calendar'),
      render: function() {
        $('#calendar').fullCalendar({});
      }
    });

    return new appView;
  }
);
