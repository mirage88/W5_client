define([
    'vendor/backbone',
    'vendor/underscore',
    'text!templates/menu.html'
  ], function(Backbone, _, menuViewTemplate) {
    var menuView = Backbone.View.extend({
      el: $('#menu'),
      render: function() {
        this.$el.append(_.template(menuViewTemplate, {string: 'at some point we will render something'}));
      }
    });

    return new menuView;
  }
);
