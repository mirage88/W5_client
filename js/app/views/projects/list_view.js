define([
    'vendor/backbone',
    'vendor/bootstrap'
  ], function(Backbone) {
    var listView = Backbone.View.extend({
      render: function() {
        console.log('Project list to be shown');
      }
    });

    return new listView;
  }
);
