define([
    'vendor/backbone',
    'models/scheduled_week'
  ], function(Backbone, ScheduledWeek) {
    var Schedule = Backbone.Collection.extend({
      model: ScheduledWeek,

      initialize: function() {
        var thisMonday = this.getMondayOfCurrentWeek();
        this.push(new ScheduledWeek({ startDate: thisMonday }));

        var nextMonday = new Date(thisMonday);
        for(i = 1; i < Schedule.viewableWeeks; i++) {
          nextMonday.setDate(nextMonday.getDate() + 7);
          this.push(new ScheduledWeek({ startDate: new Date(nextMonday) }));
        }
      },

      getMondayOfCurrentWeek: function() {
        var d = new Date();
        var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1);
        return new Date(d.setDate(diff));
      }
    }, {
      viewableWeeks: 6
    });

    return Schedule;
  }
);