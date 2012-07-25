define([
    'vendor/backbone',
  ], function(Backbone) {
    var menuView = Backbone.View.extend({
      el: $('#menu'),
      render: function() {
        console.log('at some point we will render something');
      }
    });

    return new menuView;
  }
);
